'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, loading, router])

  // Show nothing while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#121214]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFA500]"></div>
      </div>
    )
  }

  // If authenticated, show the protected content
  return isAuthenticated ? children : null
}