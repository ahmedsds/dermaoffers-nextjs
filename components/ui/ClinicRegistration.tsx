import React, { useState } from 'react';
import { X, Upload, MapPin, Phone, Clock, Star, Camera, Plus, Trash2, Crown, Gift } from 'lucide-react';

interface ClinicRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clinicData: any) => void;
}

const ClinicRegistration: React.FC<ClinicRegistrationProps> = ({ isOpen, onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    owner: '',
    email: '',
    phone: '',
    whatsapp: '',
    serviceProvider: '',
    
    // Location
    governorate: '',
    city: '',
    location: '',
    
    // Clinic Details
    speciality: '',
    services: [''],
    description: '',
    openHours: {
      saturday: { open: '09:00', close: '18:00', closed: false },
      sunday: { open: '09:00', close: '18:00', closed: false },
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: true }
    },
    
    // Pricing & Offers
    priceType: 'consultation', // 'consultation' or 'session'
    consultationPrice: '',
    sessionPrice: '',
    originalPrice: '',
    discountedPrice: '',
    offers: [''],
    
    // Social Media & Contact
    socialMedia: {
      whatsappDirect: '',
      facebook: '',
      instagram: '',
      website: '',
      googleMaps: ''
    },
    
    // Subscription Plan
    subscriptionPlan: 'free', // 'free' or 'premium'
    
    // Media
    logo: null as File | null,
    images: [] as File[],
    
    // Legal
    license: null as File | null,
    terms: false
  });

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'المنوفية', 'القليوبية',
    'البحيرة', 'كفر الشيخ', 'الغربية', 'الدقهلية', 'دمياط', 'بورسعيد',
    'الإسماعيلية', 'السويس', 'شمال سيناء', 'جنوب سيناء', 'البحر الأحمر',
    'الوادي الجديد', 'مطروح', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط',
    'سوهاج', 'قنا', 'الأقصر', 'أسوان'
  ];

  // مقدمي الخدمة
  const serviceProviders = [
    'عيادة جلدية وليزر',
    'مركز تجميل وليزر',
    'البيوتي سنتر'
  ];

  // التخصصات الرئيسية (3 فقط)
  const mainSpecialities = [
    'طب الجلدية والليزر',
    'جراحة التجميل',
    'مراكز التجميل والعناية بالبشرة'
  ];

  const subscriptionPlans = [
    {
      id: 'free',
      name: 'اشتراك مجاني',
      price: 'مجاناً',
      features: [
        'ظهور في قسم الخدمات',
        'ملف أساسي للعيادة',
        'معلومات الاتصال',
        'تقييمات العملاء'
      ],
      icon: <Gift className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'مثالي للبداية والتجربة'
    },
    {
      id: 'premium',
      name: 'اشتراك مميز',
      price: '299 ج.م/شهرياً',
      features: [
        'ظهور في العروض المميزة',
        'ظهور في الصفحة الرئيسية',
        'أولوية في نتائج البحث',
        'إحصائيات مفصلة',
        'دعم فني مخصص',
        'إعلانات مميزة'
      ],
      icon: <Crown className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      description: 'للحصول على أقصى انتشار'
    }
  ];

  const days = [
    { key: 'saturday', name: 'السبت' },
    { key: 'sunday', name: 'الأحد' },
    { key: 'monday', name: 'الإثنين' },
    { key: 'tuesday', name: 'الثلاثاء' },
    { key: 'wednesday', name: 'الأربعاء' },
    { key: 'thursday', name: 'الخميس' },
    { key: 'friday', name: 'الجمعة' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialMediaChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [field]: value
      }
    }));
  };

  const handleServiceChange = (index: number, value: string) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData(prev => ({
      ...prev,
      services: newServices
    }));
  };

  const addService = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, '']
    }));
  };

  const removeService = (index: number) => {
    if (formData.services.length > 1) {
      const newServices = formData.services.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        services: newServices
      }));
    }
  };

  const handleOfferChange = (index: number, value: string) => {
    const newOffers = [...formData.offers];
    newOffers[index] = value;
    setFormData(prev => ({
      ...prev,
      offers: newOffers
    }));
  };

  const addOffer = () => {
    setFormData(prev => ({
      ...prev,
      offers: [...prev.offers, '']
    }));
  };

  const removeOffer = (index: number) => {
    if (formData.offers.length > 1) {
      const newOffers = formData.offers.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        offers: newOffers
      }));
    }
  };

  const handleHoursChange = (day: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      openHours: {
        ...prev.openHours,
        [day]: {
          ...prev.openHours[day as keyof typeof prev.openHours],
          [field]: value
        }
      }
    }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (!files) return;
    
    if (field === 'images') {
      const newImages = Array.from(files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: files[0]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateDiscountedPrice = () => {
    if (formData.originalPrice && formData.discountedPrice) {
      const original = parseFloat(formData.originalPrice);
      const discounted = parseFloat(formData.discountedPrice);
      if (original > 0 && discounted > 0) {
        const discount = ((original - discounted) / original * 100).toFixed(0);
        return `${discount}%`;
      }
    }
    return '0%';
  };

  const handleSubmit = () => {
    // تحضير البيانات للإرسال
    const clinicData = {
      name: formData.name,
      owner: formData.owner,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      location: `${formData.city}, ${formData.governorate}`,
      speciality: formData.speciality,
      serviceProvider: formData.serviceProvider,
      services: formData.services.filter(s => s.trim() !== ''),
      price: formData.priceType === 'consultation' 
        ? `من ${formData.consultationPrice} جنيه` 
        : `من ${formData.sessionPrice} جنيه`,
      priceType: formData.priceType,
      consultationPrice: formData.consultationPrice,
      sessionPrice: formData.sessionPrice,
      originalPrice: formData.originalPrice,
      discountedPrice: formData.discountedPrice,
      discount: calculateDiscountedPrice(),
      offers: formData.offers.filter(o => o.trim() !== ''),
      openHours: '9:00 ص - 6:00 م',
      image: formData.images.length > 0 ? URL.createObjectURL(formData.images[0]) : 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=500',
      images: formData.images.map(img => URL.createObjectURL(img)),
      socialMedia: formData.socialMedia,
      subscriptionPlan: formData.subscriptionPlan,
      rating: 4.5,
      reviews: 0,
      // إعدادات التحكم (افتراضياً مفعلة)
      features: {
        showOffers: true,
        showWhatsAppDirect: true,
        showSocialMedia: true,
        showAdvancedBooking: true,
        showRating: true
      }
    };

    // إرسال البيانات للمكون الأب
    onSubmit(clinicData);
    
    // إعادة تعيين النموذج
    setFormData({
      name: '',
      owner: '',
      email: '',
      phone: '',
      whatsapp: '',
      serviceProvider: '',
      governorate: '',
      city: '',
      location: '',
      speciality: '',
      services: [''],
      description: '',
      openHours: {
        saturday: { open: '09:00', close: '18:00', closed: false },
        sunday: { open: '09:00', close: '18:00', closed: false },
        monday: { open: '09:00', close: '18:00', closed: false },
        tuesday: { open: '09:00', close: '18:00', closed: false },
        wednesday: { open: '09:00', close: '18:00', closed: false },
        thursday: { open: '09:00', close: '18:00', closed: false },
        friday: { open: '09:00', close: '18:00', closed: true }
      },
      priceType: 'consultation',
      consultationPrice: '',
      sessionPrice: '',
      originalPrice: '',
      discountedPrice: '',
      offers: [''],
      socialMedia: {
        whatsappDirect: '',
        facebook: '',
        instagram: '',
        website: '',
        googleMaps: ''
      },
      subscriptionPlan: 'free',
      logo: null,
      images: [],
      license: null,
      terms: false
    });
    
    setCurrentStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">تسجيل عيادة جديدة</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>البيانات الأساسية</span>
            <span>الموقع</span>
            <span>تفاصيل العيادة</span>
            <span>الأسعار والعروض</span>
            <span>خطة الاشتراك</span>
            <span>الصور والتواصل</span>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">البيانات الأساسية</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    مقدم الخدمة *
                  </label>
                  <select
                    value={formData.serviceProvider}
                    onChange={(e) => handleInputChange('serviceProvider', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    required
                  >
                    <option value="">اختر مقدم الخدمة</option>
                    {serviceProviders.map(provider => (
                      <option key={provider} value={provider}>{provider}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم العيادة/المركز *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: عيادات د. أحمد للجلدية"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    اسم المالك/المدير *
                  </label>
                  <input
                    type="text"
                    value={formData.owner}
                    onChange={(e) => handleInputChange('owner', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="الاسم الكامل"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="01xxxxxxxxx"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الواتساب *
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="01xxxxxxxxx"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    سيتم استخدام هذا الرقم لاستقبال طلبات الحجز
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">الموقع</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    المحافظة *
                  </label>
                  <select
                    value={formData.governorate}
                    onChange={(e) => handleInputChange('governorate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    required
                  >
                    <option value="">اختر المحافظة</option>
                    {governorates.map(gov => (
                      <option key={gov} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    المدينة/المنطقة *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: مدينة نصر"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    العنوان التفصيلي *
                  </label>
                  <textarea
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="العنوان الكامل مع اسم الشارع ورقم المبنى"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Clinic Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">تفاصيل العيادة</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  التخصص الرئيسي *
                </label>
                <select
                  value={formData.speciality}
                  onChange={(e) => handleInputChange('speciality', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                  required
                >
                  <option value="">اختر التخصص</option>
                  {mainSpecialities.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الخدمات المتوفرة *
                </label>
                {formData.services.map((service, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => handleServiceChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="مثال: علاج الحبوب"
                      required
                    />
                    {formData.services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeService(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addService}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mt-2"
                >
                  <Plus size={16} />
                  إضافة خدمة
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  وصف العيادة
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                  placeholder="وصف مختصر عن العيادة والخدمات المقدمة"
                />
              </div>
            </div>
          )}

          {/* Step 4: Pricing & Offers */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">الأسعار والعروض</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع السعر *
                </label>
                <select
                  value={formData.priceType}
                  onChange={(e) => handleInputChange('priceType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                  required
                >
                  <option value="consultation">سعر الكشف</option>
                  <option value="session">عروض الجلسات</option>
                </select>
              </div>

              {formData.priceType === 'consultation' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    سعر الكشف (بالجنيه المصري) *
                  </label>
                  <input
                    type="number"
                    value={formData.consultationPrice}
                    onChange={(e) => handleInputChange('consultationPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: 300"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    سعر الجلسة (بالجنيه المصري) *
                  </label>
                  <input
                    type="number"
                    value={formData.sessionPrice}
                    onChange={(e) => handleInputChange('sessionPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: 500"
                    required
                  />
                </div>
              )}

              {/* عرض السعر قبل وبعد الخصم */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السعر الأصلي (اختياري)
                  </label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: 500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السعر بعد الخصم (اختياري)
                  </label>
                  <input
                    type="number"
                    value={formData.discountedPrice}
                    onChange={(e) => handleInputChange('discountedPrice', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                    placeholder="مثال: 400"
                  />
                </div>
              </div>

              {/* عرض نسبة الخصم */}
              {formData.originalPrice && formData.discountedPrice && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-orange-700">نسبة الخصم:</span>
                    <span className="text-orange-800 font-bold text-lg">{calculateDiscountedPrice()}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-600 line-through">{formData.originalPrice} جنيه</span>
                    <span className="text-emerald-600 font-bold">{formData.discountedPrice} جنيه</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  العروض المتاحة (اختياري)
                </label>
                {formData.offers.map((offer, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={offer}
                      onChange={(e) => handleOfferChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="مثال: خصم 20% على الجلسة الأولى"
                    />
                    {formData.offers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeOffer(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addOffer}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mt-2"
                >
                  <Plus size={16} />
                  إضافة عرض
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Subscription Plan */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">اختر خطة الاشتراك</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      formData.subscriptionPlan === plan.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('subscriptionPlan', plan.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center text-white`}>
                        {plan.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-2xl font-bold text-gray-800">{plan.price}</div>
                        {plan.id === 'premium' && (
                          <div className="text-sm text-gray-500">شهرياً</div>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h4>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full ml-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {formData.subscriptionPlan === plan.id && (
                      <div className="mt-4 p-3 bg-emerald-100 text-emerald-700 rounded-lg text-center font-medium">
                        ✓ تم اختيار هذه الخطة
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Media & Social Links */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">الصور ووسائل التواصل</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  صور العيادة
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    اسحب الصور هنا أو انقر للاختيار
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileUpload('images', e.target.files)}
                    className="hidden"
                    id="images-upload"
                  />
                  <label
                    htmlFor="images-upload"
                    className="cursor-pointer bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    اختر الصور
                  </label>
                </div>
                
                {/* عرض الصور المرفوعة */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`صورة ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">روابط التواصل الاجتماعي (اختياري)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رابط الواتساب المباشر
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.whatsappDirect}
                      onChange={(e) => handleSocialMediaChange('whatsappDirect', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="https://wa.me/201xxxxxxxxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      صفحة الفيسبوك
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.facebook}
                      onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="https://facebook.com/clinic"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      حساب الإنستجرام
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.instagram}
                      onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="https://instagram.com/clinic"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الموقع الإلكتروني
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.website}
                      onChange={(e) => handleSocialMediaChange('website', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="https://clinic-website.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رابط خرائط جوجل
                    </label>
                    <input
                      type="url"
                      value={formData.socialMedia.googleMaps}
                      onChange={(e) => handleSocialMediaChange('googleMaps', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="https://maps.google.com/..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  شعار العيادة (اختياري)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    اسحب الصورة هنا أو انقر للاختيار
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('logo', e.target.files)}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="cursor-pointer bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    اختر صورة
                  </label>
                  {formData.logo && (
                    <p className="text-sm text-green-600 mt-2">تم اختيار: {formData.logo.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={(e) => handleInputChange('terms', e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  أوافق على <a href="#" className="text-emerald-600 hover:underline">الشروط والأحكام</a> و
                  <a href="#" className="text-emerald-600 hover:underline"> سياسة الخصوصية</a>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              السابق
            </button>

            {currentStep < 6 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600"
              >
                التالي
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.terms || !formData.name || !formData.owner || !formData.email || !formData.phone || !formData.whatsapp || !formData.speciality || (!formData.consultationPrice && !formData.sessionPrice) || !formData.serviceProvider}
                className={`px-6 py-3 rounded-lg font-medium ${
                  formData.terms && formData.name && formData.owner && formData.email && formData.phone && formData.whatsapp && formData.speciality && (formData.consultationPrice || formData.sessionPrice) && formData.serviceProvider
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                تسجيل العيادة
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicRegistration;