import React from 'react';
import { Sparkles, Scissors, Shield, Heart, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'عيادات الجلدية',
      description: 'علاج جميع مشاكل البشرة مع أفضل أطباء الجلدية',
      features: ['علاج الحبوب', 'تفتيح البشرة', 'علاج الأكزيما', 'البوتوكس'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'عيادات التجميل',
      description: 'جراحات التجميل وعمليات التجميل غير الجراحية',
      features: ['شد الوجه', 'تكبير الشفاه', 'نحت الجسم', 'زراعة الشعر'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'إزالة الشعر بالليزر',
      description: 'تقنيات حديثة لإزالة الشعر نهائياً وبأمان تام',
      features: ['ليزر ديود', 'ليزر الكسندرايت', 'IPL', 'نتائج دائمة'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'مراكز التجميل',
      description: 'خدمات تجميلية شاملة للعناية بالوجه والجسم',
      features: ['فيشل', 'مساج', 'تنظيف البشرة', 'العناية بالأظافر'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'علاج الندبات',
      description: 'تقنيات متطورة لعلاج الندبات وآثار الحبوب',
      features: ['الفراكشنال ليزر', 'البلازما', 'الديرما رولر', 'التقشير الكيميائي'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'صالونات التجميل',
      description: 'خدمات تصفيف الشعر والعناية الشاملة',
      features: ['قص وصبغ', 'فرد الشعر', 'تركيب الرموش', 'المكياج'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا المتميزة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم لك أفضل الخدمات في مجال الجلدية والتجميل مع أطباء متخصصين ومعتمدين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover group">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full ml-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-medium py-3 rounded-lg transition-all duration-300">
                احجز الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;