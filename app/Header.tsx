// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 mb-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Derma Offers</h1>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/" className="text-blue-500 hover:underline">الرئيسية</Link></li>
            <li><Link href="/offers" className="text-blue-500 hover:underline">العروض</Link></li>
            <li><Link href="/contact" className="text-blue-500 hover:underline">اتصل بنا</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}