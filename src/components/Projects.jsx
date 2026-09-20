import React from 'react'
import { ExternalLink, Github, Wrench, Store, MapPin, Activity, Share2, PlusCircle, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'toolnagri':
        return <Wrench className="w-6 h-6 text-indigo-400" />
      case 'ggv-bazar':
        return <Store className="w-6 h-6 text-purple-400" />
      case 'campus-navigator':
        return <MapPin className="w-6 h-6 text-indigo-400" />
      case 'medicine-stock':
        return <Activity className="w-6 h-6 text-emerald-400" />
      case 'skillswap':
        return <Share2 className="w-6 h-6 text-purple-400" />
      default:
        return <Wrench className="w-6 h-6 text-indigo-400" />
    }
  }

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Featured Projects
          </h2>
          <p className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
            Software, Utility & AI Projects
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Exploration across web utility platforms, campus tools, and intelligent predictive algorithms.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-all group flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  {project.category}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-800/80">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-medium border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <span>Visit {project.title}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 font-semibold text-xs text-center">
                    Campus Marketplace Initiative • In Active Development
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects & Extensible AI/DS Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">
              More AI & Data Science Projects
            </h3>
            <span className="text-xs text-slate-400 font-medium">Extensible Showcase</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                      {getProjectIcon(project.id)}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-indigo-400 mb-3 font-medium">
                    {project.category}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Extensible placeholder card */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-dashed border-slate-800 flex flex-col items-center justify-center text-center py-10">
              <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500 mb-3">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-slate-300 mb-1">
                More Projects Coming Soon
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                New machine learning models, generative AI experiments, and web utilities will be featured here as they are deployed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
