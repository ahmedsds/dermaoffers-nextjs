'use client'

import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: {
    id: number;
    name: string;
    speciality: string;
    image: string;
    phone: string;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, clinic }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">احجز موعدًا في {clinic.name}</h2>
        <p className="text-gray-600 mb-6">
          متخصص في {clinic.speciality}، يمكنك التواصل مباشرة عبر:
        </p>

        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <img src={clinic.image} alt={clinic.name} className="w-10 h-10 object-cover rounded-full" />
          <span className="font-medium">{clinic.name}</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{clinic.phone}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            إلغاء
          </button>
          <a
            href={`https://wa.me/ ${clinic.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            اتصل عبر الواتساب
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;