'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowLeft, Search, Tag, Star } from 'lucide-react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

// 🔹 تعريف نوع البيانات
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags?: string[];
  featured?: boolean;
  status: 'published' | 'draft';
}

const BlogPage = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  // تحميل المقالات من localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('derma-blog-posts');
    if (savedPosts) {
      try {
        const posts = JSON.parse(savedPosts);
        setBlogPosts(posts.filter((post: BlogPost) => post.status === 'published'));
      } catch (error) {
        console.error('Failed to parse blog posts:', error);
      }
    }
  }, []);

  const categories = ['الكل', 'ليزر', 'العناية بالبشرة', 'تجميل', 'علاج الجلد', 'تقشير', 'نحت الجسم'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // الحصول على slug من URL باستخدام next/navigation
  const slug = typeof params?.slug === 'string' ? params.slug : null;

  // إذا كان هناك slug، اعرض المقال المحدد
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">المقال غير موجود</h1>
            <Link href="/blog" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg">
              العودة للمدونة
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Link href="/" className="hover:text-indigo-600">الرئيسية</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-indigo-600">المدونة</Link>
                  <span>/</span>
                  <span className="text-gray-800">{post.title}</span>
                </div>
              </nav>

              {/* Article Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} className="fill-current" />
                    مميز
                  </span>
                )}
              </div>

              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article Info */}
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.date).toLocaleDateString('ar-EG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Article Image */}
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
                />
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Article Excerpt */}
              {post.excerpt && (
                <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-xl border-r-4 border-indigo-500">
                  {post.excerpt}
                </div>
              )}

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                style={{ direction: 'rtl' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">الكلمات المفتاحية:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <ArrowLeft size={16} />
                  العودة للمدونة
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt.substring(0, 100)}...</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // عرض قائمة المقالات
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">المدونة</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            اكتشف أحدث المقالات والنصائح في عالم الجلدية والتجميل من خبراء المجال
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'الكل' && !searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">المقال المميز</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      مميز
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(featuredPost.date).toLocaleDateString('ar-EG')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 inline-flex"
                  >
                    اقرأ المقال
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedCategory === 'الكل' ? 'جميع المقالات' : `مقالات ${selectedCategory}`}
          </h2>
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-indigo-500" />
                      <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.featured && (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 rounded-lg transition-all duration-300 text-sm text-center block"
                    >
                      اقرأ المزيد
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">لم يتم العثور على مقالات</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {regularPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-8 py-4 rounded-lg transition-colors">
              عرض المزيد من المقالات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;