// app/login/page.jsx
'use client'

import { useState } from 'react'
import { useAuth } from '@/context/auth'
import Logo from '@/components/logo'
import Input from '@/components/input'
import Button from '@/components/button'
import Link from 'next/link'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const { login, loading, error } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    const errors = {}
    if (!formData.username.trim()) errors.username = 'Username is required'
    if (!formData.password) errors.password = 'Password is required'
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    try {
      await login(formData)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#121214] flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[420px] space-y-8">
          <div className="text-center">
            <Logo />
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500">
                {error}
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Input
              label="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Type Here"
              error={formErrors.username}
              required
            />
            
            <Input
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Type Here"
              error={formErrors.password}
              required
            />
            
            <Button type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Log In'}
            </Button>
            
            <p className="text-center text-[#9CA3AF] text-[15px]">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#FFA500] hover:underline">
                Sign Up
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