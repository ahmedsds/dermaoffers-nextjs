'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // فحص حالة تسجيل الدخول من localStorage
    const storedLoginStatus = localStorage.getItem('isAdminLoggedIn') === 'true'
    setIsLoggedIn(storedLoginStatus)
  }, [])

  const handleLogout = () => {
    // تحويل المستخدم إلى صفحة تسجيل الخروج
    window.location.href = '/admin/logout'
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <Link href="/" className="text-xl font-bold text-blue-600">
          DermaOffers
        </Link>
      </div>
      <div>
        {isLoggedIn ? (
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-5 h-5 ml-2" />
            تسجيل الخروج
          </Button>
        ) : (
          <Link href="/admin/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            تسجيل الدخول
          </Link>
        )}
      </div>
    </nav>
  )
}