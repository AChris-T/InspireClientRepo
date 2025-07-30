import React, { useEffect } from 'react';

export default function ToastNotification({ open, onClose, message }) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end animate-slide-in">
      <div className="bg-white border border-green-200 shadow-lg rounded-lg px-6 py-4 flex items-center min-w-[280px] max-w-xs">
        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <div className="flex-1 text-gray-800 text-sm">{message}</div>
        <button
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Add a simple slide-in animation
// In your global CSS (e.g., globals.css), add:
// @keyframes slide-in { from { opacity: 0; transform: translateX(100%); } to { opacity: 1; transform: translateX(0); } }
// .animate-slide-in { animation: slide-in 0.4s ease; } 