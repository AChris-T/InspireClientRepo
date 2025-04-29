/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../../public/image/logo.png"
import Image from 'next/image';
const HeroSection = () => (
  <motion.header
    className="w-full flex flex-col items-center pb-8 bg-[#f7fafd]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <nav className="w-full flex justify-between items-center mb-5 px-8 py-4">
      <Image src={logo} alt='log' width={200}/>
{/*       <span className="text-[#7ec6e9] text-2xl font-bold robbot">InspireEdge</span>
 */}      <ul className="flex gap-8 text-[#222] robbot text-sm">
        <li className="hover:text-[#0057FF] cursor-pointer transition-colors">Home</li>
        <li className="hover:text-[#0057FF] cursor-pointer transition-colors">About</li>
        <li className="hover:text-[#0057FF] cursor-pointer transition-colors">Join Us</li>
        <li className="hover:text-[#0057FF] cursor-pointer transition-colors"></li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#7ec6e9] text-white px-5 flex items-center justify-center h-10 rounded hover:bg-[#0057FF] transition"
      >
        Contact Us
      </motion.button>
    </nav>
    <div className="mt-6 mb-6">
      <span className="bg-[#bfe6fa] text-[#222]  px-4 py-2 rounded-full text-xs robbot">Limited Time: First 100 users get 40% off premium features</span>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-[#7ec6e9] robbot mb-4">InspiredEdge AI</h1>
    <h2 className="text-lg font-semibold robbot mb-2">Join the Waitlist for Early Access</h2>
    <p className="text-[#515151] text-center max-w-xl robbot mb-4">Transform your business today with the world's first AI-powered execution engine for SMEs that delivers results, not just advice.</p>
  </motion.header>
);

export default HeroSection; 