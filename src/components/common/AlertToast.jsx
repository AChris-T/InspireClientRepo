import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/assets/Icons';
import React, { useEffect, useState } from 'react';

const typeStyles = {
  success: {
    bg: 'bg-green-100/80 backdrop-blur-md',
    border: 'border-green-400',
    text: 'text-green-900',
    icon: <SuccessIcon />,
  },
  error: {
    bg: 'bg-red-100/80 backdrop-blur-md',
    border: 'border-red-400',
    text: 'text-red-900',
    icon: <ErrorIcon />,
  },
  info: {
    bg: 'bg-blue-100/80 backdrop-blur-md',
    border: 'border-blue-400',
    text: 'text-blue-900',
    icon: <InfoIcon />,
  },
  warning: {
    bg: 'bg-yellow-100/80 backdrop-blur-md',
    border: 'border-yellow-400',
    text: 'text-yellow-900',
    icon: <WarningIcon />,
  },
};

export default function AlertToast({
  open,
  onClose,
  type = 'info',
  message,
  autoDismiss = true,
  duration = 4000,
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!open || !autoDismiss) return;

    setProgress(100);
    const interval = 100;
    const decrement = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - decrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [open, autoDismiss, duration, onClose]);

  if (!open) return null;

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in fade-in transition-all duration-300 ease-in-out">
      <div
        className={`relative flex items-start px-5 py-4 rounded-xl  shadow-xl bg-white ${style.text} w-full `}
      >
        {style.icon}
        <div className="flex-1 font-medium  pr-4">{message}</div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-all"
          aria-label="Close"
        >
          <div className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
