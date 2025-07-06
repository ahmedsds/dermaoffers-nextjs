'use client'

import React, { useState } from 'react';
import { Menu, X, MapPin, Clock, ChevronDown, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import ClinicRegistration from './ClinicRegistration'; // يمكنك إلغاء التعليق عند إنشائها
// import AdminLogin from './AdminLogin'; // يمكنك إلغاء التعليق عند إنشائها

interface HeaderProps {
  onAdminLogin: (userData: any) => void;
  onClinicRegistration: (clinicData: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminLogin, onClinicRegistration }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>24/7 خدمة العملاء</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>جميع أنحاء مصر</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/Yellow Minimalist Energy Electrical Logo (2).png" 
                alt="Derma Offers Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Derma Offers</h1>
                <p className="text-xs text-gray-500">أفضل عروض العيادات والمراكز الطبية</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  pathname === '/' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                }`}
              >
                الرئيسية
              </Link>
              
              <Link 
                href="/about" 
                className={`font-medium transition-colors ${
                  pathname === '/about' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                }`}
              >
                من نحن
              </Link>

              {/* Special Offers Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-gray-700 hover:text-sky-500 font-medium transition-colors"
                  onMouseEnter={() => setIsOffersOpen(true)}
                  onMouseLeave={() => setIsOffersOpen(false)}
                >
                  عروض مميزة
                  <ChevronDown size={16} />
                </button>
                
                {isOffersOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsOffersOpen(true)}
                    onMouseLeave={() => setIsOffersOpen(false)}
                  >
                    <a href="#offers-clinics" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      العيادات والمراكز الطبية
                    </a>
                    <a href="#offers-beauty" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-sky-500 transition-colors">
                      مراكز التجميل
                    </a>
                  </div>
                )}
              </div>

              <Link 
                href="/blog" 
                className={`font-medium transition-colors ${
                  pathname === '/blog' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                }`}
              >
                المدونة
              </Link>
              
              <Link 
                href="/contact" 
                className={`font-medium transition-colors ${
                  pathname === '/contact' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                }`}
              >
                تواصل معنا
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setIsAdminLoginOpen(true)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <User size={16} />
                تسجيل الدخول
              </button>
              <button 
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                اضف عيادتك
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col gap-4">
                <Link 
                  href="/" 
                  className={`font-medium ${
                    pathname === '/' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  الرئيسية
                </Link>
                
                <Link 
                  href="/about" 
                  className={`font-medium ${
                    pathname === '/about' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  من نحن
                </Link>

                <div className="space-y-2">
                  <div className="text-gray-700 font-medium">عروض مميزة</div>
                  <a href="#offers-clinics" className="text-gray-600 hover:text-sky-500 pr-4 block">العيادات والمراكز الطبية</a>
                  <a href="#offers-beauty" className="text-gray-600 hover:text-sky-500 pr-4 block">مراكز التجميل</a>
                </div>

                <Link 
                  href="/blog" 
                  className={`font-medium ${
                    pathname === '/blog' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  المدونة
                </Link>
                
                <Link 
                  href="/contact" 
                  className={`font-medium ${
                    pathname === '/contact' ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  تواصل معنا
                </Link>
                
                <div className="flex flex-col gap-2 mt-4">
                  <button 
                    onClick={() => {
                      setIsAdminLoginOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 py-2"
                  >
                    <User size={16} />
                    تسجيل الدخول
                  </button>
                  <button 
                    onClick={() => {
                      setIsRegistrationOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition-colors"
                  >
                    اضف عيادتك
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* يمكنك إضافة هذه المكونات بعد إنشائها */}
      {/* <ClinicRegistration isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} onSubmit={onClinicRegistration} /> */}
      {/* <AdminLogin isOpen={isAdminLoginOpen} onClose={() => setIsAdminLoginOpen(false)} onLogin={onAdminLogin} /> */}
    </>
  );
};

export default Header;