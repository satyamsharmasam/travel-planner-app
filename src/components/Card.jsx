import {
  Sun,
  CloudRain,
  Cloud,
  CloudSnow,
  MapPin,
  Utensils,
  Lightbulb,
  BedDouble,
  Bus,
  Thermometer,
} from 'lucide-react';

// Reusable Card Wrapper
const Box = ({ children, className }) => (
  <div
    className={`rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const BoxHeader = ({ children, className }) => (
  <div
    className={`px-4 py-3 border-b bg-gray-50 flex items-center justify-between ${className}`}
  >
    {children}
  </div>
);

const BoxTitle = ({ children, className }) => (
  <h2
    className={`text-base sm:text-lg font-bold w-1/2 card-title  ${className}`}
  >
    {children}
  </h2>
);

const BoxContent = ({ children, className }) => (
  <div className={`p-4 space-y-5 ${className}`}>{children}</div>
);

// Main Card
const Card = ({ plan }) => {
  if (!plan) return null;

  if (plan.error) {
    return (
      <div className='w-full max-w-2xl mx-auto mb-8 p-6 rounded-2xl shadow-md border border-red-300 bg-red-50 text-red-700'>
        <h2 className='text-base sm:text-lg font-bold mb-2'>
          ⚠️ Trip Not Possible
        </h2>
        <p className='text-sm sm:text-base'>{plan.error}</p>
      </div>
    );
  }

  // Weather icon logic
  const getWeatherIcon = (weather) => {
    if (!weather) return null;

    if (weather.includes('rain')) {
      weather.toLowerCase();
      return <Cloud className='w-2 h-2 sm:w-5 sm:h-3 text-gray-500' />;
    }

    switch (weather.toLowerCase()) {
      case 'sunny':
        return <Sun className='w-3 h-3 sm:w-5 sm:h-3 text-yellow-500' />;
      case 'rainy':
        return <CloudRain className='w-3 h-3 sm:w-5 sm:h-3 text-blue-500' />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className='w-3 h-3 sm:w-5 sm:h-3 text-gray-500' />;
      case 'snow':
        return <CloudSnow className='w-3 h-3 sm:w-5 sm:h-3 text-sky-400' />;
      default:
        return <Sun className='w-3 h-3 sm:w-5 sm:h-3 text-yellow-400' />;
    }
  };

  return (
    <Box className='w-full max-w-2xl mx-auto mb-8 overflow-hidden'>
      {/* Day + Date */}
      <BoxHeader>
        <BoxTitle className='text-sm sm:text-base md:text-lg'>
          Day {plan.day}
        </BoxTitle>
        <p className='font-bold text-xs sm:text-sm md:text-base'>{plan.date}</p>
      </BoxHeader>

      <BoxContent>
        {/* ✅ Weather */}
        {plan.weather && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <Thermometer className='w-4 h-4 sm:w-5 sm:h-5 text-red-600' />
                Weather
              </BoxTitle>
            </BoxHeader>
            <BoxContent className='flex items-center gap-2 w-full text-xs sm:text-sm font-medium'>
              {getWeatherIcon(plan.weather)} {plan.weather}
            </BoxContent>
          </Box>
        )}

        {/* Attractions */}
        {plan.attractions?.length > 0 && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <MapPin className='w-4 h-4 text-red-500 flex-shrink-0' />
                Attractions
              </BoxTitle>
            </BoxHeader>
            <BoxContent>
              <ul className='space-y-2 text-gray-700'>
                {plan.attractions.map((a, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 text-xs sm:text-sm font-medium'
                  >
                    <MapPin className='w-3 h-3 text-red-400 flex-shrink-0' />
                    {a.place}{' '}
                    <span className='text-gray-500 text-[10px] sm:text-xs'>
                      ({a.time})
                    </span>
                  </li>
                ))}
              </ul>
            </BoxContent>
          </Box>
        )}

        {/* Food Places */}
        {plan.foodPlaces?.length > 0 && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <Utensils className='w-4 h-4 sm:w-5 sm:h-5 text-green-600' />{' '}
                Food Places
              </BoxTitle>
            </BoxHeader>
            <BoxContent>
              <ul className='list-disc list-inside text-gray-700 space-y-1 text-xs sm:text-sm font-medium'>
                {plan.foodPlaces.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </BoxContent>
          </Box>
        )}

        {/* Stay */}
        {plan.stay && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <BedDouble className='w-4 h-4 sm:w-5 sm:h-5 text-purple-600' />{' '}
                Stay
              </BoxTitle>
            </BoxHeader>
            <BoxContent>
              <p className='text-gray-700 text-xs sm:text-sm  font-medium'>
                {plan.stay}
              </p>
            </BoxContent>
          </Box>
        )}

        {/* Transport */}
        {plan.transport && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <Bus className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' />{' '}
                Transport
              </BoxTitle>
            </BoxHeader>
            <BoxContent>
              <p className='text-gray-700 text-xs sm:text-sm font-medium'>
                {plan.transport}
              </p>
            </BoxContent>
          </Box>
        )}

        {/* Tips */}
        {plan.tips?.length > 0 && (
          <Box>
            <BoxHeader>
              <BoxTitle className='flex items-center gap-2 text-sm sm:text-base'>
                <Lightbulb className='w-4 h-4 sm:w-5 sm:h-5 text-yellow-600' />{' '}
                Tips
              </BoxTitle>
            </BoxHeader>
            <BoxContent>
              <ul className='list-disc list-inside text-gray-700 space-y-1 text-xs sm:text-sm font-medium'>
                {plan.tips.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </BoxContent>
          </Box>
        )}
      </BoxContent>
    </Box>
  );
};

export default Card;
