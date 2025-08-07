'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function LoginRegisterPage({ onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // You can close the modal after successful submission
    // onClose()
  }

  const handleBackToHome = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100/50 px-4 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="GrihaProbesh Logo"
              width={100}
              height={32}
              className="h-6 w-auto object-contain"
              priority
            />
          </div>
          <button
            onClick={handleBackToHome}
            className="text-gray-500 hover:text-gray-700 font-medium text-xs flex items-center space-x-1 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-1 p-5">
        {/* Toggle Buttons */}
        <div className="bg-gray-100/80 backdrop-blur-sm rounded-xl p-0.5 mb-5">
          <div className="flex">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 font-medium text-sm text-center transition-all duration-300 rounded-lg ${
                isLogin 
                  ? 'bg-white text-blue-600 shadow-md shadow-blue-500/10' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 font-medium text-sm text-center transition-all duration-300 rounded-lg ${
                !isLogin 
                  ? 'bg-white text-blue-600 shadow-md shadow-blue-500/10' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form Header */}
        <div className="text-center mb-5">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Join GrihaProbesh'}
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            {isLogin 
              ? 'Sign in to access your account' 
              : 'Create your account to get started'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Register Only - Name Field */}
          {!isLogin && (
            <div className="group">
              <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-300"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-300"
                placeholder="Enter your email address"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
          </div>

          {/* Register Only - Phone Field */}
          {!isLogin && (
            <div className="group">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required={!isLogin}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-300"
                  placeholder="Enter your phone number"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Password Field */}
          <div className="group">
            <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-300"
                placeholder="Enter your password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Register Only - Confirm Password */}
          {!isLogin && (
            <div className="group">
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-gray-300"
                  placeholder="Confirm your password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Login Only - Remember Me & Forgot Password */}
          {isLogin && (
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                />
                <span className="ml-2 text-xs text-gray-600 group-hover:text-gray-900">Remember me</span>
              </label>
              <button
                type="button"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Register Only - Terms Agreement */}
          {!isLogin && (
            <div className="flex items-start pt-1">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required={!isLogin}
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 transition-colors flex-shrink-0"
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-xs text-gray-600 leading-relaxed">
                I agree to GrihaProbesh's{' '}
                <button type="button" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                  Privacy Policy
                </button>
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 text-white font-medium py-2.5 px-4 text-sm rounded-lg transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg hover:shadow-blue-500/25 mt-5"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </form>

        {/* Social Login Options */}
        <div className="mt-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-500 font-medium rounded-full">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="group w-full inline-flex justify-center items-center py-2.5 px-3 border border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>

            <button className="group w-full inline-flex justify-center items-center py-2.5 px-3 border border-gray-200 rounded-lg shadow-sm bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <svg className="w-4 h-4 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-5 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
            >
              {isLogin ? 'Sign up here' : 'Sign in here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}