"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BuyersDropdown from "./dropdowns/BuyersDropdown";
import OwnersDropdown from "./dropdowns/OwnersDropdown";
import DealersDropdown from "./dropdowns/DealersDropdown";
import LoginRegisterPage from "./LoginRegisterPage";

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "buyers" | "owners" | "dealers" | null

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // Helper to close dropdown on mouse leave
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <>
      <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white sticky top-0 z-50 border-b border-gray-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo.png"
                  alt="GrihaProbesh Logo"
                  width={220}
                  height={60}
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8 relative">
                {/* Wrap the dropdown and nav items in one relative container */}

                {/* Navigation Items */}
                <div
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("buyers")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg cursor-pointer select-none">
                    <span className="mr-3">For Buyers</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === "buyers"
                          ? "rotate-180 text-white"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("owners")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg cursor-pointer select-none">
                    <span className="mr-3">For Owners</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === "owners"
                          ? "rotate-180 text-white"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("dealers")}
                  onMouseLeave={closeDropdown}
                >
                  <div className="text-gray-300 hover:text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition-all duration-200 flex items-center rounded-lg cursor-pointer select-none">
                    <span className="mr-3">Dealers & Builders</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === "dealers"
                          ? "rotate-180 text-white"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Dropdown Container */}
                <div
                  onMouseEnter={() => openDropdown && setOpenDropdown(openDropdown)}
                  onMouseLeave={closeDropdown}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50 transition-opacity duration-300 ${
                    openDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  style={{ minWidth: "320px" }}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    {openDropdown === "buyers" && <BuyersDropdown />}
                    {openDropdown === "owners" && <OwnersDropdown />}
                    {openDropdown === "dealers" && <DealersDropdown />}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Post Property & User Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Post Property Button */}
              <Link
                href="/post-property"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Post Property
                <span className="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
                  FREE
                </span>
              </Link>

              {/* User Menu */}
              <div className="flex items-center space-x-2 relative group">
                {/* Profile Button with Dropdown */}
                <button className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-200 group">
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                <div className="absolute top-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-3 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64">
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                      <div className="text-sm font-semibold text-gray-900">
                        My Account
                      </div>
                      <div className="text-xs text-gray-500">
                        Manage your profile and preferences
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={openLoginModal}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group w-full text-left"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1">
                          <div>
                            <div className="text-sm font-medium">
                              LOGIN / REGISTER
                            </div>
                          </div>
                        </div>
                      </button>

                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="px-4 pb-2">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            My Activity
                          </div>
                        </div>

                        <Link
                          href="/recently-searched"
                          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="text-sm">Recently Searched</div>
                        </Link>

                        <Link
                          href="/recently-viewed"
                          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="text-sm">Recently Viewed</div>
                        </Link>

                        <Link
                          href="/shortlisted"
                          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="text-sm">Shortlisted</div>
                        </Link>

                        <Link
                          href="/contacted"
                          className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="text-sm">Contacted</div>
                        </Link>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 py-2">
                      <Link
                        href="/post-property"
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between flex-1">
                          <div>
                            <div className="text-sm font-medium">Post Property</div>
                            <div className="text-xs text-gray-500">
                              List your property
                            </div>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                            FREE
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Button */}
              <button className="bg-white/10 hover:bg-white/20 p-2.5 rounded-lg transition-all duration-200 group">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </button>
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
                    <div className="text-gray-900 font-semibold text-lg mb-4 px-2">
                      Navigation
                    </div>

                    <Link
                      href="/buyers"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2"
                          />
                        </svg>
                      </div>
                      For Buyers
                    </Link>

                    <Link
                      href="/owners"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.834 5.671M15 7a2 2 0 00-2 2m2-2H9.236a2 2 0 011.789-1.106L15 7zM15 7l-6-2m6 2l6 2m-6-2v10.5"
                          />
                        </svg>
                      </div>
                      For Owners
                    </Link>

                    <Link
                      href="/dealers"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200">
                        <svg
                          className="w-4 h-4 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      Dealers & Builders
                    </Link>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <Link
                        href="/post-property"
                        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Post Property
                        <span className="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                          FREE
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>

      {/* Login/Register Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[95vh] overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Login Register Component */}
            <LoginRegisterPage onClose={closeLoginModal} />
          </div>
        </div>
      )}
    </>
  );
}
