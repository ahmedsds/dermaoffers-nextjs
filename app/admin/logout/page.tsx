'use client'

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Derma Offers</h1>
          <nav className="space-x-6 space-x-reverse">
            <Link href="/blog" className="hover:text-indigo-600">المدونة</Link>
            <Link href="/about" className="hover:text-indigo-600">من نحن</Link>
            <Link href="/contact" className="hover:text-indigo-600">تواصل معنا</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">مرحبًا بك في Derma Offers</h2>
        <p className="text-xl text-gray-600 mb-8">أفضل عروض العيادات والمراكز الطبية في مصر</p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/clinics" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            ابحث عن عيادة
          </Link>
          <Link 
            href="/booking" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
          >
            احجز موعدك الآن
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Derma Offers - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}