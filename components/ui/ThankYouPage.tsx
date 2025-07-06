import React, { useEffect, useState } from 'react';
import { CheckCircle, MessageSquare, Phone, Clock, ArrowRight, Star, Heart } from 'lucide-react';

interface ThankYouPageProps {
  isOpen: boolean;
  onClose: () => void;
  clinic?: {
    name: string;
    phone: string;
    speciality: string;
  };
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ isOpen, onClose, clinic }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      onClose();
    }
  }, [isOpen, countdown, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full opacity-20 translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">شكراً لك!</h1>
            <p className="text-emerald-100 text-lg">تم إرسال طلب الحجز بنجاح</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              تم تسجيل طلب الحجز بنجاح ✨
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {clinic ? (
                <>
                  تم إرسال بياناتك إلى <span className="font-semibold text-emerald-600">{clinic.name}</span>
                  <br />
                  وسيتم التواصل معك للتأكيد في أقرب وقت
                </>
              ) : (
                'تم إرسال بياناتك إلى العيادة وسيتم التواصل معك للتأكيد في أقرب وقت'
              )}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-emerald-50 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">تواصل سريع</h3>
              <p className="text-sm text-gray-600">عبر الواتساب مباشرة</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">رد سريع</h3>
              <p className="text-sm text-gray-600">خلال ساعات قليلة</p>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">خدمة مميزة</h3>
              <p className="text-sm text-gray-600">أفضل الأطباء</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-emerald-500" />
              الخطوات التالية:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <span className="text-gray-700">ستصلك رسالة تأكيد عبر الواتساب</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <span className="text-gray-700">سيتم تحديد موعد مناسب لك</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <span className="text-gray-700">احضر في الموعد المحدد واستمتع بالخدمة</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {clinic && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-emerald-800 mb-3">معلومات العيادة:</h3>
              <div className="space-y-2">
                <p className="text-emerald-700">
                  <span className="font-medium">الاسم:</span> {clinic.name}
                </p>
                <p className="text-emerald-700">
                  <span className="font-medium">التخصص:</span> {clinic.speciality}
                </p>
                <div className="flex items-center gap-2 text-emerald-700">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">الهاتف:</span> {clinic.phone}
                </div>
              </div>
            </div>
          )}

          {/* Auto Close Timer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-gray-600 mb-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm">سيتم إغلاق هذه النافذة خلال {countdown} ثواني</span>
            </div>
            
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="text-sm">صنع بـ</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm">من فريق Derma Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;