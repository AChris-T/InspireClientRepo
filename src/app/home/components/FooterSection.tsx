"use client";
import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../../../public/image/logo.png"
import Image from 'next/image';

const FooterSection = () => (
  <motion.footer
    className="bg-[#222] text-white py-10 px-6 mt-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div className="flex flex-col gap-2 min-w-[180px]">
      <Image src={logo} alt='log' width={200}/>
        <span className="text-xs text-gray-400">Copyright © 2025 InspireEdge<br />All rights reserved</span>
        <div className="flex gap-2 mt-2">
          <a href="#" className="text-gray-400 hover:text-[#7ec6e9]">{/* social icons */}<i className="fab fa-facebook-f" /></a>
          <a href="#" className="text-gray-400 hover:text-[#7ec6e9]"> <i className="fab fa-instagram" /></a>
          <a href="#" className="text-gray-400 hover:text-[#7ec6e9]"> <i className="fab fa-twitter" /></a>
          <a href="#" className="text-gray-400 hover:text-[#7ec6e9]"> <i className="fab fa-youtube" /></a>
        </div>
      </div>
      <div className="flex flex-1 justify-between gap-8">
        <div>
          <h5 className="font-semibold mb-2 robbot">InspireEdge AI Solution</h5>
          <ul className="text-sm text-gray-300 flex flex-col gap-1">
            <li>Business Transformation</li>
            <li>SME Automation</li>
            <li>Success Stories</li>
            <li>Case Studies</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 robbot">Company</h5>
          <ul className="text-sm text-gray-300 flex flex-col gap-1">
            <li>About InspireCraft</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 robbot">Resources</h5>
          <ul className="text-sm text-gray-300 flex flex-col gap-1">
            <li>Help AI Business Blog</li>
            <li>Transformation Guide</li>
            <li>Business AI Podcast</li>
            <li>Free Resources</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 robbot">Stay up to date</h5>
          <form className="flex gap-2 mt-2">
            <input type="email" placeholder="Your email address" className="rounded px-2 py-1 text-white border-white border-1 focus:outline-none" />
            <button className="bg-[#7ec6e9] px-3 py-1 rounded text-white hover:bg-[#0057FF] transition">→</button>
          </form>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default FooterSection; 