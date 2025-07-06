'use client'

import React, { useState, useMemo } from 'react';
import { Star, MapPin, Phone, Clock, Award, Users } from 'lucide-react';
// import BookingModal from './BookingModal'; // تم تعطيله مؤقتًا

interface Clinic {
  id: number;
  name: string;
  speciality: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  phone: string;
  openHours: string;
  services: string[];
  price: string;
  offers: string[];
  status: string;
  subscriptionPlan?: string;
}

interface FeaturedClinicsProps {
  clinics: Clinic[];
  searchQuery?: string;
  searchCity?: string;
  searchService?: string;
}

const FeaturedClinics: React.FC<FeaturedClinicsProps> = ({ 
  clinics, 
  searchQuery = '', 
  searchCity = '', 
  searchService = '' 
}) => {
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // فلترة العيادات المجانية فقط (الاشتراك المجاني أو بدون اشتراك)
  const freeClinics = clinics.filter(clinic => 
    clinic.status === 'active' && 
    (!clinic.subscriptionPlan || clinic.subscriptionPlan === 'free')
  );

  // تطبيق البحث والفلترة على العيادات المجانية فقط
  const filteredClinics = useMemo(() => {
    let filtered = freeClinics;

    if (searchQuery) {
      filtered = filtered.filter(clinic => 
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (searchCity) {
      filtered = filtered.filter(clinic => 
        clinic.location.includes(searchCity)
      );
    }

    if (searchService) {
      filtered = filtered.filter(clinic => 
        clinic.speciality.includes(searchService) ||
        clinic.services.some(s => s.includes(searchService))
      );
    }

    return filtered;
  }, [freeClinics, searchQuery, searchCity, searchService]);

  const handleBookNow = (clinic: Clinic) => {
    setSelectedClinic(clinic);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedClinic(null);
  };

  return (
    <>
      <section id="clinics" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">العيادات والمراكز الطبية</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اختر من بين العيادات والمراكز المعتمدة مع أعلى تقييمات العملاء
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              <Award className="w-4 h-4" />
              <span>جميع العيادات معتمدة ومرخصة</span>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              تم العثور على <span className="font-bold text-sky-600">{filteredClinics.length}</span> عيادة ومركز
            </p>
          </div>

          {/* Clinics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClinics.map((clinic) => (
              <div key={clinic.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="relative">
                  <img 
                    src={clinic.image} 
                    alt={clinic.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-800">{clinic.rating}</span>
                    <span className="text-gray-500 text-sm">({clinic.reviews})</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    متاح الآن
                  </div>
                  {/* شارة الاشتراك المجاني */}
                  <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    عضوية مجانية
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{clinic.name}</h3>
                      <p className="text-gray-600 text-sm">{clinic.speciality}</p>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-emerald-600">{clinic.price}</div>
                      <div className="text-sm text-gray-500">للجلسة</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 ml-2" />
                      <span className="text-sm">{clinic.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 ml-2" />
                      <span className="text-sm">{clinic.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 ml-2" />
                      <span className="text-sm">{clinic.openHours}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 text-sm">الخدمات المتوفرة:</h4>
                    <div className="flex flex-wrap gap-1">
                      {clinic.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {service}
                        </span>
                      ))}
                      {clinic.services.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          +{clinic.services.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {clinic.offers.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm">
                        <Award className="w-4 h-4 ml-1 text-orange-500" />
                        العروض المتاحة:
                      </h4>
                      <div className="space-y-1">
                        {clinic.offers.slice(0, 1).map((offer, idx) => (
                          <div key={idx} className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                            {offer}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleBookNow(clinic)}
                      className="flex-1 btn-primary text-sm py-2"
                    >
                      احجز الآن
                    </button>
                    <button className="flex-1 btn-secondary text-sm py-2">
                      تفاصيل أكثر
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredClinics.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">لم يتم العثور على نتائج</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredClinics.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-primary text-lg px-8 py-4">
                عرض المزيد من العيادات
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 
      {selectedClinic && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          clinic={selectedClinic}
        />
      )} 
      */}
    </>
  );
};

export default FeaturedClinics;