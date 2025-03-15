// app/layout.jsx
import './globals.css'
import { AuthProvider } from '@/context/auth'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121214] text-white">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}