'use client'

import React, { useState } from 'react'
import {
  Star,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Facebook,
  Instagram,
  Globe,
  Calendar,
  CheckCircle,
  Camera,
  ArrowLeft,
} from 'lucide-react'
// import BookingModal from './BookingModal' // يمكنك إلغاء التعليق عند إنشاء الملف

// Interface for the clinic landing page
interface ClinicLandingPageProps {
  clinicData?: {
    id: string
    slug: string
    name: string
    doctorName: string
    speciality: string
    description: string
    about: string
    services: string[]
    location: string
    address: string
    phone: string
    whatsapp: string
    email: string
    website?: string
    facebook?: string
    instagram?: string
    workingHours: {
      [key: string]: { open: string; close: string; closed: boolean }
    }
    images: {
      hero: string
      gallery: string[]
      beforeAfter: { before: string; after: string; title: string }[]
    }
    testimonials: {
      name: string
      rating: number
      comment: string
      date: string
      service: string
    }[]
    specialOffer?: {
      title: string
      description: string
      originalPrice: string
      discountPrice: string
      discount: string
      validUntil: string
      enabled: boolean
    }
    features: string[]
    googleMapsUrl?: string
    rating: number
    reviewsCount: number
    yearsExperience: number
    patientsCount: number
    successRate: string
  }
}

const ClinicLandingPage: React.FC<ClinicLandingPageProps> = ({ clinicData }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'before-after' | 'gallery'>('before-after')

  const daysInArabic = {
    saturday: 'السبت',
    sunday: 'الأحد',
    monday: 'الإثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
  }

  // التحقق من وجود clinicData
  if (!clinicData) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>جاري تحميل بيانات العيادة...</p>
      </div>
    )
  }

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  const handleWhatsAppContact = () => {
    const message = `مرحباً، أريد حجز موعد في ${clinicData.name}`
    const whatsappUrl = `https://wa.me/ ${clinicData.whatsapp.replace(/^0/, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${clinicData.images.hero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{clinicData.name}</h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-200">{clinicData.doctorName}</p>
              <p className="text-lg md:text-xl mb-8 text-gray-300">{clinicData.speciality}</p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(clinicData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-yellow-400 font-bold">{clinicData.rating}</span>
                <span className="text-gray-300">({clinicData.reviewsCount} تقييم)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBookNow}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  احجز موعدك الآن
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  تواصل واتساب
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{clinicData.yearsExperience}+</div>
                <div className="text-gray-600">سنوات خبرة</div>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 015 3.87v2"></path>
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{clinicData.patientsCount}+</div>
                <div className="text-gray-600">مريض راضي</div>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{clinicData.rating}</div>
                <div className="text-gray-600">تقييم العملاء</div>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{clinicData.successRate}</div>
                <div className="text-gray-600">نسبة النجاح</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">نبذة عن العيادة والطبيب</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">{clinicData.about}</p>
                    <p className="text-gray-600 leading-relaxed">{clinicData.description}</p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">مميزاتنا:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {clinicData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={clinicData.images.gallery[0]}
                    alt="العيادة"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">خدماتنا وتخصصاتنا</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                نقدم مجموعة شاملة من الخدمات المتخصصة بأحدث التقنيات
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicData.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      <polyline points="12 5 19 12 12 19 5 12 12 5"></polyline>
                      <line x1="19" y1="12" x2="2" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service}</h3>
                  <p className="text-gray-600 mb-6">خدمة متخصصة بأحدث التقنيات والمعدات الطبية المتطورة</p>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        {clinicData.specialOffer?.enabled && (
          <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full inline-block mb-6 font-bold">
                  🎉 عرض خاص محدود
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{clinicData.specialOffer.title}</h2>
                <p className="text-xl mb-8 text-purple-100">{clinicData.specialOffer.description}</p>
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300">{clinicData.specialOffer.discountPrice} جنيه</div>
                    <div className="text-lg text-purple-200 line-through">{clinicData.specialOffer.originalPrice} جنيه</div>
                  </div>
                  <div className="bg-yellow-400 text-purple-800 px-6 py-3 rounded-full">
                    <span className="text-2xl font-bold">خصم {clinicData.specialOffer.discount}</span>
                  </div>
                </div>
                <p className="text-purple-200 mb-8">العرض ساري حتى: {clinicData.specialOffer.validUntil}</p>
                <button
                  onClick={handleBookNow}
                  className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  احجز العرض الآن
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">معرض الصور</h2>
              <p className="text-xl text-gray-600">شاهد نتائج عملائنا وصور العيادة</p>
            </div>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('before-after')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'before-after'
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  قبل وبعد
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'gallery'
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  صور العيادة
                </button>
              </div>
            </div>

            {/* Before After Gallery */}
            {activeTab === 'before-after' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clinicData.images.beforeAfter.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img
                          src={item.before}
                          alt="قبل"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                          قبل
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={item.after}
                          alt="بعد"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                          بعد
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Regular Gallery */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinicData.images.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedGalleryImage(image)}
                  >
                    <img
                      src={image}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-2xl transition-all duration-300 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">تقييمات عملائنا</h2>
              <p className="text-xl text-gray-600">اقرأ تقييمات عملائنا الحقيقية</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.service}</p>
                      </div>
                      <div className="text-sm text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">معلومات التواصل</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">العنوان</h3>
                        <p className="text-gray-600">{clinicData.location}</p>
                        <p className="text-gray-500 text-sm">{clinicData.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">الهاتف</h3>
                        <a href={`tel:${clinicData.phone}`} className="text-blue-600 hover:text-blue-700">
                          {clinicData.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">واتساب</h3>
                        <button
                          onClick={handleWhatsAppContact}
                          className="text-green-600 hover:text-green-700"
                        >
                          {clinicData.whatsapp}
                        </button>
                      </div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="w-6 h-6 text-orange-500" />
                        <h3 className="font-bold text-gray-800">مواعيد العمل</h3>
                      </div>
                      <div className="space-y-2">
                        {Object.entries(clinicData.workingHours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center">
                            <span className="text-gray-700">
                              {daysInArabic[day as keyof typeof daysInArabic]}
                            </span>
                            <span className="text-gray-600">
                              {hours.closed ? 'مغلق' : `${hours.open} - ${hours.close}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">موقعنا على الخريطة</h2>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
                    {clinicData.googleMapsUrl ? (
                      <iframe
                        src={clinicData.googleMapsUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="موقع العيادة"
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <div className="h-full flex items-center justify-center bg-gray-100">
                        <div className="text-center">
                          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">خريطة الموقع غير متوفرة</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لبدء رحلتك مع الجمال؟</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              احجز موعدك الآن واحصل على استشارة مجانية مع أفضل الأطباء المتخصصين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookNow}
                className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                احجز موعدك الآن
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                تواصل واتساب
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedGalleryImage}
              alt="صورة مكبرة"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal (مؤقتًا مع تعليق) */}
      {/* 
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        clinic={{
          id: parseInt(clinicData.id),
          name: clinicData.name,
          phone: clinicData.phone,
          whatsapp: clinicData.whatsapp,
          services: clinicData.services,
          location: clinicData.location,
          speciality: clinicData.speciality,
        }}
      />
      */}
    </>
  )
}

export default ClinicLandingPage