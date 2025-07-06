import React from 'react';
import { 
  Sparkles, 
  Target, 
  Heart, 
  Users, 
  Star, 
  CheckCircle, 
  MessageSquare,
  Search,
  Calendar,
  Shield,
  Award,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'ابحث',
      description: 'ابحث بين مئات العيادات والمراكز',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'قارن',
      description: 'قارن الأسعار والخدمات والتقييمات',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'احجز',
      description: 'احجز موعدك بثواني معدودة',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const goals = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'توفير وقتك ومجهودك في البحث بين عيادات كتيرة'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'تسهيل الوصول للمعلومات: الخدمات – العروض – الأطباء – الصور'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: 'تحسين تجربة الزوار من خلال التقييمات والآراء الحقيقية'
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: 'نشر الوعي بأحدث تقنيات التجميل والليزر وأفضل المراكز'
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: 'رفع مستوى الخدمة في المجال من خلال المتابعة المستمرة ورأي الزوار'
    }
  ];

  const missions = [
    'نجمع لك أفضل عيادات الجلدية والليزر في مكان واحد',
    'نسهّل عليك مقارنة الخدمات والأسعار والتقنيات الحديثة',
    'نعرض لك تجارب وتقييمات حقيقية من زوار العيادة',
    'نوفّر لك وسيلة تواصل سريعة (واتساب – اتصال – حجز مباشر)',
    'نساعدك تحجز الموعد المناسب ليك في ثواني'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
              ✨ إبدأ رحلتك مع الجمال… بكل سهولة وثقة
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              في عالم التجميل والعناية بالبشرة، أصبح الوصول إلى الجمال أسهل من أي وقت مضى. 
              مع موقعنا، تقدر تبدأ البحث وتحجز موعدك بثواني في العيادة الأنسب ليك.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            سواء بتدور على علاج لمشكلة جلدية، جلسة ليزر، أو تجديد كامل لبشرتك، 
            هتلاقي عندنا دليلك الكامل لأفضل عيادات الجلدية والتجميل في مكان واحد.
          </p>
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🧑‍⚕️ ابحث – قارن – احجز بثقة
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">💡 رؤيتنا</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">نساعدك توصل لأفضل خدمة بأقل مجهود</h3>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-6">
              نؤمن إن الجمال الحقيقي بيبدأ بالاختيار الصح… سواء في الطبيب، أو المركز، أو التقنية المناسبة ليك. 
              ومن هنا بدأت فكرتنا:
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-lg text-gray-700 text-center">
                ✨ نوفّر لك معلومات دقيقة ومحدّثة عن العيادات، العروض، الأطباء، والتقييمات – 
                عشان تختار وأنت مطمئن.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 مهمتنا</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{mission}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 أهدافنا</h2>
          </div>
          
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  {goal.icon}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">❤️ رأيك يهمنا</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              بعد زيارتك لأي عيادة، نرحب بتقييمك – لأن رأيك بيساعدنا نطور الخدمة، 
              ويساعد غيرك يختار بشكل أذكى.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            📍 الجمال مش صعب… بس محتاج دليل صح
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            ابدأ رحلتك معانا اليوم، وخلي موقعنا هو دليلك الذكي في عالم التجميل والليزر.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              ابدأ البحث الآن
            </button>
            <button className="bg-yellow-400 text-purple-800 font-bold py-4 px-8 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
              اضف عيادتك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;