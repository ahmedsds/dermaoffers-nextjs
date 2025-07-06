export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p>عيادة ومركز</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
          <p>طبيب متخصص</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
          <p>عميل راضي</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
          <p>خدمة العملاء</p>
        </div>
      </div>
    </section>
  )
}