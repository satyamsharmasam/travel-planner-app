import { useLocation, useNavigate } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import Card from '../Card';
import SavePdfButton from '../SaveItineraryButton';

const Itinerary = () => {
  // take reference of Itinerary div to make pdf
  const itineraryRef = useRef();
  // state passed from planTrip page with Itinerary data
  const { state } = useLocation();
  const navigate = useNavigate();

  // check if any error occur
  if (!state?.itinerary?.itinerary) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fdf4f4] to-[#fff] text-center px-6'>
        <div className='relative flex flex-col items-center gap-5 p-10 rounded-3xl shadow-2xl border border-red-100 bg-white/80 backdrop-blur-sm max-w-lg w-full transition-all duration-300 hover:shadow-red-200'>
          <div className='absolute inset-0 bg-red-100/40 blur-3xl rounded-3xl -z-10'></div>
          <div className='p-5 bg-red-500 text-white rounded-full shadow-md animate-pulse'>
            <AlertTriangle size={42} />
          </div>
          <h2 className='text-2xl sm:text-3xl font-bold text-red-700 tracking-wide'>
            Oops! Something Went Wrong
          </h2>
          {/* Message */}
          <p className='text-base font-semibold sm:text-lg text-gray-700 leading-relaxed max-w-md'>
            {state.itinerary.error ||
              'We couldn’t generate your travel itinerary right now. Please go back and try again.'}
          </p>
          <button
            onClick={() => navigate('/planTrip')}
            className='mt-6 px-8 py-3 bg-[#067d79] hover:bg-[#009f9a] text-white rounded-xl font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200'
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // day wise array
  const daysArray = state.itinerary.itinerary;

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <div ref={itineraryRef} className=' m-0 md:my-5  pb-4'>
        <h1 className='text-2xl sm:text-5xl md:text-5xl  my-4 capitalize px-4 md:px-8  font-extrabold'>
          Your <span className='text-[#067d79]'>{state.destination}</span>{' '}
          itinerary
        </h1>
        <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-4 capitalize px-4 md:px-8'>
          Total {state.itinerary.totalDays} Days
        </h2>

        {/* create cards day wise */}
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
          <p className='text-xs sm:text-sm text-gray-600 my-1 font-medium'>
            Estimated total expense for your selected trip.
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Loading Save Pdf Button...</div>}>
        <SavePdfButton targetRef={itineraryRef} fileName='my_itinerary.pdf' />
      </Suspense>

      <button
        className='w-full bg-[#067d79] hover:bg-[#009f9a] text-white mt-5 py-3 rounded-lg font-medium transition cursor-pointer text-sm sm:text-base'
        onClick={() => navigate('/planTrip')}
      >
        Update
      </button>
    </div>
  );
};

export default Itinerary;
