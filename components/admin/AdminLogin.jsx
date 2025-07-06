'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    // بيانات تسجيل الدخول الافتراضية
    if (email === 'admin@dermaoffers.com' && password === 'admin123') {
      // حفظ حالة تسجيل الدخول
      localStorage.setItem('isAdminLoggedIn', 'true')
      // تحويل إلى لوحة التحكم
      window.location.href = '/admin'
    } else {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">تسجيل دخول الإدارة</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل البريد الإلكتروني"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل كلمة المرور"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            تسجيل الدخول
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            هل نسيت كلمة المرور؟{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              استعادة كلمة المرور
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}