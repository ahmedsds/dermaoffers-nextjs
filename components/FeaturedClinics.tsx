'use client';

import React, { useState, useMemo } from 'react';
import { Star, MapPin, Phone, Clock, Award, Users } from 'lucide-react';

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
  searchService = '',
}) => {
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const freeClinics = clinics.filter(
    (clinic) =>
      clinic.status === 'active' &&
      (!clinic.subscriptionPlan || clinic.subscriptionPlan === 'free')
  );

  const filteredClinics = useMemo(() => {
    return freeClinics.filter((clinic) => {
      const matchesQuery =
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.services.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCity = searchCity
        ? clinic.location.includes(searchCity)
        : true;

      const matchesService = searchService
        ? clinic.speciality.includes(searchService) ||
          clinic.services.some((s) => s.includes(searchService))
        : true;

      return matchesQuery && matchesCity && matchesService;
    });
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
    <section id="clinics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            العيادات والمراكز الطبية
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر من بين العيادات والمراكز المعتمدة مع أعلى تقييمات العملاء
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
            <Award className="w-4 h-4" />
            <span>جميع العيادات معتمدة ومرخصة</span>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          تم العثور على{' '}
          <span className="font-bold text-sky-600">
            {filteredClinics.length}
          </span>{' '}
          عيادة ومركز
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-gray-800">
                    {clinic.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({clinic.reviews})
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  متاح الآن
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  عضوية مجانية
                </div>
              </div>

              <div className="p-6">
                {/* Clinic Info */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {clinic.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {clinic.speciality}
                    </p>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-emerald-600">
                      {clinic.price}
                    </div>
                    <div className="text-sm text-gray-500">للجلسة</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>{clinic.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 ml-2" />
                    <span>{clinic.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{clinic.openHours}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    الخدمات المتوفرة:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {clinic.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
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

                {/* Offers */}
                {clinic.offers.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm">
                      <Award className="w-4 h-4 ml-1 text-orange-500" />
                      العروض المتاحة:
                    </h4>
                    <div className="space-y-1">
                      {clinic.offers.slice(0, 1).map((offer, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded"
                        >
                          {offer}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBookNow(clinic)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm py-2"
                  >
                    احجز الآن
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-100 rounded-full text-sm py-2">
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
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              لم يتم العثور على نتائج
            </h3>
            <p className="text-gray-600">جرب تغيير معايير البحث</p>
          </div>
        )}

        {/* Load More */}
        {filteredClinics.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full">
              عرض المزيد من العيادات
            </button>
          </div>
        )}
      </div>

      {/* ✅ ممكن تفعل المودال لاحقًا لو محتاج */}
      {/* {selectedClinic && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          clinic={selectedClinic}
        />
      )} */}
    </section>
  );
};

export default FeaturedClinics;
