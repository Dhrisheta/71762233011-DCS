// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Custom Styled Search Bar as Top Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm px-8 py-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 bg-white border border-gray-300 rounded-full px-6 py-3 shadow-md">
          <img src="https://www.figma.com/design/gfIDOl1XSYWVE0Op1iFACJ/LetsGala-UI-UX?node-id=247-577&t=Zem5R1YOfFNn7Mut-4" alt="Logo" className="w-10 h-10 rounded-full" />
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">All Vendors</Link>
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">Weddings</Link>
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">Birthdays</Link>
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">Baby Showers</Link>
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">Corporate Events</Link>
          <Link to="#" className="text-sm text-gray-600 hover:text-orange-500">Become A Member</Link>
          <input
            type="text"
            placeholder="Search vendors, venues, themes..."
            className="flex-grow focus:outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
          />
          <button className="p-2 rounded-full border"><span role="img" aria-label="love">❤️</span></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-8 py-20 text-center">
        {/* Background Wave */}
        <div className="absolute top-0 left-0 right-0 z-0 h-full overflow-hidden">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320">
            <path fill="#f97316" fillOpacity="0.1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,165.3C672,149,768,139,864,160C960,181,1056,235,1152,218.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L0,0Z" />
          </svg>
        </div>

        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

          {/* Custom Shape Images */}
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            <img src="https://i.pinimg.com/736x/b9/b7/f0/b9b7f04b82b01ed616d579138482ce1c.jpg" className="rounded-[40%] w-32 h-32 object-cover shadow-md" alt="Party" />
            <img src="https://i.pinimg.com/736x/83/df/1d/83df1d516c0fba80261c19350c2e5a5a.jpg" className="clip-star w-32 h-32 object-cover shadow-md" alt="Decor" />
            <img src="https://i.pinimg.com/736x/a7/68/76/a768767aa1225659cd111547a87bfb39.jpg" className="rounded-full w-32 h-32 object-cover shadow-md" alt="Table" />
            <img src="https://i.pinimg.com/736x/5c/94/9b/5c949b088b6e1bca614214461cc0942c.jpg" className="clip-flower w-32 h-32 object-cover shadow-md" alt="Lights" />
          </div>

          <h2 className="text-5xl font-bold mb-4">
            Plan Your <br />
            <span className="text-orange-500">Perfect Event</span> <br />
            with LetsGala
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Connecting you with the best venues, caterers, and entertainers
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all">
            START PLANNING
          </button>
        </motion.div>
      </section>

      {/* Booking Section */}
      <motion.section
        className="text-center px-8 py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <h3 className="text-lg text-gray-500">EXPLORE OUR</h3>
        <h2 className="text-3xl font-bold mb-12">FAST BOOKING VENUES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div>
            <img src="https://i.pinimg.com/736x/2f/e0/8b/2fe08bcdfba2e231b2084914f996869e.jpg" className="rounded-[30%] w-32 h-32 object-cover mb-2" alt="Wedding" />
            <p>Wedding Venues</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/bc/c3/79/bcc37921617c5aeb5baec279ba01c218.jpg" className="rounded-[30%] w-32 h-32 object-cover mb-2" alt="Birthday" />
            <p>Birthday Venues</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/ee/56/ee/ee56ee96701ab8fe832d5334b2b6d782.jpg" className="rounded-[30%] w-32 h-32 object-cover mb-2" alt="Baby Shower" />
            <p>Baby Shower Venues</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/59/32/8f/59328f7c5730c7d8f4cb282392f71e9a.jpg" className="rounded-[30%] w-32 h-32 object-cover mb-2" alt="Corporate" />
            <p>Corporate Venues</p>
          </div>
        </div>
      </motion.section>

      {/* Custom Clip Styles */}
      <style>{`
        .clip-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
        .clip-flower {
          clip-path: polygon(
            50% 0%, 61% 10%, 75% 5%, 85% 15%, 90% 29%, 100% 40%,
            85% 50%, 90% 70%, 75% 80%, 60% 75%, 50% 100%, 40% 75%,
            25% 80%, 10% 70%, 15% 50%, 0% 40%, 15% 29%, 20% 15%,
            35% 5%, 49% 10%
          );
        }
      `}</style>
    </div>
  );
}