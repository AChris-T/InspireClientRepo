"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🚀',
    title: 'AI-Powered Execution',
    desc: "Our advanced AI doesn't just provide recommendations - it helps you implement them with clear, actionable steps tailored to your business."
  },
  {
    icon: '🛫',
    title: 'Early Adopter Benefits',
    desc: 'Waitlist members receive exclusive onboarding support, priority access to new features and special pricing not available to the general public.'
  },
  {
    icon: '📈',
    title: 'Transform Your Business',
    desc: 'Join hundreds of SMEs already using InspireEdge to streamline operations, boost productivity, and achieve breakthrough results.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const FeaturesSection = () => (
  <motion.section
    className="flex flex-col md:flex-row justify-center gap-6 py-10 px-4 max-w-6xl mx-auto"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {features.map((feature, idx) => (
      <motion.div
        key={idx}
        variants={item}
        whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px 0 rgba(126,198,233,0.10)' }}
        className="bg-white rounded-lg shadow p-6 flex-1 min-w-[250px] flex flex-col items-start transition-all duration-200"
      >
        <div className="text-3xl mb-2">{feature.icon}</div>
        <h4 className="font-semibold text-lg mb-1 robbot">{feature.title}</h4>
        <p className="text-[#515151] robbot text-sm">{feature.desc}</p>
      </motion.div>
    ))}
  </motion.section>
);

export default FeaturesSection; 