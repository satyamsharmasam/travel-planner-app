import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = import.meta.env.VITE_GEMINI_KEY;
// current model used
const MODEL = 'gemini-2.5-flash';

// fetch data by
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    generateItinerary: builder.mutation({
      query: ({ destination, fromDate, toDate, budget, interests }) => {
        const days =
          fromDate && toDate
            ? Math.floor(
                (new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24)
              ) + 1
            : 0;

        // prompt send to ai
        const prompt = `
You are a strict travel planner AI.
You MUST respond in **valid JSON only** without any extra text or explanation.

Inputs:
- Destination: ${destination}  
- From Date: ${fromDate}
- To Date: ${toDate}
- Total_Days: ${days}  
- Budget: ${budget}  
- Interests: ${interests}

Rules:

1. Check destination first:
   - If Destination is **not a real-world place** (country, city, state, landmark, island, etc.) → return ONLY this:
   {
     "status": "error",
     "minRequiredBudget": null,
     "error": "Destination '${destination}' is not recognized or supported. Trip cannot be planned. Enter valid Destination"
   }
   - All real countries, cities, states, islands, landmarks worldwide are valid.

2. Calculate the minimum required budget (minRequiredBudget):
   - If Destination is in India → ₹2000–₹4000/day (avg 3000).  
   - If Destination is Nepal, Thailand, Sri Lanka → ₹5000–₹8000/day (avg 6500).  
   - If Destination is Dubai, Bali, Europe, USA, Africa, Antarctica, Australia, North America, South America → ₹10000–₹15000/day (avg 12500).  
   - Formula: minRequiredBudget = Total_Days * avg_cost.  
   - Always include "minRequiredBudget" in the response.

3. STRICTLY:
   - If Budget < minRequiredBudget → return ONLY this:
   {
     "status": "error",
     "minRequiredBudget": MIN_REQUIRED_BUDGET,
     "error": "The trip cannot be planned in ₹${budget}. Minimum required budget for ${days} days in ${destination} is around ₹MIN_REQUIRED_BUDGET."
   }

   - If Budget >= minRequiredBudget → ALWAYS return a valid itinerary using this schema:
   {
     "status": "success",
     "minRequiredBudget": MIN_REQUIRED_BUDGET,
     "totalBudget": ${budget}, 
     "actualBudget": TOTAL_ACTUAL_COST,
     "totalDays": ${days},
     "itinerary": [
       {
         "day": 1,
         "date": "date/Month/year",
         "weather": "Sunny/Rainy",
         "attractions": [
           { "place": "Place Name", "time": "Morning/Evening" }
         ],
         "foodPlaces": ["Food1", "Food2"], 
         "stay": "Stay suggestion",
         "transport": "Transport suggestion",
         "dailyCost": "Cost for this day",
         "tips": ["Tip1", "Tip2"]
       }
     ]
   }

4. Important:
- Budget >= minRequiredBudget → must always generate an itinerary, no matter how high the budget is.
- Budget < minRequiredBudget → return ONLY the error response.
- Food/Stay/Transport must match budget ranges:
   - Food: ≤20k → dhabas | 20k–50k → restaurants | 50k–1L → fine dining | >1L → luxury
   - Stay: ≤20k → hostels | 20k–50k → budget hotels | 50k–1L → 2-3 star | >1L → luxury.
   - Transport: ≤20k → public | 20k–50k → taxis/trains | 50k–1L → cabs/flights | >1L → luxury cars/flights.

5. Always output ONLY JSON. No explanations.
`;

        return {
          url: `models/${MODEL}:generateContent?key=${apiKey}`,
          method: 'POST',
          body: {
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          },
        };
      },
    }),
  }),
});

export const { useGenerateItineraryMutation } = apiSlice;
