// app/register/page.jsx
'use client'

import { useState } from 'react'
import { useAuth } from '@/context/auth'
import Logo from '@/components/logo'
import Input from '@/components/input'
import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import Link from 'next/link'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    acceptTerms: false,
    acceptMarketing: false
  })
  const [formErrors, setFormErrors] = useState({})
  const { register, loading, error } = useAuth()
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    const errors = {}
    
    // Username validation
    if (!formData.username.trim()) {
      errors.username = 'Username is required'
    } else if (formData.username.length < 4) {
      errors.username = 'Username must be at least 4 characters'
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      errors.username = 'Username can only contain letters, numbers, and underscores'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    
    // Terms validation
    if (!formData.acceptTerms) {
      errors.acceptTerms = 'You must accept the terms and conditions'
    }
    
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors)
      return
    }
    
    try {
      // Extract only the required fields for API request
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      }
      
      const response = await register(userData)
      setSuccessMessage(response.message || 'Registration successful! Please verify your email.')
      
      // Reset form after successful registration
      setFormData({
        username: '',
        email: '',
        password: '',
        acceptTerms: false,
        acceptMarketing: false
      })
      
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#121214] flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-[420px] space-y-8">
          <div className="text-center space-y-4">
            <Logo />
            <h2 className="text-[22px] font-semibold text-white">
              Create a new account
            </h2>
            
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500">
                {error}
              </div>
            )}
            
            {successMessage && (
              <div className="p-3 bg-green-500/10 border border-green-500/50 rounded text-green-500">
                {successMessage}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Input
              label="Choose a Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              error={formErrors.username}
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              error={formErrors.email}
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              error={formErrors.password}
              required
            />

            <div className="space-y-4">
              <Checkbox
                name="acceptMarketing"
                checked={formData.acceptMarketing}
                onChange={handleChange}
                label="I'd like to receive the latest news, promotional offers, and transaction"
              />

              <Checkbox
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                error={formErrors.acceptTerms}
                label={
                  <span>
                    I agree to the Lootix{' '}
                    <Link href="#" className="text-[#FFA500] hover:underline">
                      Terms and Conditions
                    </Link>
                    {' '}and{' '}
                    <Link href="#" className="text-[#FFA500] hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                }
                required
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign Up'}
            </Button>

            <p className="text-center text-[#9CA3AF] text-[15px]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#FFA500] hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="py-6 px-6 border-t border-[#1C1C1E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#6B7280] text-sm">
            Lootix Copyright 2024
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm">
              Cookie Policy
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm">
              Privacy Settings
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm flex items-center gap-2">
              Join Discord
              <img src="/discord.svg" alt="Discord" className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#6B7280] hover:text-white text-sm flex items-center gap-2">
              About Lootix
              <img src="/lootix-icon.svg" alt="Lootix" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}