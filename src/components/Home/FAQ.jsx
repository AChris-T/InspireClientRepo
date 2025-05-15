'use client';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'What Is InspireEdge Ai',
    answer:
      'A proprietary AI platform that recovers lost carts and unlocks new income using behavioral insights and ethical automation.',
  },
  {
    question: 'What Is InspireCraft Global',
    answer:
      'Our innovation and transformation platform that supports strategic leaders with AI systems, ethical blueprints, and long-term planning tools.',
  },
  {
    question: 'Can I Access Both Platforms?',
    answer: 'Yes—InspireEdge is your entry. InspireCraft is your evolution.',
  },
  {
    question: 'Are Your Platforms Secure And Compliant?',
    answer:
      'Yes—compliance, ethics, and security are foundational to everything we build.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="px-3 mt-10 space gap-5 lg:px-[121px] flex  flex-col  justify-between">
      <h3 className="text-2xl uppercase md:text-[58px] text-[#CACACE]">
        Frequently Asked Questions{' '}
      </h3>{' '}
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className=" p-6 rounded-xl border border-[#1C1C21] transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>

                <button className="p-2 bd rounded-full hover:bg-gray-700">
                  <FiChevronUp
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-sm text-gray-300">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
