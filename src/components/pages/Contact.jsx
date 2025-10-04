'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

export default function ContactPageCenter() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex flex-col items-center justify-center px-6 md:px-12'>
      <motion.div
        variants={fadeIn(0.2)}
        initial='hidden'
        animate='show'
        className='space-y-8 text-center max-w-2xl'
      >
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
          Let’s start a <span className='text-[#067d79]'>conversation</span>
        </h1>
        <p className='text-lg text-gray-600'>
          We’d love to connect with you. Whether you have questions, feedback,
          or just want to say hi, reach out and let’s talk.
        </p>

        <div className='space-y-6'>
          {[
            {
              icon: <Mail className='w-6 h-6 text-[#067d79]' />,
              label: 'Email',
              value: 'support@journezy.com',
            },
            {
              icon: <Phone className='w-6 h-6 text-[#067d79]' />,
              label: 'Phone',
              value: '+91 12345 54321',
            },
            {
              icon: <MapPin className='w-6 h-6 text-[#067d79]' />,
              label: 'Address',
              value: 'Gurgaon, India',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn(0.3 + i * 0.1)}
              className='flex flex-col items-center gap-2 bg-white/70 backdrop-blur-lg rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all'
            >
              <div className='p-3 bg-[#067d79]/10 rounded-full'>
                {item.icon}
              </div>
              <p className='text-gray-800 font-semibold'>{item.label}</p>
              <p className='text-gray-600'>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
