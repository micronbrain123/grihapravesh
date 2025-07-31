import Link from 'next/link'
import BuyersDropdown from './dropdowns/BuyersDropdown'
import OwnersDropdown from './dropdowns/OwnersDropdown'
import DealersDropdown from './dropdowns/DealersDropdown'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white sticky top-0 z-50 border-b border-gray-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Griha<span className="text-blue-400 font-extrabold">Pravesh</span>
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">

              {/* For Buyers */}
              <div className="relative group">
                <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg group cursor-pointer">
                  <span className="mr-3">For Buyers</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">                  
                    <BuyersDropdown />
                </div>
              </div>

              {/* For Owners */}
              <div className="relative group">
                <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg group cursor-pointer">
                  <span className="mr-3">For Owners</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 mb-2 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <OwnersDropdown />
                  </div>
                </div>
              </div>

              {/* For Dealers / Builders */}
              <div className="relative group">
                <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg group cursor-pointer">
                  <span className="mr-3">Dealers & Builders</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2 z-50 mb-2">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    <DealersDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Post Property & User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Post Property Button */}
            <Link href="/post-property"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Post Property
              <span className="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">FREE</span>
            </Link>

            {/* User Menu */}
            <div className="flex items-center space-x-2">
              {/* Profile Button with Dropdown */}
              <div className="relative group">
                <button className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-200 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                
                {/* Profile Dropdown */}
                <div className="absolute top-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-3 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64">
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">My Account</div>
                      <div className="text-xs text-gray-500">Manage your profile and preferences</div>
                    </div>
                    
                    <div className="py-2">
                      <Link href="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">My Profile</div>
                          <div className="text-xs text-gray-500">View and edit profile</div>
                        </div>
                      </Link>
                      
                      <Link href="/my-activity" className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">My Activity</div>
                          <div className="text-xs text-gray-500">Recent searches & views</div>
                        </div>
                      </Link>
                      
                      <Link href="/recently-searched" className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Recently Searched</div>
                          <div className="text-xs text-gray-500">Your search history</div>
                        </div>
                      </Link>
                      
                      <Link href="/recently-viewed" className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Recently Viewed</div>
                          <div className="text-xs text-gray-500">Properties you viewed</div>
                        </div>
                      </Link>
                      
                      <Link href="/shortlisted" className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Shortlisted</div>
                          <div className="text-xs text-gray-500">Your favorite properties</div>
                        </div>
                      </Link>
                      
                      <Link href="/contacted" className="flex items-center px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-indigo-200">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Contacted</div>
                          <div className="text-xs text-gray-500">Properties you contacted</div>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="border-t border-gray-100 py-2">
                      <Link href="/post-property" className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1">
                          <div>
                            <div className="text-sm font-medium">Post Property</div>
                            <div className="text-xs text-gray-500">List your property</div>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">FREE</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Button */}
              <button className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <details className="relative">
              <summary className="text-gray-300 hover:text-white hover:bg-white/10 p-2.5 rounded-lg transition-all duration-200 cursor-pointer list-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>

              {/* Mobile Navigation */}
              <div className="absolute right-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 z-50">
                <div className="px-4 space-y-2">
                  <div className="text-gray-900 font-semibold text-lg mb-4 px-2">Navigation</div>
                  
                  <Link href="/buyers" className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
                      </svg>
                    </div>
                    For Buyers
                  </Link>
                  
                  <Link href="/owners" className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 group">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.834 5.671M15 7a2 2 0 00-2 2m2-2H9.236a2 2 0 011.789-1.106L15 7zM15 7l-6-2m6 2l6 2m-6-2v10.5" />
                      </svg>
                    </div>
                    For Owners
                  </Link>
                  
                  <Link href="/dealers" className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 group">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    Dealers & Builders
                  </Link>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <Link href="/post-property" className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Post Property
                      <span className="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full">FREE</span>
                    </Link>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  )
}