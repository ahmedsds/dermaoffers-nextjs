'use client'

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Derma Offers</h1>
          <nav className="space-x-6 space-x-reverse">
            <Link href="/blog" className="hover:text-indigo-600">المدونة</Link>
            <Link href="/clinics" className="hover:text-indigo-600">العيادات</Link>
            <Link href="/about" className="hover:text-indigo-600">من نحن</Link>
            <Link href="/contact" className="hover:text-indigo-600">تواصل معنا</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">منصتك لحجز عيادات الجلدية والتجميل</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">ابحث عن العيادات المعتمدة، احجز موعدك الآن، واستمتع بأفضل العروض الحصرية!</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/clinics" 
              className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              ابحث عن عيادة
            </Link>
            <Link 
              href="/booking" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              احجز موعدك الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 18h6M9 14h6M9 10h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">عروض حصرية</h3>
              <p className="text-gray-600">احصل على أفضل العروض المتاحة للعيادات والمراكز الطبية في مصر.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M8 5C8 6.1 8.9 7 10 7s2-.9 2-2-.9-2-2-2-2 .9-2 2z"></path>
                  <path d="M9 12h6M12 9v6"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">عيادات مرخصة</h3>
              <p className="text-gray-600">جميع العيادات لدينا معتمدة ومرخصة من الجهات الصحية المختصة.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">تجربة مستخدم رائعة</h3>
              <p className="text-gray-600">واجهة بسيطة وسهلة الاستخدام تمنحك تجربة مريحة وسريعة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">جاهز لتجربة جديدة؟</h2>
          <p className="text-lg text-gray-600 mb-8">ابدأ بالبحث عن عيادتك أو تصفح المقالات لتعرف أكثر عن الخدمات</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/clinics" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              ابدأ الآن
            </Link>
            <Link 
              href="/blog" 
              className="border border-indigo-600 hover:border-indigo-700 text-indigo-600 hover:text-indigo-700 font-medium py-3 px-6 rounded-lg transition"
            >
              قراءة المزيد
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Derma Offers - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </main>
  );
}