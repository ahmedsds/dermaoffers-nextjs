import React from 'react';
import { Shield, FileText, Users, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصة Derma Offers
          </p>
          <p className="text-blue-200 mt-4">آخر تحديث: يناير 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">مقدمة</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              مرحباً بك في منصة Derma Offers، المنصة الرائدة في مصر لربط المرضى بأفضل العيادات والمراكز الطبية المتخصصة في الجلدية والتجميل. 
              باستخدامك لهذه المنصة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، 
              يرجى عدم استخدام المنصة.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">1. تعريف المصطلحات</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="text-gray-800">المنصة:</strong> موقع وتطبيق Derma Offers الإلكتروني
                </div>
                <div>
                  <strong className="text-gray-800">المستخدم:</strong> أي شخص يستخدم المنصة للبحث عن الخدمات الطبية
                </div>
                <div>
                  <strong className="text-gray-800">مقدم الخدمة:</strong> العيادات والمراكز الطبية المسجلة على المنصة
                </div>
                <div>
                  <strong className="text-gray-800">الخدمات:</strong> جميع الخدمات المتاحة على المنصة
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">2. قبول الشروط</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  باستخدام منصة Derma Offers، فإنك تؤكد أنك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تبلغ من العمر 18 عاماً أو أكثر</li>
                  <li>تمتلك الأهلية القانونية للدخول في هذه الاتفاقية</li>
                  <li>توافق على جميع الشروط والأحكام المذكورة</li>
                  <li>تتعهد باستخدام المنصة بطريقة قانونية ومسؤولة</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">3. استخدام المنصة</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <h4 className="font-semibold text-gray-800">الاستخدام المسموح:</h4>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>البحث عن العيادات والمراكز الطبية</li>
                  <li>حجز المواعيد مع مقدمي الخدمة</li>
                  <li>قراءة المعلومات والتقييمات</li>
                  <li>التواصل مع العيادات المسجلة</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-6">الاستخدام المحظور:</h4>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>نشر معلومات كاذبة أو مضللة</li>
                  <li>انتهاك حقوق الملكية الفكرية</li>
                  <li>استخدام المنصة لأغراض غير قانونية</li>
                  <li>محاولة اختراق أو إلحاق الضرر بالمنصة</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">4. المسؤوليات والضمانات</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">مسؤولية المنصة:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>توفير منصة آمنة وموثوقة للتواصل</li>
                    <li>التحقق من صحة بيانات العيادات المسجلة</li>
                    <li>حماية خصوصية بيانات المستخدمين</li>
                    <li>تقديم الدعم الفني اللازم</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">إخلاء المسؤولية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>المنصة وسيط فقط ولا تقدم خدمات طبية مباشرة</li>
                    <li>جودة الخدمات الطبية مسؤولية مقدمي الخدمة</li>
                    <li>المنصة غير مسؤولة عن النتائج الطبية</li>
                    <li>يجب التحقق من تراخيص العيادات قبل الحجز</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">5. الحجوزات والمدفوعات</h3>
              <div className="space-y-4 text-gray-600">
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>جميع الحجوزات تتم مباشرة مع العيادات</li>
                  <li>المدفوعات تتم مباشرة لمقدمي الخدمة</li>
                  <li>سياسات الإلغاء والاسترداد تحددها كل عيادة</li>
                  <li>المنصة غير مسؤولة عن النزاعات المالية</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">6. الملكية الفكرية</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  جميع المحتويات الموجودة على المنصة محمية بحقوق الطبع والنشر والملكية الفكرية. 
                  يحظر نسخ أو توزيع أو استخدام أي محتوى دون إذن مسبق.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">7. تعديل الشروط</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعار المستخدمين بأي تغييرات جوهرية 
                  عبر المنصة أو البريد الإلكتروني.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">8. القانون المطبق</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  تخضع هذه الشروط والأحكام للقوانين المصرية. أي نزاع ينشأ عن استخدام المنصة 
                  سيتم حله وفقاً للقوانين المصرية والمحاكم المختصة.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">تواصل معنا</h3>
              <p className="text-gray-600 mb-4">
                إذا كان لديك أي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>واتساب:</strong> +201201966093</p>
                <p><strong>البريد الإلكتروني:</strong> info@derma-offers.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;