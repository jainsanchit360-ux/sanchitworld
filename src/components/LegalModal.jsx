import React from 'react'
import { X, ShieldCheck, FileText, AlertCircle } from 'lucide-react'

export default function LegalModal({ activeLegal, onClose }) {
  if (!activeLegal) return null

  const getTitle = () => {
    switch (activeLegal) {
      case 'privacy':
        return 'Privacy Policy'
      case 'terms':
        return 'Terms & Conditions'
      case 'disclaimer':
        return 'Disclaimer'
      default:
        return 'Legal'
    }
  }

  const getIcon = () => {
    switch (activeLegal) {
      case 'privacy':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />
      case 'terms':
        return <FileText className="w-6 h-6 text-purple-400" />
      case 'disclaimer':
        return <AlertCircle className="w-6 h-6 text-amber-400" />
      default:
        return <FileText className="w-6 h-6 text-indigo-400" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0e1424] border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
              {getIcon()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{getTitle()}</h2>
              <p className="text-xs text-slate-400">sanchitworld.in • Effective Date: September 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {activeLegal === 'privacy' && (
            <>
              <section>
                <h3 className="text-base font-semibold text-white mb-2">1. Overview</h3>
                <p>
                  Welcome to sanchitworld.in ("Website"), owned and operated by Sanchit Jain. Respecting your privacy is a core priority. This Privacy Policy explains what information may be collected when you visit this website and how it is used.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">2. Information Collection & Usage</h3>
                <p className="mb-2">
                  As a personal portfolio website, sanchitworld.in does not require registration, account creation, or mandatory submission of personal data.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Voluntary Contact Information:</strong> If you choose to contact Sanchit Jain via email or the contact form, the provided details (name, email address, message content) are used solely to reply to your inquiry.</li>
                  <li><strong>Log Files & Basic Analytics:</strong> Like standard web servers, anonymous server logs (IP address, browser type, referring pages, timestamp) may be automatically recorded for system maintenance and security monitoring.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">3. Cookies & Advertising (Google AdSense)</h3>
                <p className="mb-2">
                  This website integrates Google AdSense verification code (`ca-pub-7811625552429496`). Third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to this website or other websites.
                </p>
                <p>
                  Users may opt out of personalized advertising by visiting Google's Ads Settings or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">aboutads.info</a>.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">4. Third-Party Links</h3>
                <p>
                  This website contains links to external sites, including ToolNagri (https://tools.sanchitworld.in/), GitHub, LinkedIn, and project repositories. Sanchit Jain is not responsible for the privacy practices or contents of third-party external sites.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">5. Updates & Contact</h3>
                <p>
                  This policy may be updated periodically to reflect website changes or regulatory requirements. For questions regarding this Privacy Policy, please contact: <strong>jainsanchit360@gmail.com</strong>.
                </p>
              </section>
            </>
          )}

          {activeLegal === 'terms' && (
            <>
              <section>
                <h3 className="text-base font-semibold text-white mb-2">1. Terms of Use</h3>
                <p>
                  By accessing and navigating sanchitworld.in, you agree to comply with these Terms & Conditions. If you disagree with any part of these terms, please refrain from using this website.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">2. Intellectual Property Rights</h3>
                <p>
                  Unless otherwise indicated, all original content, portfolio project descriptions, design elements, and source code showcased on this website are the personal property of Sanchit Jain. You may view and reference the portfolio for personal, educational, or professional evaluation purposes.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">3. External Links & Tools</h3>
                <p>
                  Links to external tools (such as ToolNagri at https://tools.sanchitworld.in/) and student projects are provided for convenience and portfolio demonstration. Each platform operates under its respective terms and functionalities.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">4. Limitation of Liability</h3>
                <p>
                  The content on sanchitworld.in is provided on an "AS IS" basis without warranties of any kind. Sanchit Jain shall not be liable for any damages arising out of the use or inability to use the information provided on this website.
                </p>
              </section>
            </>
          )}

          {activeLegal === 'disclaimer' && (
            <>
              <section>
                <h3 className="text-base font-semibold text-white mb-2">1. Educational & Portfolio Nature</h3>
                <p>
                  The information and projects presented on sanchitworld.in represent the academic work, student initiatives, and personal technology projects of Sanchit Jain (B.Tech Student in Artificial Intelligence & Data Science at Guru Ghasidas Vishwavidyalaya, Bilaspur).
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">2. Accuracy & No Professional Guarantee</h3>
                <p>
                  While every effort is made to present accurate details regarding projects, skills, and academic activities, all information is provided for general informational purposes. Skill descriptions reflect academic coursework and student project experience without claims of expert commercial certification.
                </p>
              </section>

              <section>
                <h3 className="text-base font-semibold text-white mb-2">3. Separate Platforms Notice</h3>
                <p>
                  ToolNagri (https://tools.sanchitworld.in/) is an independent utility website hosted on a sub-domain. Any usage of ToolNagri is subject to its own operational guidelines.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  )
}
