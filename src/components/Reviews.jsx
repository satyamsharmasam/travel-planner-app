import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    img: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Rohit Sharma',
    place: 'India',
    review:
      'I had an unforgettable journey with Journezy. From the seamless booking process to the personalized recommendations, everything was perfect. Their customer support was prompt and guided me through every step. Highly recommend for anyone looking to explore hassle-free! The suggested destinations were exactly what I wanted and the itinerary was perfectly organized.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/25.jpg',
    name: 'Sakshi Mehta',
    place: 'India',
    review:
      "Journezy made our family vacation truly memorable. They suggested unique destinations and experiences that we wouldn't have found on our own. The itinerary was detailed and easy to follow. Loved every moment of the trip thanks to their planning! Their attention to detail made our journey smooth and enjoyable.",
  },
  {
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'James Wilson',
    place: 'USA',
    review:
      'As a solo traveler, I was nervous about planning my trip, but Journezy completely changed my perspective. Their travel suggestions were spot on, and the whole process was smooth and enjoyable. Every detail was taken care of. A truly premium experience! I felt like I had a personal travel guide.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Anna Schmidt',
    place: 'Germany',
    review:
      "Journezy is the ultimate travel companion. Their team understands travelers' needs perfectly and provided an itinerary that matched my interests. The experience was stress-free and full of adventure. I felt like I had a personal travel assistant! Every day was planned perfectly with unique experiences.",
  },
];

const InfiniteScrollCards = () => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // half for animation loop
    }
  }, []);

  return (
    <div className='relative w-full overflow-hidden py-16 px-4 '>
      <div
        ref={trackRef}
        className={`flex marquee-track ${isPaused ? 'animation-paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Repeat reviews twice for smooth infinite scroll */}
        {[...reviews, ...reviews].map((review, idx) => (
          <div
            key={idx}
            className='flex-shrink-0 flex flex-col bg-gray-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl mx-4 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] min-h-[300px]'
          >
            <div className='flex items-center gap-4 mb-4'>
              <img
                src={review.img}
                alt={review.name}
                className='w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-700 object-cover'
              />
              <div>
                <h3 className='font-bold text-base sm:text-lg md:text-xl'>
                  {review.name}
                </h3>
                <p className='text-xs sm:text-sm text-gray-400'>
                  {review.place}
                </p>
              </div>
            </div>
            <p className='text-xs sm:text-sm md:text-base break-words'>
              {review.review}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${trackWidth}px);
          }
        }
        .marquee-track {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollCards;
