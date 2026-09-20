import React from 'react'
import { Code, Terminal, Database, Brain, GitBranch, Cpu, Sparkles, Layers } from 'lucide-react'
import { skills } from '../data/portfolioData'

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming':
        return <Terminal className="w-4 h-4 text-indigo-400" />
      case 'Core CS':
        return <Code className="w-4 h-4 text-purple-400" />
      case 'AI & ML':
        return <Brain className="w-4 h-4 text-indigo-400" />
      case 'Data Science':
        return <Cpu className="w-4 h-4 text-purple-400" />
      case 'Database':
        return <Database className="w-4 h-4 text-indigo-400" />
      case 'Engineering':
        return <Layers className="w-4 h-4 text-purple-400" />
      case 'Tools':
        return <GitBranch className="w-4 h-4 text-indigo-400" />
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />
    }
  }

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Technical Competencies
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Skills & Knowledge Base
          </p>
          <p className="mt-3 text-sm text-slate-400">
            A genuine overview of programming languages, frameworks, and core domain knowledge acquired through academic coursework and practical project development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(skill.category)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    {skill.category}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700/50 shrink-0">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Learning Commitment Note */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-indigo-400 font-semibold">Continuous Learning:</span> Continually refining Data Structures & Algorithms problem-solving skills in C++, building machine learning pipelines in Python, and adopting modern full-stack web standards.
          </p>
        </div>

      </div>
    </section>
  )
}
