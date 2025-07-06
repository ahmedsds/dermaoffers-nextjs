import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, FileText, Phone } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            نحن ملتزمون بحماية خصوصيتك وأمان بياناتك الشخصية على منصة Derma Offers
          </p>
          <p className="text-emerald-200 mt-4">آخر تحديث: يناير 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">التزامنا بخصوصيتك</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              في Derma Offers، نؤمن بأن خصوصيتك حق أساسي. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا 
              لمعلوماتك الشخصية عند استخدام منصتنا. نحن ملتزمون بالشفافية الكاملة حول ممارساتنا في التعامل مع البيانات 
              ونضمن أعلى معايير الأمان والحماية.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">1. المعلومات التي نجمعها</h3>
              </div>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">المعلومات الشخصية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الاسم الكامل</li>
                    <li>رقم الهاتف</li>
                    <li>عنوان البريد الإلكتروني</li>
                    <li>العنوان والموقع الجغرافي</li>
                    <li>تاريخ الميلاد (عند الحاجة)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">معلومات الاستخدام:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>سجل التصفح والبحث</li>
                    <li>تفضيلات المستخدم</li>
                    <li>معلومات الجهاز والمتصفح</li>
                    <li>عنوان IP والموقع التقريبي</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">المعلومات الطبية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>نوع الخدمة المطلوبة</li>
                    <li>التخصص الطبي المطلوب</li>
                    <li>ملاحظات الحجز (اختيارية)</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 text-amber-700">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-medium">ملاحظة مهمة:</span>
                    </div>
                    <p className="text-amber-600 mt-2">
                      نحن لا نجمع أو نحتفظ بأي معلومات طبية حساسة أو تشخيصات طبية. 
                      جميع المعلومات الطبية التفصيلية تبقى بين المريض والطبيب المعالج.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">2. كيف نستخدم معلوماتك</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">الأغراض الأساسية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تسهيل عملية حجز المواعيد مع العيادات</li>
                    <li>توفير خدمة البحث والتصفية المخصصة</li>
                    <li>التواصل معك بخصوص حجوزاتك</li>
                    <li>تحسين جودة الخدمة المقدمة</li>
                    <li>إرسال التحديثات والإشعارات المهمة</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">الأغراض الثانوية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تحليل استخدام المنصة لتحسين الخدمات</li>
                    <li>إرسال عروض وخصومات مخصصة (بموافقتك)</li>
                    <li>إجراء استطلاعات رضا العملاء</li>
                    <li>الامتثال للمتطلبات القانونية</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">3. مشاركة المعلومات</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">مع العيادات والمراكز الطبية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>معلومات الاتصال الأساسية للحجز</li>
                    <li>نوع الخدمة المطلوبة</li>
                    <li>التاريخ والوقت المفضل</li>
                    <li>أي ملاحظات خاصة بالحجز</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">مع أطراف ثالثة:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>مقدمي الخدمات التقنية (استضافة، تحليلات)</li>
                    <li>خدمات الدفع الإلكتروني (عند الحاجة)</li>
                    <li>السلطات القانونية (عند الطلب القانوني)</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">نحن لا نبيع معلوماتك:</span>
                  </div>
                  <p className="text-red-600 mt-2">
                    نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأي أطراف ثالثة لأغراض تجارية.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">4. أمان البيانات</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">التدابير الأمنية:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>تشفير SSL/TLS لجميع البيانات المنقولة</li>
                    <li>تشفير قواعد البيانات</li>
                    <li>مراقبة أمنية على مدار الساعة</li>
                    <li>نسخ احتياطية منتظمة ومؤمنة</li>
                    <li>تحديثات أمنية دورية</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">التحكم في الوصول:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>وصول محدود للموظفين المخولين فقط</li>
                    <li>مصادقة متعددة العوامل</li>
                    <li>سجلات تدقيق شاملة</li>
                    <li>تدريب منتظم للموظفين على الأمان</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">5. حقوقك في البيانات</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">حقوقك تشمل:</h4>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
                    <li><strong>التصحيح:</strong> تحديث أو تصحيح معلوماتك</li>
                    <li><strong>الحذف:</strong> طلب حذف بياناتك (الحق في النسيان)</li>
                    <li><strong>التقييد:</strong> تقييد معالجة بياناتك</li>
                    <li><strong>النقل:</strong> الحصول على بياناتك بصيغة قابلة للنقل</li>
                    <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700">
                    <strong>كيفية ممارسة حقوقك:</strong> يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني 
                    لممارسة أي من هذه الحقوق. سنرد على طلبك خلال 30 يوماً.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">6. ملفات تعريف الارتباط (Cookies)</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على المنصة:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li><strong>ملفات أساسية:</strong> ضرورية لعمل المنصة</li>
                  <li><strong>ملفات الأداء:</strong> لتحليل استخدام المنصة</li>
                  <li><strong>ملفات التخصيص:</strong> لحفظ تفضيلاتك</li>
                  <li><strong>ملفات التسويق:</strong> لعرض محتوى مخصص (بموافقتك)</li>
                </ul>
                <p>
                  يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">7. الاحتفاظ بالبيانات</h3>
              <div className="space-y-4 text-gray-600">
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>نحتفظ ببياناتك طالما كان حسابك نشطاً</li>
                  <li>بعد حذف الحساب، نحتفظ بالبيانات لمدة 3 سنوات للأغراض القانونية</li>
                  <li>يمكنك طلب حذف بياناتك في أي وقت</li>
                  <li>بعض البيانات قد تُحفظ لفترة أطول للامتثال القانوني</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">8. خصوصية الأطفال</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  منصتنا مخصصة للبالغين (18 عاماً فأكثر). نحن لا نجمع عمداً معلومات شخصية من الأطفال 
                  دون سن 18 عاماً. إذا علمنا أننا جمعنا معلومات من طفل، سنحذفها فوراً.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">9. التحديثات على السياسة</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>إشعار على المنصة</li>
                  <li>رسالة بريد إلكتروني</li>
                  <li>رسالة واتساب (للتحديثات المهمة)</li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">تواصل معنا</h3>
              </div>
              <p className="text-gray-600 mb-4">
                إذا كان لديك أي استفسارات حول سياسة الخصوصية أو ترغب في ممارسة حقوقك في البيانات:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>واتساب:</strong> +201201966093</p>
                <p><strong>البريد الإلكتروني:</strong> privacy@derma-offers.com</p>
                <p><strong>مسؤول حماية البيانات:</strong> info@derma-offers.com</p>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-emerald-200">
                <p className="text-emerald-700 text-sm">
                  <strong>وقت الاستجابة:</strong> نلتزم بالرد على جميع استفسارات الخصوصية خلال 48 ساعة، 
                  وحل طلبات البيانات خلال 30 يوماً كحد أقصى.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;