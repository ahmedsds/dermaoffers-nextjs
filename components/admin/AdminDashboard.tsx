'use client'
import React, { useState, useEffect } from 'react'
import {
  Users,
  Calendar,
  Star,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  X,
  Clock,
  MapPin,
  Phone,
  Mail,
  Save,
  Upload,
  Tag,
  Gift,
  Crown,
  FileText,
  Globe,
  BarChart3,
  Activity,
  DollarSign,
  Target
} from 'lucide-react'

// ✅ تصحيح الخطأ 1: إضافة كومبوننت افتراضي لأن LandingPageManager غير متوفر
const LandingPageManager = () => (
  <div className="p-6 bg-white rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800">إدارة صفحات الهبوط</h3>
    <p className="text-gray-600 mt-2">هذه الصفحة قيد التطوير.</p>
  </div>
)

// Types
interface SocialMedia {
  whatsappDirect?: string
  facebook?: string
  instagram?: string
  website?: string
  googleMaps?: string
}
interface Clinic {
  id: number
  name: string
  owner: string
  email: string
  phone: string
  whatsapp?: string
  location: string
  speciality: string
  serviceProvider: string
  services: string[]
  price?: string
  priceType?: string
  consultationPrice?: string
  sessionPrice?: string
  originalPrice?: string
  discountedPrice?: string
  offers: string[]
  subscriptionPlan?: string
  image: string
  socialMedia: SocialMedia
  status: string
  rating?: number
  reviews?: number
  joinedAt?: string
  revenue?: string
  discount?: string
  features?: {
    showOffers: boolean
    showWhatsAppDirect: boolean
    showSocialMedia: boolean
    showAdvancedBooking: boolean
    showRating: boolean
  }
  submittedAt?: string // تم إضافته لحل الخطأ
}
interface Offer {
  id: number
  title: string
  description: string
  originalPrice: string
  discountPrice: string
  discount: string
  validUntil: string
  image: string
  status: string
  createdAt: string
}
interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  author: string
  featured: boolean
  status: string
  createdAt: string
  readTime?: string
}
interface AdminDashboardProps {
  user: {
    name: string
    role: string
  }
  onLogout: () => void
  clinics: Clinic[]
  pendingClinics: Clinic[]
  onApproveClinic: (id: number) => void
  onRejectClinic: (id: number) => void
  onDeleteClinic: (id: number) => void
  onSuspendClinic: (id: number) => void
  onActivateClinic: (id: number) => void
  onUpdateClinic: (id: number, data: Partial<Clinic>) => void
  onAddClinic: (data: Clinic) => void
}
const AdminDashboard: React.FC<AdminDashboardProps> = ({
  user,
  onLogout,
  clinics,
  pendingClinics,
  onApproveClinic,
  onRejectClinic,
  onDeleteClinic,
  onSuspendClinic,
  onActivateClinic,
  onUpdateClinic,
  onAddClinic
}) => {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [isAddingClinic, setIsAddingClinic] = useState<boolean>(false)
  const [editingClinic, setEditingClinic] = useState<Clinic | null>(null)
  const [isAddingOffer, setIsAddingOffer] = useState<boolean>(false)
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null)
  const [isAddingPost, setIsAddingPost] = useState<boolean>(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  // إدارة العروض المميزة
  const [monthlyOffers, setMonthlyOffers] = useState<Offer[]>(() => {
    const saved = localStorage.getItem('derma-monthly-offers')
    return saved ? JSON.parse(saved) : []
  })
  // إدارة المدونة
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('derma-blog-posts')
    return saved ? JSON.parse(saved) : []
  })
  // حفظ البيانات في localStorage
  useEffect(() => {
    localStorage.setItem('derma-monthly-offers', JSON.stringify(monthlyOffers))
  }, [monthlyOffers])
  useEffect(() => {
    localStorage.setItem('derma-blog-posts', JSON.stringify(blogPosts))
  }, [blogPosts])
  // إحصائيات العيادات
  const clinicStats = {
    total: clinics.length,
    active: clinics.filter(c => c.status === 'active').length,
    premium: clinics.filter(c => c.subscriptionPlan === 'premium').length,
    free: clinics.filter(c => c.subscriptionPlan === 'free' || !c.subscriptionPlan).length,
    suspended: clinics.filter(c => c.status === 'suspended').length,
    pending: pendingClinics.length
  }
  // إحصائيات العروض
  const offerStats = {
    total: monthlyOffers.length,
    active: monthlyOffers.filter(o => o.status === 'active').length,
    expired: monthlyOffers.filter(o => o.status === 'expired').length,
    draft: monthlyOffers.filter(o => o.status === 'draft').length
  }
  // إحصائيات المدونة
  const blogStats = {
    total: blogPosts.length,
    published: blogPosts.filter(p => p.status === 'published').length,
    draft: blogPosts.filter(p => p.status === 'draft').length,
    featured: blogPosts.filter(p => p.featured).length
  }
  // نموذج بيانات العيادة الجديدة
  const [newClinicData, setNewClinicData] = useState<Omit<Clinic, 'id'>>({
    name: '',
    owner: '',
    email: '',
    phone: '',
    whatsapp: '',
    location: '',
    speciality: '',
    serviceProvider: '',
    services: [''],
    price: '',
    priceType: 'consultation',
    consultationPrice: '',
    sessionPrice: '',
    originalPrice: '',
    discountedPrice: '',
    offers: [''],
    subscriptionPlan: 'free',
    image: '',
    socialMedia: {
      whatsappDirect: '',
      facebook: '',
      instagram: '',
      website: '',
      googleMaps: ''
    },
    status: 'active',
    rating: 4.5,
    reviews: 0,
    joinedAt: new Date().toISOString().split('T')[0],
    revenue: '0 ج.م',
    discount: '0%',
    features: {
      showOffers: true,
      showWhatsAppDirect: true,
      showSocialMedia: true,
      showAdvancedBooking: true,
      showRating: true
    },
    submittedAt: new Date().toISOString().split('T')[0]
  })
  // نموذج بيانات العرض الجديد
  const [newOfferData, setNewOfferData] = useState<Omit<Offer, 'id' | 'createdAt'>>({
    title: '',
    description: '',
    originalPrice: '',
    discountPrice: '',
    discount: '',
    validUntil: '',
    image: '',
    status: 'active'
  })
  // نموذج بيانات المقال الجديد
  const [newPostData, setNewPostData] = useState<Omit<BlogPost, 'id' | 'date'>>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    image: '',
    category: 'ليزر',
    tags: [''],
    author: 'فريق التحرير',
    featured: false,
    status: 'draft',
    createdAt: new Date().toISOString()
  })
  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^\u0600-\u06FF\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }
  const calculateDiscount = (original: string, discounted: string): string => {
    const orig = parseFloat(original)
    const disc = parseFloat(discounted)
    if (orig > 0 && disc > 0) {
      return Math.round(((orig - disc) / orig) * 100) + '%'
    }
    return '0%'
  }
  const handleAddClinic = () => {
    const clinicData = {
      ...newClinicData,
      id: Date.now(),
discount: calculateDiscount(
  newClinicData.originalPrice ?? "0",
  newClinicData.discountedPrice ?? "0"
),      services: newClinicData.services.filter(s => s.trim() !== ''),
      offers: newClinicData.offers.filter(o => o.trim() !== ''),
      features: {
        showOffers: true,
        showWhatsAppDirect: true,
        showSocialMedia: true,
        showAdvancedBooking: true,
        showRating: true
      }
    } as Clinic
    onAddClinic(clinicData)
    setNewClinicData({
      name: '',
      owner: '',
      email: '',
      phone: '',
      whatsapp: '',
      location: '',
      speciality: '',
      serviceProvider: '',
      services: [''],
      price: '',
      priceType: 'consultation',
      consultationPrice: '',
      sessionPrice: '',
      originalPrice: '',
      discountedPrice: '',
      offers: [''],
      subscriptionPlan: 'free',
      image: '',
      socialMedia: {
        whatsappDirect: '',
        facebook: '',
        instagram: '',
        website: '',
        googleMaps: ''
      },
      status: 'active',
      rating: 4.5,
      reviews: 0,
      joinedAt: new Date().toISOString().split('T')[0],
      revenue: '0 ج.م',
      discount: '0%',
      features: {
        showOffers: true,
        showWhatsAppDirect: true,
        showSocialMedia: true,
        showAdvancedBooking: true,
        showRating: true
      },
      submittedAt: new Date().toISOString().split('T')[0]
    })
    setIsAddingClinic(false)
  }
  const handleAddOffer = () => {
    const offerData = {
      ...newOfferData,
      id: Date.now(),
      discount: calculateDiscount(newOfferData.originalPrice, newOfferData.discountPrice),
      createdAt: new Date().toISOString()
    }
    setMonthlyOffers(prev => [...prev, offerData])
    setNewOfferData({
      title: '',
      description: '',
      originalPrice: '',
      discountPrice: '',
      discount: '',
      validUntil: '',
      image: '',
      status: 'active'
    })
    setIsAddingOffer(false)
  }
  const handleAddPost = () => {
    const postData = {
      ...newPostData,
      id: Date.now(),
      slug: newPostData.slug || generateSlug(newPostData.title),
      date: new Date().toISOString(),
      readTime: Math.ceil(newPostData.content.length / 1000) + ' دقائق قراءة',
      tags: newPostData.tags.filter(t => t.trim() !== '')
    }
    setBlogPosts(prev => [...prev, postData])
    setNewPostData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      image: '',
      category: 'ليزر',
      tags: [''],
      author: 'فريق التحرير',
      featured: false,
      status: 'draft',
      createdAt: new Date().toISOString()
    })
    setIsAddingPost(false)
  }
  const handleDeleteOffer = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا العرض؟')) {
      setMonthlyOffers(prev => prev.filter(o => o.id !== id))
    }
  }
  const handleDeletePost = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المقال؟')) {
      setBlogPosts(prev => prev.filter(p => p.id !== id))
    }
  }
  const handleToggleOfferStatus = (id: number) => {
    setMonthlyOffers(prev =>
      prev.map(o =>
        o.id === id ? { ...o, status: o.status === 'active' ? 'expired' : 'active' } : o
      )
    )
  }
  const handleTogglePostFeatured = (id: number) => {
    setBlogPosts(prev => prev.map(p => (p.id === id ? { ...p, featured: !p.featured } : p)))
  }
  const handleTogglePostStatus = (id: number) => {
    setBlogPosts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status: p.status === 'published' ? 'draft' : 'published' } : p
      )
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">لوحة تحكم الإدارة</h1>
              <p className="text-gray-600">مرحباً {user.name}</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'overview'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                نظرة عامة
              </button>
              <button
                onClick={() => setActiveTab('clinics')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'clinics'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5" />
                إدارة العيادات
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'pending'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Clock className="w-5 h-5" />
                طلبات الانتظار
                {pendingClinics.length > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {pendingClinics.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('offers')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'offers'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Gift className="w-5 h-5" />
                إدارة العروض المميزة
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'blog'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-5 h-5" />
                إدارة المدونة
              </button>
              <button
                onClick={() => setActiveTab('landing-pages')}
                className={`w-full text-right px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeTab === 'landing-pages'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Globe className="w-5 h-5" />
                إدارة صفحات الهبوط
              </button>
            </nav>
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-800">نظرة عامة</h2>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">إجمالي العيادات</p>
                        <p className="text-2xl font-bold text-gray-800">{clinicStats.total}</p>
                        <p className="text-sm text-green-600">+{clinicStats.pending} في الانتظار</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">عيادات مميزة</p>
                        <p className="text-2xl font-bold text-purple-600">{clinicStats.premium}</p>
                        <p className="text-sm text-gray-500">{clinicStats.free} مجانية</p>
                      </div>
                      <Crown className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">العروض النشطة</p>
                        <p className="text-2xl font-bold text-orange-600">{offerStats.active}</p>
                        <p className="text-sm text-gray-500">{offerStats.total} إجمالي</p>
                      </div>
                      <Gift className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">مقالات المدونة</p>
                        <p className="text-2xl font-bold text-emerald-600">{blogStats.published}</p>
                        <p className="text-sm text-gray-500">{blogStats.draft} مسودات</p>
                      </div>
                      <FileText className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                </div>
                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    النشاط الأخير
                  </h3>
                  <div className="space-y-4">
                    {pendingClinics.slice(0, 3).map((clinic: Clinic) => (
                      <div key={clinic.id} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">طلب تسجيل جديد: {clinic.name}</p>
                          {/* ✅ تصحيح الخطأ 2: التأكد من وجود submittedAt قبل العرض */}
                          <p className="text-sm text-gray-600">بواسطة {clinic.owner} - {clinic.submittedAt || 'غير متوفر'}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => onApproveClinic(clinic.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                          >
                            قبول
                          </button>
                          <button
                            onClick={() => onRejectClinic(clinic.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                          >
                            رفض
                          </button>
                        </div>
                      </div>
                    ))}
                    {pendingClinics.length === 0 && (
                      <p className="text-gray-500 text-center py-4">لا توجد طلبات جديدة</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* Clinics Management Tab */}
            {activeTab === 'clinics' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">إدارة العيادات</h2>
                  <button
                    onClick={() => setIsAddingClinic(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Plus size={20} />
                    إضافة عيادة جديدة
                  </button>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{clinicStats.active}</div>
                      <div className="text-sm text-gray-600">عيادات نشطة</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{clinicStats.premium}</div>
                      <div className="text-sm text-gray-600">اشتراك مميز</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{clinicStats.free}</div>
                      <div className="text-sm text-gray-600">اشتراك مجاني</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{clinicStats.suspended}</div>
                      <div className="text-sm text-gray-600">معلقة</div>
                    </div>
                  </div>
                </div>
                {/* Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العيادة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المالك</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاشتراك</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {clinics.map((clinic: Clinic) => (
                          <tr key={clinic.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={clinic.image}
                                  alt={clinic.name}
                                  className="w-10 h-10 rounded-lg object-cover"
                                />
                                <div>
                                  <div className="font-medium text-gray-800">{clinic.name}</div>
                                  <div className="text-sm text-gray-500">{clinic.speciality}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{clinic.owner}</td>
                            <td className="px-6 py-4">
                              <select
                                value={clinic.subscriptionPlan || 'free'}
                                onChange={e => onUpdateClinic(clinic.id, { subscriptionPlan: e.target.value })}
                                className={`px-3 py-1 rounded-full text-xs font-medium border-0 ${
                                  clinic.subscriptionPlan === 'premium'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                <option value="free">مجاني</option>
                                <option value="premium">مميز</option>
                              </select>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  clinic.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : clinic.status === 'suspended'
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {clinic.status === 'active' ? 'نشط' : 'معلق'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setEditingClinic(clinic)}
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                >
                                  <Edit size={16} />
                                </button>
                                {clinic.status === 'active' ? (
                                  <button
                                    onClick={() => onSuspendClinic(clinic.id)}
                                    className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg"
                                  >
                                    <Clock size={16} />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => onActivateClinic(clinic.id)}
                                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                                  >
                                    <CheckCircle size={16} />
                                  </button>
                                )}
                                <button
                                  onClick={() => onDeleteClinic(clinic.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {/* Pending Requests Tab */}
            {activeTab === 'pending' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">طلبات الانتظار</h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">طلبات تسجيل العيادات</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pendingClinics.length} طلب في الانتظار
                    </span>
                  </div>
                  {pendingClinics.length > 0 ? (
                    <div className="space-y-4">
                      {pendingClinics.map((clinic: Clinic) => (
                        <div key={clinic.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800">{clinic.name}</h4>
                              <p className="text-gray-600">بواسطة: {clinic.owner}</p>
                              {/* ✅ تصحيح الخطأ 2: التأكد من وجود submittedAt قبل العرض */}
                              {clinic.submittedAt ? new Date(clinic.submittedAt).toLocaleDateString('ar-EG') : 'غير متوفر'}
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  clinic.subscriptionPlan === 'premium'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                {clinic.subscriptionPlan === 'premium' ? 'اشتراك مميز' : 'اشتراك مجاني'}
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Phone size={16} />
                              <span>{clinic.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Mail size={16} />
                              <span>{clinic.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin size={16} />
                              <span>{clinic.location}</span>
                            </div>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-gray-600">
                              <strong>التخصص:</strong> {clinic.speciality}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>نوع الخدمة:</strong> {clinic.serviceProvider}
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={() => onApproveClinic(clinic.id)}
                              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
                            >
                              <CheckCircle size={16} />
                              قبول
                            </button>
                            <button
                              onClick={() => onRejectClinic(clinic.id)}
                              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
                            >
                              <X size={16} />
                              رفض
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد طلبات في الانتظار</h3>
                      <p className="text-gray-600">جميع الطلبات تم مراجعتها</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Special Offers Management Tab */}
            {activeTab === 'offers' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">إدارة العروض المميزة</h2>
                  <button
                    onClick={() => setIsAddingOffer(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Plus size={20} />
                    إضافة عرض جديد
                  </button>
                </div>
                {/* Offer Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{offerStats.total}</div>
                      <div className="text-sm text-gray-600">إجمالي العروض</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{offerStats.active}</div>
                      <div className="text-sm text-gray-600">عروض نشطة</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{offerStats.expired}</div>
                      <div className="text-sm text-gray-600">عروض منتهية</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{offerStats.draft}</div>
                      <div className="text-sm text-gray-600">مسودات</div>
                    </div>
                  </div>
                </div>
                {/* Offers List */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العرض</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">السعر</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الخصم</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">صالح حتى</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {monthlyOffers.map((offer: Offer) => (
                          <tr key={offer.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={offer.image}
                                  alt={offer.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                  <div className="font-medium text-gray-800">{offer.title}</div>
                                  <div className="text-sm text-gray-500">
                                    {offer.description?.substring(0, 50)}...
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm">
                                <div className="font-medium text-emerald-600">{offer.discountPrice} ج.م</div>
                                <div className="text-gray-500 line-through">{offer.originalPrice} ج.م</div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                                {offer.discount}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{offer.validUntil}</td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleToggleOfferStatus(offer.id)}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  offer.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {offer.status === 'active' ? 'نشط' : 'منتهي'}
                              </button>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setEditingOffer(offer)}
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeleteOffer(offer.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {monthlyOffers.length === 0 && (
                    <div className="text-center py-12">
                      <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد عروض</h3>
                      <p className="text-gray-600">ابدأ بإضافة عرض جديد</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Blog Management Tab */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">إدارة المدونة</h2>
                  <button
                    onClick={() => setIsAddingPost(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Plus size={20} />
                    إضافة مقال جديد
                  </button>
                </div>
                {/* Blog Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{blogStats.total}</div>
                      <div className="text-sm text-gray-600">إجمالي المقالات</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{blogStats.published}</div>
                      <div className="text-sm text-gray-600">مقالات منشورة</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{blogStats.draft}</div>
                      <div className="text-sm text-gray-600">مسودات</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{blogStats.featured}</div>
                      <div className="text-sm text-gray-600">مقالات مميزة</div>
                    </div>
                  </div>
                </div>
                {/* Blog Posts List */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المقال</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الفئة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الكاتب</th>
                          {/* ✅ تصحيح الخطأ 3: استخدام post.createdAt بدلاً من post.date */}
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {blogPosts.map((post: BlogPost) => (
                          <tr key={post.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={post.image}
                                  alt={post.title}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                  <div className="font-medium text-gray-800">{post.title}</div>
                                  <div className="text-sm text-gray-500">
                                    {post.excerpt?.substring(0, 50)}...
                                  </div>
                                  {post.featured && (
                                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                                      <Star size={12} className="fill-current" />
                                      مميز
                                    </span>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
                            {/* ✅ تصحيح الخطأ 3: استخدام post.createdAt بدلاً من post.date */}
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {new Date(post.createdAt).toLocaleDateString('ar-EG')}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleTogglePostStatus(post.id)}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  post.status === 'published'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                              >
                                {post.status === 'published' ? 'منشور' : 'مسودة'}
                              </button>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                >
                                  <Eye size={16} />
                                </button>
                                <button
                                  onClick={() => setEditingPost(post)}
                                  className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeletePost(post.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {blogPosts.length === 0 && (
                    <div className="text-center py-12">
                      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد مقالات</h3>
                      <p className="text-gray-600">ابدأ بإضافة مقال جديد</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Landing Pages Tab */}
            {activeTab === 'landing-pages' && <LandingPageManager />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminDashboard