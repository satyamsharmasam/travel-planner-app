import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

const content = [
  {
    title: 'Bali',
    description: `Bali, Indonesia is called the “Island of the Gods.”
It is famous for beaches, rice terraces, and temples.
Spiritual retreats and yoga attract visitors worldwide.
It’s a blend of culture, adventure, and natural beauty.`,
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <img
          src='/images/visit1.jpg'
          width={400}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Dubai',
    description: `Dubai is a modern city in the United Arab Emirates.
It is known for the Burj Khalifa and Palm Jumeirah.
Luxury malls, desert safaris, and beaches are highlights.
The city mixes Arabian culture with futuristic lifestyle`,
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        <img
          src='/images/visit2.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Maldives',
    description: `The Maldives is a tropical paradise in the Indian Ocean.
It has overwater villas, white sand beaches, and coral reefs.
Snorkeling, diving, and water sports are top activities.
It’s a world-famous honeymoon and luxury destination`,
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <img
          src='/images/visit3.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Bangkok',
    description: `Bangkok is the capital city of Thailand.
It is famous for temples, street food, and floating markets.
The city offers vibrant nightlife and shopping malls.
It blends Thai culture with modern skyscrapers`,
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <img
          src='/images/visit4.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Venice',
    description: ` Venice is a unique city in northeastern Italy.
It is built on canals with gondolas instead of roads.
Famous sites include St. Mark’s Square and Rialto Bridge.
It’s a top romantic and cultural destination in Europe.`,
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        <img
          src='/images/visit5.jpg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='my-10 text-center text-5xl px-2 w-full h-[calc(100dvh-50px)] flex items-center justify-center '>
        <h2 className=' text-5xl font-semibold'>
          Dream destinations, just a{' '}
          <Link
            to={'/plantrip'}
            className='text-[#ff9225] animate-pulse  inline-block'
          >
            click
          </Link>{' '}
          away
        </h2>
      </div>
      <div className='w-full '>
        <StickyScroll content={content} />
      </div>
    </>
  );
};

export default Home;
