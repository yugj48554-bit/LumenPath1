// --- Icons ---
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const TerminalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const DatabaseIcon = ({size=24}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><line x1="12" y1="12" x2="12" y2="8"/></svg>;
const CpuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

// --- Components ---
const GlowButton = ({ children, primary, fullWidth }) => (
    <button className={`relative group px-6 py-3 font-bold text-sm rounded-lg transition-all duration-300 ${fullWidth ? 'w-full' : ''}
        ${primary 
        ? 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]' 
        : 'border border-emerald-900/50 text-emerald-100 hover:border-emerald-500 hover:text-white bg-emerald-950/30'}`}>
        {children}
    </button>
);

const TechTag = ({ text }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-800/50 font-mono">
        {text}
    </span>
);

const EngineCard = ({ icon, title, subtitle, children, accent = "emerald" }) => {
    const borderColor = accent === "emerald" ? "hover:border-emerald-500/50" : "hover:border-teal-500/50";
    const glowColor = accent === "emerald" ? "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]" : "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]";

    return (
        <div className={`group bg-[#082012] border border-emerald-900/40 rounded-2xl p-6 transition-all duration-300 ${borderColor} ${glowColor} relative z-10`}>
            <div className="mb-4 p-3 bg-emerald-950/50 rounded-xl inline-block border border-emerald-900/50">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
            <p className={`text-sm font-mono mb-4 ${accent === "emerald" ? "text-emerald-400" : "text-teal-400"}`}>{subtitle}</p>
            {children}
        </div>
    );
};

const MarketTicker = () => {
    const items = [
        { skill: "Python", val: "+2.4%" }, { skill: "Rust", val: "+5.1%" }, { skill: "React", val: "+0.8%" },
        { skill: "K8s", val: "+3.2%" }, { skill: "PHP", val: "-1.2%" }, { skill: "AI Ethics", val: "+12%" },
        { skill: "Flutter", val: "+1.9%" }, { skill: "Go", val: "+4.4%" }, { skill: "SQL", val: "+0.5%" },
        { skill: "AWS", val: "+1.1%" }, { skill: "C++", val: "+0.3%" }, { skill: "GenAI", val: "+15.6%" }
    ];

    return (
        <div className="w-full bg-[#031108] border-b border-emerald-900/30 py-2 overflow-hidden flex fixed top-[80px] z-40 backdrop-blur-sm">
            <div className="flex gap-8 items-center whitespace-nowrap ticker-content">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex gap-2 text-xs font-mono text-emerald-100/60">
                        <span>{item.skill}</span>
                        <span className={item.val.includes('+') ? 'text-emerald-400' : 'text-red-400'}>{item.val}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PricingCard = ({ title, price, features, primary }) => (
    <div className={`p-8 rounded-2xl border flex flex-col h-full relative ${primary ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'bg-[#082012] border-emerald-900/30'}`}>
        {primary && (
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded">MOST POPULAR</span>
            </div>
        )}
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-white mb-6">{price}</div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((f, i) => (
                <li key={i} className="flex gap-3 text-sm text-emerald-100/70">
                    <span className="text-emerald-500"><CheckIcon /></span> {f}
                </li>
            ))}
        </ul>
        <GlowButton primary={primary} fullWidth>Choose Plan</GlowButton>
    </div>
);

const LumenPathPrototype = () => {
    return (
        <div className="min-h-screen bg-[#051a0d] text-white font-sans selection:bg-emerald-900 selection:text-emerald-50 overflow-x-hidden">
            
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-teal-900/20 blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 bg-texture opacity-[0.05]"></div>
            </div>

            {/* Navigation */}
            <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-emerald-900/30 backdrop-blur-md fixed w-full z-50 top-0 bg-[#051a0d]/80">
                <div className="flex items-center gap-2">
                    <div className="text-emerald-400"><LayersIcon /></div>
                    <div className="text-xl font-bold tracking-tighter text-white">
                        Lumen<span className="text-emerald-400">Path</span>.
                    </div>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-emerald-100/70">
                    <a href="#engines" className="hover:text-emerald-400 transition-colors">Technology</a>
                    <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a>
                    <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
                </div>
                <div className="flex gap-4">
                    <button className="text-sm font-semibold text-emerald-100/70 hover:text-white">Log In</button>
                    <GlowButton primary>Get Started</GlowButton>
                </div>
            </nav>

            <MarketTicker />

            {/* Hero Section */}
            <main className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-300 text-sm font-mono mb-6">
                            <div className="w-4 h-4"><TerminalIcon /></div>
                            RAG Pipeline Active. Knowledge Graph Online.
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                            Navigate the Job Market with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Mathematical Precision.</span>
                        </h1>
                        <p className="text-lg text-emerald-100/80 mb-8 max-w-lg leading-relaxed">
                            Stop guessing based on outdated blogs. Lumen Path uses a real-time <strong>Knowledge Graph</strong> to analyze your skills against live market data.
                        </p>
                        <div className="flex gap-4">
                            <GlowButton primary>
                                <span className="flex items-center gap-2">
                                    Analyze My Profile <span className="w-4 h-4"><ArrowRightIcon /></span>
                                </span>
                            </GlowButton>
                            <GlowButton>View Demo Path</GlowButton>
                        </div>
                        <div className="mt-8 flex items-center gap-4 text-xs text-emerald-100/40 font-mono">
                            <span>POWERED BY:</span>
                            <span className="flex items-center gap-1"><DatabaseIcon size={12}/> GEMINI 1.5</span>
                            <span className="flex items-center gap-1"><NetworkIcon size={12}/> VECTOR DB</span>
                        </div>
                    </div>
                    
                    {/* Hero Visualization */}
                    <div className="relative h-[400px] bg-[#082012] border border-emerald-900/50 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center opacity-70">
                            <div className="w-full h-full relative">
                                {[...Array(25)].map((_,i) => (
                                    <div key={i} className="absolute w-1.5 h-1.5 bg-emerald-700/60 rounded-full" style={{top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, opacity: Math.random()}}></div>
                                ))}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                    <path d="M 50,350 C 150,250 250,300 350,50" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" filter="drop-shadow(0 0 8px #10b981)"/>
                                    <circle cx="50" cy="350" r="6" fill="#10b981" />
                                    <circle cx="350" cy="50" r="6" fill="#10b981" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute top-10 left-10 p-4 bg-[#051a0d]/90 backdrop-blur border border-emerald-500/30 rounded-lg shadow-lg">
                            <div className="text-xs text-emerald-200/70 mb-2 font-mono">&gt; DETECTED GAP:</div>
                            <div className="flex gap-2 items-center">
                                <TechTag text="React Native" />
                                <span className="text-emerald-500"><ArrowRightIcon /></span>
                                <TechTag text="Flutter" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* The Three Engines Section */}
            <section id="engines" className="py-24 relative z-10 bg-[#082012]/50 border-y border-emerald-900/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">The Architecture: <span className="text-emerald-400">RAG + Knowledge Graph</span></h2>
                        <p className="text-emerald-100/70 max-w-2xl mx-auto">
                            Career advice isn't guessed by an AI; it's grounded in a three-stage pipeline processing real-world data.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-1/3 w-1/6 h-[2px] bg-gradient-to-r from-emerald-900 to-emerald-500/50 -translate-y-1/2 z-0"></div>
                        <div className="hidden md:block absolute top-1/2 right-1/3 w-1/6 h-[2px] bg-gradient-to-r from-emerald-500/50 to-teal-900 -translate-y-1/2 z-0"></div>

                        <EngineCard 
                            icon={<div className="text-emerald-400"><DatabaseIcon /></div>}
                            title="1. Ingestion Engine"
                            subtitle="Real-time Market Sensing"
                        >
                            <p className="text-emerald-100/70 text-sm mb-4">
                                A fleet of connectors feeds raw market data into a central lake. We don't rely on data from last year; we use data from today.
                            </p>
                            <div className="mt-4 pt-4 border-t border-emerald-900/50">
                                <div className="text-xs font-mono text-emerald-300/70 animate-pulse">
                                    &gt; STREAM: Receiving 1.2k new JDs/hr...
                                </div>
                            </div>
                        </EngineCard>

                        <EngineCard 
                            icon={<div className="text-teal-400"><NetworkIcon /></div>}
                            title="2. Mapping Engine"
                            subtitle="Vector Embeddings & Graph"
                            accent="teal"
                        >
                            <p className="text-emerald-100/70 text-sm mb-4">
                                We use Vector Embeddings to turn "Skills" into coordinates. The system understands "Data Scientist" and "ML Engineer" are neighbors.
                            </p>
                            <div className="p-3 bg-emerald-950/50 rounded-lg border border-emerald-900/50 font-mono text-xs text-right text-teal-300 mt-1">Vector Proximity: 0.92</div>
                        </EngineCard>

                        <EngineCard 
                            icon={<div className="text-emerald-400"><CpuIcon /></div>}
                            title="3. Synthesis Engine"
                            subtitle="Generative RAG (Gemini 1.5)"
                        >
                            <p className="text-emerald-100/70 text-sm mb-4">
                                Powered by Gemini 1.5 Flash. It takes your specific Gap Analysis and authors a human-readable, step-by-step training roadmap.
                            </p>
                            <div className="p-3 bg-emerald-950/50 rounded-lg border border-emerald-900/50 font-mono text-xs text-emerald-200">
                                <span className="text-emerald-400">AI &gt; </span> Prioritize <span className="text-teal-300">Kafka</span> over Redis.
                            </div>
                        </EngineCard>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview Section */}
            <section id="dashboard" className="py-24 relative z-10 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="bg-[#031108] border border-emerald-900/50 rounded-xl overflow-hidden shadow-2xl">
                                <div className="h-8 bg-emerald-950/50 border-b border-emerald-900/50 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="p-6 grid grid-cols-12 gap-4">
                                    <div className="col-span-4 border-r border-emerald-900/30 pr-4">
                                        <div className="text-xs text-emerald-400 font-mono mb-2">YOUR PROFILE</div>
                                        <div className="text-white font-bold mb-4">Frontend Dev</div>
                                        <div className="space-y-2">
                                            <div className="h-2 bg-emerald-900/30 rounded w-full"><div className="w-3/4 h-full bg-emerald-500 rounded"></div></div>
                                            <div className="h-2 bg-emerald-900/30 rounded w-full"><div className="w-1/2 h-full bg-teal-500 rounded"></div></div>
                                        </div>
                                    </div>
                                    <div className="col-span-8">
                                        <div className="text-xs text-teal-400 font-mono mb-2">GENERATED ROADMAP</div>
                                        <div className="p-3 bg-emerald-900/20 rounded border border-emerald-900/30 mb-2">
                                            <div className="text-xs text-white flex justify-between">
                                                <span>Week 1-4: Advanced TypeScript</span>
                                                <span className="text-emerald-400">In Progress</span>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-emerald-900/10 rounded border border-emerald-900/30 opacity-70">
                                            <div className="text-xs text-white">Week 5-8: GraphQL Integration</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-black px-4 py-2 rounded-lg font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                +40% Salary Potential
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold mb-6 text-white">Your Career, <span className="text-emerald-400">Visualized.</span></h2>
                            <p className="text-emerald-100/70 mb-6 leading-relaxed">
                                No more generic advice. The Lumen Path Dashboard gives you a granular breakdown of your skill proximity to your dream role.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-center text-emerald-200">
                                    <span className="p-1 bg-emerald-900/50 rounded text-emerald-400"><TrendingUpIcon /></span>
                                    Live "Skill Demand" tracking
                                </li>
                                <li className="flex gap-3 items-center text-emerald-200">
                                    <span className="p-1 bg-emerald-900/50 rounded text-emerald-400"><NetworkIcon /></span>
                                    Node-based visual mapping
                                </li>
                                <li className="flex gap-3 items-center text-emerald-200">
                                    <span className="p-1 bg-emerald-900/50 rounded text-emerald-400"><TerminalIcon /></span>
                                    Exportable JSON/PDF Syllabus
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-white">Invest in your <span className="text-emerald-400">Future</span></h2>
                    <p className="text-emerald-100/70">Clear pricing for clear career paths.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <PricingCard 
                        title="Scout" 
                        price="$0" 
                        features={["Basic Skill Graph", "1 Roadmap Generation", "Weekly Market Trends"]} 
                    />
                    <PricingCard 
                        title="Navigator" 
                        price="$29/mo" 
                        features={["Full Knowledge Graph", "Unlimited AI Synthesis", "Live Gap Analysis", "Certificates Integration"]} 
                        primary={true}
                    />
                    <PricingCard 
                        title="Enterprise" 
                        price="Custom" 
                        features={["API Access", "Team Skill Mapping", "Hiring Integration", "Custom Data Sources"]} 
                    />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto relative z-10 border-t border-emerald-900/30">
                <h2 className="text-2xl font-bold mb-8 text-center text-white">Common Questions</h2>
                <div className="space-y-6">
                    <div className="bg-[#082012] p-6 rounded-lg border border-emerald-900/30">
                        <h4 className="font-bold text-emerald-300 mb-2">Does the AI hallucinate job requirements?</h4>
                        <p className="text-sm text-emerald-100/70">No. The Synthesis Engine (Gemini) is strictly grounded by our Knowledge Graph. It cannot invent skills; it can only recommend skills that exist in our real-time database.</p>
                    </div>
                    <div className="bg-[#082012] p-6 rounded-lg border border-emerald-900/30">
                        <h4 className="font-bold text-emerald-300 mb-2">How often is data updated?</h4>
                        <p className="text-sm text-emerald-100/70">Our Ingestion Engine runs 24/7. We update the Vector Embeddings every 6 hours to capture emerging trends immediately.</p>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-[#031108] border-t border-emerald-900/30 py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-emerald-400"><LayersIcon /></div>
                            <div className="text-xl font-bold text-white">Lumen<span className="text-emerald-400">Path</span>.</div>
                        </div>
                        <p className="text-emerald-100/50 text-sm max-w-sm">
                            Bridging the gap between education and industry requirements using advanced RAG pipelines.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-white mb-4">Product</h5>
                        <ul className="space-y-2 text-sm text-emerald-100/60">
                            <li><a href="#" className="hover:text-emerald-400">Features</a></li>
                            <li><a href="#" className="hover:text-emerald-400">Pricing</a></li>
                            <li><a href="#" className="hover:text-emerald-400">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-white mb-4">Company</h5>
                        <ul className="space-y-2 text-sm text-emerald-100/60">
                            <li><a href="#" className="hover:text-emerald-400">About</a></li>
                            <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
                            <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-emerald-900/30 pt-8 text-center text-xs text-emerald-100/30">
                    &copy; 2025 Lumen Path Intelligence. All systems nominal.
                </div>
            </footer>
        </div>
    );
};

// Root Injection
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LumenPathPrototype />);
