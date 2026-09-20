import React from 'react'
import { Award, Users, Trophy, Code2, ArrowUpRight } from 'lucide-react'
import { activities } from '../data/portfolioData'

export default function Activities() {
  const activityIcons = [
    <Award className="w-6 h-6 text-amber-400" />,
    <Trophy className="w-6 h-6 text-indigo-400" />,
    <Users className="w-6 h-6 text-purple-400" />,
  ]

  return (
    <section id="activities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Leadership & Community
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Activities & Achievements
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Active involvement in campus leadership, student technology communities, and competitive innovation hackathons.
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div
              key={act.role}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {activityIcons[idx % activityIcons.length]}
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-medium mb-3">
                  {act.period}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {act.role}
                </h3>

                <p className="text-xs font-semibold text-indigo-400 mb-4">
                  {act.organization}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Student Community Engagement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
