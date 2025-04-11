// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center border-2 border-orange-200"
      >
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">DHRISHETA M S</h1>
        <p className="text-lg text-gray-700 mb-2 font-semibold">Register No: <span className="text-black">71762233011</span></p>
        <p className="text-lg text-gray-700 mb-2 font-semibold">MSc Decision and Computing Sciences</p>
        <p className="text-lg text-gray-700 mb-6 font-semibold">SET C</p>

        <a 
          href="https://in.linkedin.com/in/dhrisheta-ms-3a0193260" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition duration-300"
        >
          Visit LinkedIn Profile
        </a>
      </motion.div>
    </div>
  );
}
