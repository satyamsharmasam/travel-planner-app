import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGenerateItineraryMutation } from '../../../redux/services/apiSlice';
import { GiTempleDoor } from 'react-icons/gi';
import {
  FaCalendarAlt,
  FaDollarSign,
  FaUtensils,
  FaMountain,
  FaTree,
  FaCamera,
  FaUmbrellaBeach,
  FaGlassCheers,
  FaChevronDown,
  FaMapMarkerAlt,
  FaLandmark,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TripPlannerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      destination: '',
      budget: '10000',
      fromDate: '',
      toDate: '',
      interests: [],
    },
  });

  const [generateItinerary, { isLoading, error }] =
    useGenerateItineraryMutation();
  const navigate = useNavigate();
  const destination = watch('destination');
  const fromDate = watch('fromDate');
  const toDate = watch('toDate');

  const [openIndex, setOpenIndex] = useState(null);
  const [faqs] = useState([
    {
      q: 'Can I edit my itinerary later?',
      a: 'Yes, you can always update your itinerary.',
    },
    {
      q: 'Do you book flights and hotels?',
      a: 'Currently, we provide suggestions only.',
    },
    {
      q: 'Is the platform free to use?',
      a: 'Yes, planning your trip is completely free.',
    },
    {
      q: 'Can I share my itinerary with friends?',
      a: 'Absolutely! You can share via a link.',
    },
  ]);

  const onSubmit = async (data) => {
    if (isLoading) return;

    try {
      const res = await generateItinerary(data).unwrap();
      let text = res?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) return console.error('No text found', res);
      text = text.replace(/```(json)?/g, '').trim();
      const parsed = JSON.parse(text);
      console.log(parsed);
      navigate('/itinerary', {
        state: { itinerary: parsed, destination, fromDate, toDate, error },
      });
    } catch (err) {
      console.error('Failed:', err);
    }
    reset();
  };

  return (
    <div className='w-full'>
      {/* HERO SECTION */}
      <section className='relative h-[73vh] w-full flex items-center justify-center overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0'>
          <img
            src='/images/mountains.webp'
            alt='Luxury Travel Destination'
            className='w-full h-full object-cover animate-bgDrift'
            preload='auto'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />
        </div>

        {/* Soft Glow */}
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a7a1]/25 blur-[150px] rounded-full animate-softPulse pointer-events-none'></div>

        {/* Text */}
        <div className='relative z-10 text-center px-6'>
          <h1 className='text-white text-5xl md:text-7xl font-extrabold  leading-tight animate-fadeUp'>
            Plan Your{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#06b2ae] to-[#024e4c]'>
              Perfect Trip
            </span>
          </h1>
          <p className='text-white/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-300'>
            Tell us about your dream destination and we'll create a personalized
            itinerary
          </p>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes bgDrift {
      0% { transform: scale(1.05) translateY(0); }
      50% { transform: scale(1.1) translateY(-10px); }
      100% { transform: scale(1.05) translateY(0); }
    }
    .animate-bgDrift {
      animation: bgDrift 10s ease-in-out infinite;
    }

    @keyframes softPulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.08); }
    }
    .animate-softPulse {
      animation: softPulse 8s ease-in-out infinite;
    }

    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 1.2s ease forwards;
    }
    .delay-300 {
      animation-delay: 0.3s;
    }
  `}</style>
      </section>

      {/* FORM SECTION */}
      <section
        id='trip-form'
        className='
    relative z-20
    -mt-12 md:-mt-20 lg:-mt-24
    px-4 md:px-8
    transition-all duration-500
  '
      >
        {/* your form content here */}
      </section>

      {/* Trip Form */}
      <section
        id='trip-form'
        className='max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg -mt-20 relative z-20'
      >
        <form onSubmit={handleSubmit(onSubmit)} id='form'>
          {/* Destination */}
          <div className='relative mb-6'>
            <label className='flex items-center gap-2  font-medium mb-2'>
              <FaMapMarkerAlt className='text-[#067d79]' />
              Destination
            </label>
            <input
              type='text'
              {...register('destination', { required: 'Destination required' })}
              placeholder='Type destination'
              className='w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#067d79]'
            />
            {errors.destination && (
              <p className='text-[#ff2f00] text-xs mt-1'>
                {errors.destination.message}
              </p>
            )}
          </div>

          {/* Travel Dates */}
          <div className='mb-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='flex items-center gap-2  font-medium mb-2'>
                <FaCalendarAlt className='text-[#067d79]' /> From Date
              </label>
              <input
                type='date'
                {...register('fromDate', { required: 'From date is required' })}
                className='w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#067d79]'
              />
              {errors.fromDate && (
                <p className='text-[#ff2f00] text-xs mt-1'>
                  {errors.fromDate.message}
                </p>
              )}
            </div>

            <div>
              <label className='flex items-center gap-2 font-medium mb-2'>
                <FaCalendarAlt className='text-[#067d79]' /> To Date
              </label>
              <input
                type='date'
                {...register('toDate', { required: 'To date is required' })}
                className='w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#067d79]'
              />
              {errors.toDate && (
                <p className='text-[#ff2f00] text-xs mt-1'>
                  {errors.toDate.message}
                </p>
              )}
            </div>
          </div>

          {/* Budget */}
          <div className='my-6'>
            <label className='flex items-center gap-2 font-medium text-gray-700 mb-2'>
              <FaDollarSign className='text-[#067d79]' /> Your Budget
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
                ₹
              </span>
              <input
                type='number'
                placeholder='Enter your budget'
                {...register('budget', {
                  required: 'Budget is required',
                  min: 1000,
                })}
                className='w-full border rounded-lg pl-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#067d79]'
              />
              {errors.budget && (
                <p className='text-[#ff2f00] text-xs mt-1'>
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>

          {/* Interests */}
          <div className='my-6'>
            <label className='flex items-center gap-2 text-gray-700 font-medium mb-2'>
              Interests
            </label>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4 justify-items-center'>
              {[
                { label: 'History', icon: <FaLandmark /> },
                { label: 'Food', icon: <FaUtensils /> },
                { label: 'Adventure', icon: <FaMountain /> },
                { label: 'Nature', icon: <FaTree /> },
                { label: 'Photos', icon: <FaCamera /> },
                { label: 'Beaches', icon: <FaUmbrellaBeach /> },
                { label: 'Spiritual', icon: <GiTempleDoor /> },
                { label: 'Nightlife', icon: <FaGlassCheers /> },
              ].map((interest) => (
                <label key={interest.label} className='cursor-pointer'>
                  <input
                    type='checkbox'
                    value={interest.label}
                    {...register('interests', {
                      required: 'Select at least one',
                    })}
                    className='hidden peer'
                  />
                  <div className='w-20 h-20 flex flex-col items-center justify-center gap-1 border rounded-lg text-gray-600 transition hover:bg-[#067d79]/20 peer-checked:bg-[#067d79] peer-checked:text-white'>
                    <span className='text-lg'>{interest.icon}</span>
                    <span className='text-xs'>{interest.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.interests && (
              <p className='text-[#ff2f00] text-xs mt-1'>
                {errors.interests.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-[#067d79] hover:bg-[#006865] cursor-pointer text-white mt-5 py-3 rounded-lg font-medium transition'
          >
            {isLoading ? 'Generating...' : 'Generate Itinerary ✨'}
          </button>
          {error && (
            <p className='text-[#ff2f00]'>Error generating itinerary</p>
          )}
        </form>
      </section>

      {/* FAQ Section */}
      <section className='bg-gray-100 py-12'>
        <div className='max-w-3xl mx-auto px-6'>
          <h2 className='text-2xl font-bold text-center mb-6'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map((item, i) => (
              <div
                key={i}
                className='bg-white shadow rounded-lg p-4 cursor-pointer'
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className='flex justify-between items-center'>
                  <span className='font-medium'>{item.q}</span>
                  <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                      openIndex === i
                        ? 'rotate-180 text-[#067d79]'
                        : 'rotate-0 text-gray-500'
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i
                      ? 'grid-rows-[1fr] opacity-100 mt-2'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className='overflow-hidden text-gray-600'>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripPlannerForm;
