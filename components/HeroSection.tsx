import React, { useState } from 'react';
import { Search, MapPin, Calendar, Star } from 'lucide-react';

interface HeroProps {
  onSearch?: (query: string, city: string, service: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const cities = ['القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'المنوفية', 'القليوبية'];
  const services = ['عيادات الجلدية', 'عيادات التجميل', 'إزالة الشعر بالليزر', 'مراكز التجميل'];

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, selectedCity, selectedService);
    }
    
    // التمرير إلى قسم العيادات
    const clinicsSection = document.getElementById('clinics');
    if (clinicsSection) {
      clinicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            أفضل عروض العيادات
            <span className="block text-yellow-300">والمراكز الطبية في مصر</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            احجز موعدك الآن مع أفضل الأطباء واحصل على أفضل العروض
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="ابحث عن طبيب أو عيادة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 text-right"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 text-right appearance-none"
                >
                  <option value="">اختر المحافظة</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Star className="absolute right-3 top-3 text-gray-400" size={20} />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 text-right appearance-none"
                >
                  <option value="">نوع الخدمة</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Search size={20} />
                ابحث الآن
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">500+</div>
              <div className="text-blue-100">عيادة ومركز</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">1000+</div>
              <div className="text-blue-100">طبيب متخصص</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">50K+</div>
              <div className="text-blue-100">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">24/7</div>
              <div className="text-blue-100">خدمة العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;