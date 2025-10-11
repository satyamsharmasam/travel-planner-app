import { motion } from 'framer-motion';
import { Plane, Map, Calendar, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const InfiniteScrollCards = lazy(() => import('../Reviews'));

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// breathing bg style
const breathingBackground = {
  background: 'linear-gradient(180deg, #ffffff, #f0fdfa, #e6fffa)',
  backgroundSize: '400% 400%',
  animation: 'breathing 15s ease-in-out infinite',
};

// function for breathing bg
export default function AboutBreathingFull() {
  return (
    <div
      style={breathingBackground}
      className='w-full min-h-screen text-[#067d79] overflow-hidden py-24'
    >
      <style>
        {`
          @keyframes breathing {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className='relative flex items-center justify-center h-[40vh]'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='relative z-10 text-center px-4'
        >
          <h1 className='text-5xl md:text-6xl font-extrabold drop-shadow-lg '>
            About Journezy
          </h1>
          <p className='mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700'>
            Turn your travel dreams into memorable adventures. Explore, plan,
            and enjoy seamless journeys with Journezy.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us / Features */}
      <section className='py-24 px-6'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='max-w-7xl mx-auto text-center'
        >
          <h2 className='text-4xl font-bold mb-12'>
            Why Travelers Love Journezy
          </h2>
          <div className='grid md:grid-cols-4 gap-10'>
            {[
              { icon: Plane, title: 'Seamless Planning' },
              { icon: Map, title: 'Discover Destinations' },
              { icon: Wallet, title: 'Budget-Friendly Trips' },
              { icon: Calendar, title: 'Organized Itineraries' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center border border-[#067d79]/20'
              >
                <item.icon className='w-12 h-12 mx-auto text-[#067d79]' />
                <h3 className='mt-6 font-semibold text-xl text-gray-700'>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className='py-10'>
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='max-w-7xl mx-auto text-center mb-16'
        >
          <h2 className='text-4xl font-bold mb-4'>What Our Travelers Say</h2>
          <p className='max-w-2xl mx-auto text-gray-700'>
            Thousands of travelers trust Journezy. Here’s what they have to say
            about their journeys.
          </p>
        </motion.div>
        <Suspense fallback={<div>Loading reviews...</div>}>
          <InfiniteScrollCards />
        </Suspense>
      </section>

      {/* Call to Action */}
      <section className='py-5 text-center'>
        <Link
          to={'/planTrip'}
          className='inline-block px-14 py-5 bg-gradient-to-r from-[#067d79] to-[#024e4c] text-white font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300'
        >
          Start Your New Journey
        </Link>
      </section>
    </div>
  );
}
