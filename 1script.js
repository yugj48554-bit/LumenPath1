require('dotenv').config();
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- CONFIGURATION ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- MOCK KNOWLEDGE GRAPH DATA ---
const skillsGraph = {
    "Frontend Dev": ["React", "CSS", "TypeScript", "Next.js", "Tailwind"],
    "Backend Dev": ["Node.js", "Express", "PostgreSQL", "Docker", "Redis"],
    "DevOps": ["Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"],
    "Full Stack Engineer": ["React", "Node.js", "PostgreSQL", "System Design", "AWS"],
    "Data Scientist": ["Python", "Pandas", "PyTorch", "SQL", "Statistics"]
};

// --- HELPER FUNCTIONS ---

const getMarketTrends = () => {
    return [
        { skill: "Rust", val: "+14.2%", trend: "up" },
        { skill: "GenAI", val: "+22.5%", trend: "up" },
        { skill: "Kubernetes", val: "+5.1%", trend: "up" },
        { skill: "PHP", val: "-2.3%", trend: "down" },
        { skill: "React", val: "+1.8%", trend: "up" },
        { skill: "Vector DBs", val: "+30.1%", trend: "up" },
    ];
};

const calculateGap = (currentRole, targetRole) => {
    const currentSkills = new Set(skillsGraph[currentRole] || ["General Code"]);
    const targetSkills = new Set(skillsGraph[targetRole] || ["Advanced Architecture"]);
    
    // Find missing skills (Target - Current)
    const missing = [...targetSkills].filter(x => !currentSkills.has(x));
    
    // Fallback if no specific skills found in mock DB
    const finalMissing = missing.length > 0 
        ? missing 
        : ["Advanced Architecture Patterns", "System Design", "Leadership"];

    // Generate a random match score between 35 and 85
    const matchScore = Math.floor(Math.random() * (85 - 35 + 1) + 35);

    return { matchScore, missing: finalMissing };
};

// --- API ENDPOINTS ---

// 1. Get Market Ticker Data
app.get('/api/market-pulse', (req, res) => {
    res.json(getMarketTrends());
});

// 2. Analyze Profile & Generate Roadmap (RAG + AI)
app.post('/api/analyze', async (req, res) => {
    const { current_role, target_role } = req.body;

    // A. Knowledge Graph Logic
    const { matchScore, missing } = calculateGap(current_role, target_role);

    // B. AI Generation Logic
    let roadmap = [];

    // Fallback roadmap if API key is missing
    if (!process.env.GEMINI_API_KEY) {
        roadmap = [
            { step: "Phase 1", description: "Set up API Key in .env to use AI", tool: "Configuration", duration: "5 mins" },
            { step: "Phase 2", description: "Learn fundamentals", tool: missing[0] || "Basics", duration: "2 Weeks" }
        ];
    } else {
        try {
            const prompt = `
            Act as an expert Career Architect using a Knowledge Graph.
            User is moving from '${current_role}' to '${target_role}'.
            Identified Skill Gaps: ${missing.join(', ')}.
            
            Create a 3-step concrete roadmap. 
            Return strictly JSON in this format (no markdown, no backticks):
            [
                {"step": "Phase 1: Title", "description": "Short explanation", "tool": "Specific Tool", "duration": "Time"}
            ]
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            // Clean up Markdown formatting if Gemini adds it
            const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
            roadmap = JSON.parse(jsonStr);

        } catch (error) {
            console.error("Gemini Error:", error);
            roadmap = [
                { step: "Error", description: "AI Generation Failed. Check server logs.", tool: "N/A", duration: "0" }
            ];
        }
    }

    res.json({
        match_score: matchScore,
        missing_skills: missing,
        roadmap: roadmap,
        rationale: `Analysis grounded in ${missing.length} detected vector gaps.`
    });
});

// Serve frontend for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Lumen Path Server running at http://localhost:${PORT}`);
});
