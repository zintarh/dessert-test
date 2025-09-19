'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Dissert Scaffold</span>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Evaluate your research topics with expert-powered analysis across six key metrics to maximize funding success and research impact.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">Evaluation</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/novelty" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Novelty Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/grants" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Grant Potential
                  </Link>
                </li>
                <li>
                  <Link href="/trends" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Trend Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Methodology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/research-guide" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Research Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Research Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/research-community" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Research Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

       

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-500 text-sm">
                © 2024 Dissert Scaffold. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Made with ❤️ for researchers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
