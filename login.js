import React from "react";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#061b14] via-[#06261c] to-[#04110c] text-white">
      <div className="w-full max-w-md rounded-2xl bg-[#071f17]/80 backdrop-blur-xl shadow-2xl border border-emerald-900/40 p-8">
        {/* Logo / Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-emerald-400">Lumen</span>Path
          </h1>
          <p className="mt-2 text-sm text-emerald-200/70">
            Sign in to navigate your career with precision
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-emerald-200">Email</label>
            <div className="flex items-center gap-2 rounded-xl bg-[#04110c] border border-emerald-900/50 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
              <Mail size={18} className="text-emerald-400" />
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-emerald-200">Password</label>
            <div className="flex items-center gap-2 rounded-xl bg-[#04110c] border border-emerald-900/50 px-3 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
              <Lock size={18} className="text-emerald-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-emerald-200/70">
              <input type="checkbox" className="accent-emerald-500" />
              Remember me
            </label>
            <a href="#" className="text-emerald-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#04110c] font-semibold py-2 transition-all shadow-lg shadow-emerald-900/40"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-emerald-200/60">
          Don’t have an account?{" "}
          <a href="#" className="text-emerald-400 hover:underline">
            Get started
          </a>
        </p>
      </div>
    </div>
  );
}
