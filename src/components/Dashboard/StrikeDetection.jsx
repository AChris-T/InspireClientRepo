'use client';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ContentCards from '../cards/ContentCards';

export default function StrikeDetection() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const items = Array(8).fill({
    title: 'Price Drop',
    date: '2 days ago',
  });
  return (
    <div className="manrope flex flex-col gap-4">
      <h3 className="text-black-100 font-medium text-xl">
        Strike Detection Timeline
      </h3>
      <ContentCards>
        <div className="relative flex flex-col gap-3 w-full py-6">
          {/* Left Button */}
          <div className="flex w-full justify-between">
            <button
              onClick={() => scroll('left')}
              className="-translate-y-1/2 bg-white rounded-full p-2 shadow z-10 disabled:opacity-50"
            >
              <FaChevronLeft />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll('right')}
              className=" -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 disabled:opacity-50"
            >
              <FaChevronRight />
            </button>
          </div>
          {/* Carousel Content */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-3 scrollbar-hide scroll-smooth"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[120px] bg-white  p-4"
              >
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
