'use client'

import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart, MessageSquare } from 'lucide-react' // ✅ تم إضافة MessageSquare هنا
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Yellow Minimalist Energy Electrical Logo (2).png" 
                alt="Derma Offers Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Derma Offers</h3>
                <p className="text-sm text-gray-400">أفضل عروض العيادات والمراكز الطبية</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              منصتك الموثوقة لحجز مواعيد العيادات والحصول على أفضل العروض في مجال الجلدية والتجميل في مصر.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <a href="#clinics" className="text-gray-400 hover:text-white transition-colors">
                  العيادات والمراكز الطبية
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">الخدمات</h4>
            <ul className="space-y-3">
              <li>
                <a href="#offers" className="text-gray-400 hover:text-white transition-colors">
                  العروض المميزة
                </a>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <a 
                  href="https://wa.me/201201966093 " 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +201201966093
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a 
                  href="mailto:info@derma-offers.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@derma-offers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">جميع أنحاء جمهورية مصر العربية</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-4">اشترك في النشرة الإخبارية</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-emerald-500 text-right"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-right mb-4 md:mb-0">
              © 2024 Derma Offers. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>صنع بـ</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer