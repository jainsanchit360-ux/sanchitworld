import React from 'react'
import { GraduationCap, BookOpen, Compass, Code, Brain, Database, Cpu, Globe, Zap, Layers } from 'lucide-react'
import { profile, areasOfInterest } from '../data/portfolioData'

export default function About() {
  const areaIcons = [
    <Brain className="w-5 h-5 text-indigo-400" />,
    <Database className="w-5 h-5 text-purple-400" />,
    <Cpu className="w-5 h-5 text-indigo-400" />,
    <Globe className="w-5 h-5 text-purple-400" />,
    <Zap className="w-5 h-5 text-indigo-400" />,
    <Layers className="w-5 h-5 text-purple-400" />,
  ]

  return (
    <section id="about" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            About Me
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Passionate about AI, Data & Software Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
                Introduction
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {profile.bio}
              </p>
              
              <div className="pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  Education
                </h4>
                <div className="p-4 rounded-xl bg-slate-850 border border-slate-800">
                  <div className="text-sm font-bold text-white mb-1">
                    B.Tech – Artificial Intelligence & Data Science
                  </div>
                  <div className="text-xs font-medium text-indigo-400 mb-1">
                    Guru Ghasidas Vishwavidyalaya (GGV)
                  </div>
                  <div className="text-xs text-slate-400">
                    Central University • Bilaspur, Chhattisgarh
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-purple-950/20 border border-indigo-900/30">
              <h4 className="text-sm font-bold text-indigo-300 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400" />
                Current Focus
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently focusing on strengthening core computer science fundamentals (C++ & Data Structures), developing machine learning models for practical applications, and scaling useful web tools for users.
              </p>
            </div>
          </div>

          {/* Areas of Interest Grid */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Areas of Interest
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areasOfInterest.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {areaIcons[idx % areaIcons.length]}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
