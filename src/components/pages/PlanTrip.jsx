import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import tripVideo from '../../assets/tripV.mp4';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaLandmark,
  FaUtensils,
  FaMountain,
  FaTree,
  FaCamera,
  FaUmbrellaBeach,
  FaGlassCheers,
  FaHotel,
  FaChevronDown,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TripPlannerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      destination: '',
      days: 2,
      budget: '10000',
      interests: [],
    },
  });

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const destination = watch('destination');
  const days = watch('days');

  const filteredSuggestions = [
    'Bali',
    'Paris',
    'Dubai',
    'New York',
    'London',
    'Tokyo',
    'Bangkok',
    'Singapore',
    'Rome',
    'Sydney',
    'Maldives',
    'Venice',
    'Leh Ladakh',
    'Goa',
    'Manali',
    'Andaman Islands',
    'Shimla',
  ];

  const faqs = [
    {
      q: 'Can I edit my itinerary later?',
      a: 'Yes, you can always update your itinerary after generating it.',
    },
    {
      q: 'Do you book flights and hotels?',
      a: 'Currently, we provide suggestions only. Booking integration is coming soon.',
    },
    {
      q: 'Is the platform free to use?',
      a: 'Yes, planning your trip and exploring destinations is completely free. Premium features may be added in the future.',
    },
    {
      q: 'Can I share my itinerary with friends?',
      a: 'Absolutely! Once generated, your plan can be shared with friends and family via a simple link.',
    },
    {
      q: 'Do you provide recommendations for activities?',
      a: 'Yes, based on your interests (like food, adventure, or culture), we suggest activities and attractions for each destination.',
    },
  ];

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Check console for submitted data!');
    reset();
    navigate('/itinerary');
  };

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative h-[70vh] flex items-center justify-center text-white overflow-hidden'>
        <div className='absolute inset-0'>
          <video
            className='absolute inset-0 w-full h-dvh object-cover'
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
          >
            <source src={tripVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative z-10 text-center px-6'>
          <h1 className='text-[42px] md:text-8xl font-extrabold mb-4'>
            Plan Your Perfect Trip
          </h1>
          <p className='text-xs md:text-xl mb-6'>
            Tell us about your dream destination and we'll create a personalized
            itinerary
          </p>
        </div>
      </section>

      {/* Trip Form */}
      <section
        id='trip-form'
        className='max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg -mt-20 relative z-20'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Destination */}
          <div className='my-6 relative'>
            <label className='flex items-center gap-2 text-gray-700 font-medium mb-2'>
              <FaMapMarkerAlt className='text-[#FE9836]' />
              Destination
            </label>
            <input
              type='text'
              {...register('destination', {
                required: 'Destination is require',
              })}
              onChange={(e) => {
                setValue('destination', e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder='Where would you like to go?'
              className='w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE9836]'
            />
            {errors.destination && (
              <p className='text-[#ff2f00] text-xs mt-1'>
                {errors.destination.message}
              </p>
            )}
            {showSuggestions && destination && (
              <ul className='absolute z-10 bg-white border rounded-lg mt-1 w-full shadow-md max-h-40 overflow-y-auto'>
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setValue('destination', item);
                        setShowSuggestions(false);
                      }}
                      className='px-4 py-2 cursor-pointer hover:bg-[#FE9836]/10'
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className='px-4 py-2 text-gray-500'>No results found</li>
                )}
              </ul>
            )}
          </div>

          {/* Number of Days */}
          <div className='mb-6'>
            <label className='flex items-center gap-2 text-gray-700 font-medium mb-2'>
              <FaCalendarAlt className='text-[#FE9836]' />
              Number of Days: {days}
            </label>
            <input
              type='range'
              min='1'
              max='30'
              {...register('days')}
              className='w-full accent-[#FE9836]'
            />
            <div className='flex justify-between text-sm text-gray-500 mt-1'>
              <span>1 day</span>
              <span>30 days</span>
            </div>
          </div>

          {/* Budget */}
          <div className='my-6'>
            <label className='flex items-center gap-2 font-medium text-gray-700 mb-2'>
              <FaDollarSign className='text-[#FE9836]' /> Your Budget
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
                ₹
              </span>
              <input
                type='number'
                placeholder='Enter your budget'
                {...register('budget', { required: 'Budget is require' })}
                min={10000} // <-- minimum value
                className='w-full border rounded-lg pl-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE9836]'
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
                { label: 'Hotels', icon: <FaHotel /> },
                { label: 'Nightlife', icon: <FaGlassCheers /> },
              ].map((interest) => (
                <label key={interest.label} className='cursor-pointer'>
                  <input
                    type='checkbox'
                    value={interest.label}
                    {...register('interests', {
                      required: 'Select at least one ',
                    })}
                    className='hidden peer'
                  />
                  <div
                    className='w-20 h-20 flex flex-col items-center justify-center gap-1 
                    border rounded-lg text-gray-600 transition hover:bg-[#FE9836]/10
                    peer-checked:bg-[#FE9836] peer-checked:text-white'
                  >
                    <span className='text-lg'>{interest.icon}</span>
                    <span className='text-xs'>{interest.label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.interests && (
              <p className='text-[#ff2f00] text-xs mt-1 '>
                {errors.interests.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full bg-[#FE9836] hover:bg-[#e57d1c] text-white mt-5 py-3 rounded-lg font-medium transition'
          >
            Generate Itinerary ✨
          </button>
        </form>
      </section>

      {/* FAQ */}
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
                        ? 'rotate-180 text-[#FE9836]'
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
