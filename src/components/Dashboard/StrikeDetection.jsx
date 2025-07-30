'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ContentCards from '../cards/ContentCards';

export default function StrikeDetection() {
  const carouselRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Responsive items per page
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = Array(8).fill({
    title: 'Price Drop',
    date: '2 days ago',
  });

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const scroll = (direction) => {
    if (direction === 'left') {
      setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
    } else {
      setStartIndex((prev) => Math.min(maxIndex, prev + itemsPerPage));
    }
  };

  // Ensure startIndex is always valid if itemsPerPage changes
  useEffect(() => {
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex]);

  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">
        Strike Detection Timeline
      </h3>
      <ContentCards>
        <div className="relative flex flex-col gap-3 w-full max-w-full py-6">
          <div className="flex w-full justify-between">
            <button
              onClick={() => scroll('left')}
              className="hidden md:block -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:block -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 disabled:opacity-50"
              disabled={startIndex >= maxIndex}
            >
              <FaChevronRight />
            </button>
          </div>
          <div
            ref={carouselRef}
            className="flex w-full max-w-full min-w-0 overflow-hidden space-x-3"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {items.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
              <div
                key={startIndex + index}
                className="flex flex-col items-center bg-white p-4 flex-shrink-0"
                style={{ flexBasis: `calc(100% / ${itemsPerPage})` }}
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
