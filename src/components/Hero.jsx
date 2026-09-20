import React from 'react'
import { ArrowRight, Code2, Sparkles, GraduationCap, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>B.Tech AI & Data Science Student @ GGV Bilaspur</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">{profile.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Aspiring Artificial Intelligence & Data Science engineer building intelligent web platforms, campus utilities, and data-driven software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xl font-bold text-indigo-400">GGV Bilaspur</div>
              <div className="text-xs text-slate-400 font-medium">B.Tech AI & Data Science</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xl font-bold text-purple-400">AWS Leader</div>
              <div className="text-xs text-slate-400 font-medium">AWS Builder Leader GGV</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xl font-bold text-indigo-400">ToolNagri</div>
              <div className="text-xs text-slate-400 font-medium">Creator & Developer</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
