import React, { useState } from 'react';
import { Tag, Clock, Gift, Percent, Crown, Star, MapPin, Phone } from 'lucide-react';
import BookingModal from './BookingModal';

interface SpecialOffersProps {
  clinics?: any[];
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ clinics = [] }) => {
  const [selectedClinic, setSelectedClinic] = useState<any>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // فلترة العيادات المميزة فقط (الاشتراك المدفوع)
  const premiumClinics = clinics.filter(clinic => 
    clinic.status === 'active' && 
    clinic.subscriptionPlan === 'premium'
  );

  // تحميل العروض الشهرية من localStorage
  const monthlyOffers = React.useMemo(() => {
    const savedOffers = localStorage.getItem('derma-monthly-offers');
    return savedOffers ? JSON.parse(savedOffers).filter((offer: any) => offer.status === 'active') : [];
  }, []);

  // دمج العيادات المميزة مع العروض الشهرية (العروض المميزة فقط للاشتراك المدفوع)
  const allOffers = [
    ...monthlyOffers.map((offer: any) => ({
      id: `monthly-${offer.id}`,
      title: offer.title,
      description: offer.description,
      originalPrice: offer.originalPrice,
      discountPrice: offer.discountPrice,
      discount: offer.discount,
      clinic: 'عرض شهري خاص',
      validUntil: offer.validUntil,
      image: offer.image,
      type: 'monthly',
      phone: '01012345678', // رقم الإدارة
      services: ['عرض خاص'],
      location: 'جميع أنحاء مصر',
      speciality: 'عرض شهري'
    })),
    ...premiumClinics.map(clinic => ({
      id: `clinic-${clinic.id}`,
      title: clinic.name,
      description: clinic.speciality,
      originalPrice: clinic.originalPrice || clinic.price.replace('من ', '').replace(' جنيه', ''),
      discountPrice: clinic.discountedPrice || Math.round(parseInt(clinic.price.replace('من ', '').replace(' جنيه', '')) * 0.8).toString(),
      discount: clinic.discount || '20%',
      clinic: clinic.name,
      validUntil: 'دائم',
      image: clinic.image,
      type: 'premium',
      clinicData: clinic,
      phone: clinic.phone,
      whatsapp: clinic.whatsapp,
      services: clinic.services,
      location: clinic.location,
      speciality: clinic.speciality
    }))
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'monthly': return 'bg-purple-500';
      case 'limited': return 'bg-red-500';
      case 'popular': return 'bg-blue-500';
      case 'new': return 'bg-green-500';
      case 'hot': return 'bg-orange-500';
      case 'premium': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'monthly': return 'عرض شهري';
      case 'limited': return 'عرض محدود';
      case 'popular': return 'الأكثر طلباً';
      case 'new': return 'عرض جديد';
      case 'hot': return 'عرض ساخن';
      case 'premium': return 'مميز';
      default: return 'عرض';
    }
  };

  const handleBookOffer = (offer: any) => {
    const clinicData = {
      id: offer.clinicData?.id || offer.id,
      name: offer.clinic,
      phone: offer.phone,
      whatsapp: offer.whatsapp || offer.phone,
      services: offer.services,
      location: offer.location,
      speciality: offer.speciality
    };
    
    setSelectedClinic(clinicData);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedClinic(null);
  };

  return (
    <>
      <section id="offers" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">العروض المميزة</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف أفضل العروض والخصومات المتاحة على خدمات الجلدية والتجميل
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              <Crown className="w-4 h-4" />
              <span>العروض المميزة - للعيادات المشتركة في الباقة المدفوعة</span>
            </div>
          </div>

          {allOffers.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {allOffers.map((offer) => (
                  <div key={offer.id} className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100 relative">
                    {/* Offer Type Badge */}
                    <div className={`absolute top-4 right-4 ${getTypeColor(offer.type)} text-white px-3 py-1 rounded-full text-sm font-medium z-10`}>
                      {getTypeText(offer.type)}
                    </div>

                    {/* Premium Badge for Premium Clinics */}
                    {offer.type === 'premium' && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        عضوية مميزة
                      </div>
                    )}

                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={offer.image} 
                          alt={offer.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                        <p className="text-gray-600 mb-4">{offer.description}</p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{offer.clinic}</span>
                        </div>

                        {/* إذا كانت عيادة مميزة، أظهر معلومات إضافية */}
                        {offer.clinicData && (
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 ml-2" />
                              <span className="text-sm">{offer.clinicData.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Phone className="w-4 h-4 ml-2" />
                              <span className="text-sm">{offer.clinicData.phone}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 fill-current ml-2" />
                              <span className="text-sm">{offer.clinicData.rating} ({offer.clinicData.reviews} تقييم)</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">صالح حتى: {offer.validUntil}</span>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl font-bold text-emerald-600">
                              {offer.discountPrice} جنيه
                            </div>
                            <div className="text-lg text-gray-500 line-through">
                              {offer.originalPrice} جنيه
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                            <Percent className="w-4 h-4" />
                            <span className="font-bold">{offer.discount}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleBookOffer(offer)}
                            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Gift className="w-4 h-4" />
                            احجز العرض
                          </button>
                          <button className="btn-secondary">
                            التفاصيل
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="btn-primary text-lg px-8 py-4">
                  عرض جميع العروض المميزة
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Crown className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">لا توجد عروض مميزة حالياً</h3>
              <p className="text-gray-600 mb-4">ترقب العروض الجديدة قريباً</p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-purple-700 text-sm">
                  💡 العروض المميزة متاحة فقط للعيادات المشتركة في الباقة المدفوعة
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {selectedClinic && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          clinic={selectedClinic}
        />
      )}
    </>
  );
};

export default SpecialOffers;