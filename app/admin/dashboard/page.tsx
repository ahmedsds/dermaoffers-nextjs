// app/admin/dashboard/page.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton'; // استيراد الزر

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/admin/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) return <p className="text-center mt-10">جاري التحقق...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">مرحبا بك في لوحة التحكم</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <p className="text-lg"><span className="font-semibold">البريد الإلكتروني:</span> {user.email}</p>
        <p className="text-sm text-gray-500 mt-2">UID: {user.uid}</p>
      </div>

      <LogoutButton /> {/* استخدام الزر هنا */}
    </div>
  );
}