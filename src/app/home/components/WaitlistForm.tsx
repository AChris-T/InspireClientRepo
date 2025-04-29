'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
}

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    const googleSheetURL =
      'https://script.google.com/macros/s/AKfycbyDr9cyFxNxeGckVbdxAXfc69VyF-OkIdbgl9oL5eYmZZorFznaiyKz6q1HU-beFtuw/exec';

    setIsSubmitting(true);

    try {
      await fetch(googleSheetURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      alert("Application submitted! We've received your information and will contact you shortly.");

      // Reset form
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="flex justify-center items-center py-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-md flex flex-col gap-4"
      >
        <h3 className="text-center font-semibold text-lg mb-2 robbot">
          Be the first to experience InspiredEdge
        </h3>

        <div>
          <label className="block text-sm mb-1 robbot">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#7ec6e9] transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 robbot">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#7ec6e9] transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 robbot">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#7ec6e9] transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 robbot">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#7ec6e9] transition-colors duration-300"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#7ec6e9] text-white py-2 rounded mt-2 hover:bg-[#0057FF] transition-transform duration-200 hover:scale-105"
        >
          {isSubmitting ? 'Submitting...' : 'Join the waitlist'}
        </button>
      </form>
    </motion.section>
  );
};

export default WaitlistForm;
