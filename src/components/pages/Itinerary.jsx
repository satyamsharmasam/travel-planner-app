import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../Card';
import { AlertTriangle } from 'lucide-react';
import SavePdfButton from '../SaveItineraryButton';
import { useRef } from 'react';

const Itinerary = () => {
  const itineraryRef = useRef();
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.itinerary?.itinerary) {
    return (
      <div className='text-center mt-10'>
        <div className='flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-red-50 to-red-100 border border-red-300 shadow-md animate-fade-in'>
          <div className='p-2 bg-red-500 text-white rounded-full shadow-sm'>
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className='text-red-600 text-xs sm:text-sm'>
              {state.itinerary.error}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/planTrip')}
          className='mt-4 px-4 py-2 bg-[#FE9836] text-white rounded cursor-pointer text-sm sm:text-base'
        >
          Go Back
        </button>
      </div>
    );
  }

  const daysArray = state.itinerary.itinerary;

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <div ref={itineraryRef} className=' m-0 md:my-5  pb-4'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold my-4 capitalize px-4 md:px-8'>
          Your {state.destination} itinerary
        </h1>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold mb-4 capitalize px-4 md:px-8'>
          Total {state.itinerary.totalDays} Days
        </h2>

        {daysArray.map((dayPlan, index) => (
          <Card key={index} plan={dayPlan} />
        ))}

        <div className='w-full max-w-2xl mx-auto mb-8 p-6 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'>
          <h2 className='text-base sm:text-lg md:text-xl font-bold flex items-center gap-2 text-green-700 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 sm:w-6 sm:h-6 text-green-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8c-1.657 0-3 1.343-3 3h6c0-1.657-1.343-3-3-3zm0 8c1.657 0 3-1.343 3-3H9c0 1.657 1.343 3 3 3z'
              />
            </svg>
            Actual Trip Cost
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900'>
            ₹ {state.itinerary.actualBudget}
          </p>
          <p className='text-xs sm:text-sm text-gray-600 my-1'>
            Estimated total expense for your selected trip.
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Loading Save Pdf Button...</div>}>
        <SavePdfButton targetRef={itineraryRef} fileName='my_itinerary.pdf' />
      </Suspense>

      <button
        className='w-full bg-[#067d79] hover:bg-[#006865] text-white mt-5 py-3 rounded-lg font-medium transition cursor-pointer text-sm sm:text-base'
        onClick={() => navigate('/planTrip')}
      >
        Update
      </button>
    </div>
  );
};

export default Itinerary;
