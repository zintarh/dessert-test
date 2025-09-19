'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Lattice Logo Icon */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Dissert Scaffold</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            
            <div className="relative group">
              <Link href="/evaluation" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium">
                Evaluation
              </Link>
            </div>
            <div className="relative group">
              <Link href="/community" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium">
                Community
              </Link>
            </div>
            <div className="relative group">
              <Link href="/pricing" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium">
                Pricing
              </Link>
            </div>
            <div className="relative group">
              <Link href="/resources" className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium">
                Resources
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 text-sm sm:text-base font-medium">
              Sign In
            </Link>
            <Link href="/evaluate" className="bg-purple-800 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors">
              Evaluate Topic
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/evaluation" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900">Evaluation</Link>
              <Link href="/community" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900">Community</Link>
              <Link href="/pricing" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link href="/resources" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900">Resources</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

