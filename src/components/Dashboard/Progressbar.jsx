'use client';
import React, { useEffect, useState } from 'react';

export default function Progressbar({ target }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) return target;
        return prev + 4;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full flex-col gap-2">
        <div className="w-full bg-gray-400 rounded-full h-2 overflow-hidden">
          <div
            className="bg-lemon-300 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
