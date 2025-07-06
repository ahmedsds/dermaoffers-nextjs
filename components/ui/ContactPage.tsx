import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Twitter, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 2000));

    // حفظ الرسالة محلياً
    const contactMessage = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    const existingMessages = JSON.parse(localStorage.getItem('derma-contact-messages') || '[]');
    existingMessages.push(contactMessage);
    localStorage.setItem('derma-contact-messages', JSON.stringify(existingMessages));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // إعادة تعيين النموذج بعد 3 ثواني
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في أي استفسار أو طلب. تواصل معنا وسنرد عليك في أقرب وقت
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">معلومات التواصل</h2>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">واتساب</h3>
                  <p className="text-gray-600 mb-2">للتواصل السريع والاستفسارات</p>
                  <a 
                    href="https://wa.me/201201966093" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    +201201966093
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-600 mb-2">للاستفسارات والدعم الفني</p>
                  <a 
                    href="mailto:info@derma-offers.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    info@derma-offers.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">الموقع</h3>
                  <p className="text-gray-600">جميع أنحاء جمهورية مصر العربية</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">ساعات العمل</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
                    <p>الجمعة: 2:00 م - 10:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">تابعنا على</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-gray-600">سنتواصل معك في أقرب وقت ممكن</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                        placeholder="أدخل اسمك الكامل"
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
                      موضوع الرسالة *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      required
                    >
                      <option value="">اختر موضوع الرسالة</option>
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="تسجيل عيادة">تسجيل عيادة جديدة</option>
                      <option value="دعم فني">دعم فني</option>
                      <option value="شكوى">شكوى</option>
                      <option value="اقتراح">اقتراح</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      placeholder="اكتب رسالتك هنا..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        إرسال الرسالة
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">الأسئلة الشائعة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">كيف يمكنني تسجيل عيادتي؟</h3>
              <p className="text-gray-600">يمكنك تسجيل عيادتك من خلال النقر على زر "اضف عيادتك" في الصفحة الرئيسية وملء النموذج المطلوب.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">هل الخدمة مجانية؟</h3>
              <p className="text-gray-600">نعم، نوفر خطة مجانية للعيادات بالإضافة إلى خطة مميزة بمزايا إضافية.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">كم يستغرق تفعيل العيادة؟</h3>
              <p className="text-gray-600">يتم مراجعة وتفعيل العيادات خلال 24 ساعة من تقديم الطلب.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">كيف يمكنني تعديل بيانات عيادتي؟</h3>
              <p className="text-gray-600">يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني لتعديل بيانات عيادتك.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;