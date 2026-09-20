import React from 'react'
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                S
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Sanchit<span className="text-indigo-500">Jain</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Personal portfolio and project showcase for Sanchit Jain — B.Tech Artificial Intelligence & Data Science student at Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                title="Email Sanchit"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-indigo-400 transition-colors">Activities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Featured & Legal */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                Featured Platforms
              </h4>
              <a
                href="https://tools.sanchitworld.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:border-indigo-500/40 hover:text-white transition-all"
              >
                <span>ToolNagri (Utility Platform)</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </a>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Legal & Policy
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => onOpenLegal('privacy')}
                    className="hover:text-indigo-400 text-left transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegal('terms')}
                    className="hover:text-indigo-400 text-left transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegal('disclaimer')}
                    className="hover:text-indigo-400 text-left transition-colors"
                  >
                    Disclaimer
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sanchit Jain (sanchitworld.in). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React & Vite for AdSense Review</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
