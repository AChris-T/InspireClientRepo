'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';

const testimonials = [
  {
    name: 'Dr. Amaka Okafor, COO, Zenith Group',
    location: 'UK, London',
    stars: 5,
    text: `InspireEdge AI has revolutionized how we make decisions. It's like having a boardroom of experts—only smarter, faster, and aligned with our mission`,
  },
  {
    name: 'Dr. Amaka Okafor, COO, Zenith Group',
    location: 'UK, London',
    stars: 5,
    text: `InspireEdge AI has revolutionized how we make decisions. It's like having a boardroom of experts—only smarter, faster, and aligned with our mission`,
  },
  {
    name: 'Dr.  Okafor, COO, Zenith Group',
    location: 'UK, London',
    stars: 5,
    text: `InspireEdge AI has revolutionized how we make decisions. It's like having a boardroom of experts—only smarter, faster, and aligned with our mission`,
  },
  {
    name: 'Dr. Am Okafor, COO, Zenith Group',
    location: 'UK, London',
    stars: 5,
    text: `InspireEdge AI has revolutionized how we make decisions. It's like having a boardroom of experts—only smarter, faster, and aligned with our mission`,
  },
];
export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = 2;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0
        ? testimonials.length - visibleTestimonials
        : prev - visibleTestimonials
    );
  };
  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleTestimonials) % testimonials.length);
  };
  return (
    <div className="px-3 mt-10 space gap-5 lg:px-[121px] flex  flex-col  justify-between">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl uppercase md:text-[58px] text-[#CACACE]">
          Client Testimonials{' '}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bd rounded-full hover:bg-gray-700"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bd rounded-full hover:bg-gray-700"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="grid mt-[50px] grid-cols-1 md:grid-cols-2">
        {testimonials
          .slice(startIndex, startIndex + visibleTestimonials)
          .map((testimonial, index) => (
            <div
              key={index}
              className="border-y border-r px-2 md:px-[50px] border-[#1C1C21] py-[60px]"
            >
              <h4 className="font-semibold text-xl text-[#E4E4E6]">
                {testimonial.name}
              </h4>
              <p className="text-[#62646C] text-[18px] mb-2">
                {testimonial.location}
              </p>
              <div className="flex text-yellow-400 my-[30px]">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-[#E4E4E6] text-xl">{testimonial.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
