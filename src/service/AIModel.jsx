export async function aiTrip(prompt) {

  const userprompt = prompt;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `Generate Travel Plan for Location: Rishikesh, for 3 days for a group of 5 friends with a cheap budget. Give me hotel options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, time to travel each location for 3 days with each day plan with best time to visit in JSON format`,
                },
              ],
            },
            {
              role: 'model',
              parts: [
                {
                  text: `**Developing Rishikesh Itinerary**
            
              I've begun solidifying the Rishikesh travel plan, focusing on a budget-friendly itinerary for five friends. My primary task is compiling a JSON list of affordable hotel options, ensuring each entry includes the hotel name, address, and price, keeping the budget constraint in mind.
            
            
              **Compiling Data & Structure**
            
              I've expanded my focus from just hotel options. Now, I'm diving deep into crafting a 3-day itinerary, coupled with those hotel choices. This involves meticulous research to build the JSON structures, specifically for the hotel list and the itinerary. My approach is to scrape relevant data points like geo-coordinates, images, and descriptions for each place and hotel. I'm prioritizing user-friendliness and ensuring data accuracy within the JSON format.
            
            
              **Structuring Hotel & Plan Details**
            
              Now, I'm focusing on the JSON structure for clarity and organization. I'm prioritizing data accuracy and accessibility for hotel and itinerary details. My current task involves researching and cross-checking the feasibility of various Rishikesh attractions, particularly those on a budget. I'm also ensuring the budget is maintained for all of the travel itinerary. This involves verifying prices and looking for free options as needed.
            
            
              **Mapping Out the Rishikesh Journey**
            
              I'm now focusing on creating a structured search plan. I've broken the task into manageable parts, starting with budget hotel searches and moving on to attractions. Finding accurate and current image URLs and precise real-time pricing for the "cheap budget" is the primary challenge. I plan to use representative data and cross-check multiple sources to ensure accuracy. The JSON format structure is in place, and I am working to make sure all data points fit neatly.
            
            
              **Exploring Budget Stays**
            
              I've scoped out several budget-friendly hostel options in Rishikesh, suitable for a group of five. Addresses, ratings, and price estimates (per night, often per bed in dorms) are readily available. This will allow for simple calculations for total accommodation costs.
            
            
              **Analyzing Hotel Details**
            
              I've gathered geo-coordinates and image URLs for the shortlisted hostels, but direct image links aren't always available. Instead, I'll provide listing page URLs or generic image search links. Price details are now a range or per-person dorm bed price, clearly indicating budget-friendliness for easy comparison. I've chosen Zostel Rishikesh and goSTOPS Rishikesh as the initial focus due to consistent budget-friendly ratings for groups.
            
            
              **Focusing on Image Availability**
            
              I've successfully identified Zostel Rishikesh, goSTOPS Rishikesh, Shiv Shakti Hostel, and The Hosteller Rishikesh as primary hostel options, gathering their addresses and ratings.  While direct image links remain scarce, I plan to provide representative booking page URLs or generic image search links. I'll include price ranges or dormitory bed prices for budget clarity and accurate group calculations. Geo-coordinates will be sourced specifically or by area (Laxman Jhula), facilitating efficient itinerary planning. Next steps involve refining the pricing details before moving to the itinerary phase!
            
            
              `,
                },
                {
                  text: `
              {
                  "hotel_options": [
                    {
                      "name": "Zostel Rishikesh (Laxman Jhula)",
                      "address": "Plot No.1, near post office, Laxman Jhula, Rishikesh, Uttarakhand, 249302",
                      "price_range_per_night": "INR 500 - 1000 per person for dorms, private rooms will be higher (approx. INR 2500-4000 for a room for 4-5 people, highly variable)",
                      "hotel_image_url": "https://www.zostel.com/hostels/rishikesh-laxman-jhula/",
                      "geo_coordinates": {
                        "latitude": 30.104084,
                        "longitude": 78.318288
                      },
                      "rating": "7.8/10 (Good) - 9.4/10 (Superb) based on various platforms",
                      "description": "Located in the backpacking hub of Rishikesh, a 5-minute walk from Laxman Jhula, offering spectacular views of the Ganga. Features dedicated workstations, common areas for yoga, a rooftop, and a garden cafe. Ideal for meeting fellow travelers. [5, 14, 16]"
                    },
                    {
                      "name": "goSTOPS Rishikesh, Lakshaman Jhula",
                      "address": "Lakshman Jhula, Behind Uttarakhand Gramin Bank, Block Yamkeshwar P.O, P.S Laxman Jhula, Village Jonk, District - Pauri Harhwal, PIN- 249302",
                      "price_range_per_night": "INR 400 - 900 per person for dorms, private rooms higher (approx. INR 2000-3500 for a room for 4-5 people, highly variable)",
                      "hotel_image_url": "https://www.agoda.com/gostops-rishikesh-lakshaman-jhula/hotel/rishikesh-in.html",
                      "geo_coordinates": {
                        "latitude": 30.104278,
                        "longitude": 78.317926
                      },
                      "rating": "7.6/10 (Good) - 7.9/10 (Very good) based on various platforms",
                      "description": "A delightful hostel nestled amidst the serene surroundings of the Lakshman Jhula area, offering a blend of comfort and affordability. Praised for its cleanliness, friendly staff, and breathtaking views of the Ganga and mountains from the rooftop. Offers common areas, games, and a cafe. [18, 28, 30, 31]"
                    },
                    {
                      "name": "Shiv Shakti Hostel",
                      "address": "Near Sant Seva Ashram Opp. Sood & Sood Travel Agency, Laxman Jhula, Rishikesh, Uttarakhand, 249302",
                      "price_range_per_night": "INR 150 - 400 per person for dorms, private rooms available at a higher cost (approx. INR 1000-2000)",
                      "hotel_image_url": "https://www.agoda.com/shiv-shakti-hostel/hotel/rishikesh-in.html",
                      "geo_coordinates": {
                        "latitude": 30.1097,
                        "longitude": 78.3243
                      },
                      "rating": "7.2/10 (Very good) - 7.8/10 (Good) based on various platforms",
                      "description": "A tranquil and highly affordable hostel close to Laxman Jhula with river views. Known for its clean and spacious dorms, helpful staff, and community feel. Offers basic amenities suitable for budget travelers. [4, 15, 20, 27, 29]"
                    },
                    {
                      "name": "The Hosteller Rishikesh, Upper Tapovan",
                      "address": "Tapovan, Rishikesh, Uttarakhand, 249192",
                      "price_range_per_night": "INR 500 - 1200 per person for dorms, private rooms will be higher (approx. INR 2500-4500 for a room for 4-5 people, highly variable)",
                      "hotel_image_url": "https://www.agoda.com/the-hosteller-rishikesh-upper-tapovan/hotel/rishikesh-in.html",
                      "geo_coordinates": {
                        "latitude": 30.1172,
                        "longitude": 78.3129
                      },
                      "rating": "8.3/10 (Excellent) - 9.2/10 (Exceptional) based on various platforms",
                      "description": "A vibrant and highly-rated hostel known for its cleanliness, great staff, and excellent location in Tapovan. Offers a social atmosphere, suitable for groups, with various room types including dorms and private rooms. [4, 13, 23, 32]"
                    }
                  ],
                  "itinerary": {
                    "best_time_to_visit_rishikesh": "October to March offers pleasant weather for sightseeing and adventure activities. Avoid monsoon (July-September) due to heavy rains and summer (April-June) due to extreme heat.",
                    "days": [
                      {
                        "day": 1,
                        "theme": "Spiritual Exploration & Ganga Aarti",
                        "plan": [
                          {
                            "place_name": "Lakshman Jhula & Ram Jhula",
                            "place_details": "Two iconic suspension bridges offering panoramic views of the Ganges and surrounding temples. Explore the shops and cafes around them. Lakshman Jhula is more popular for cafes and spiritual ashrams, while Ram Jhula connects Parmarth Niketan. [14, 16, 30]",
                            "place_image_url": "https://example.com/lakshman_ram_jhula.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1098,
                              "longitude": 78.3197
                            },
                            "ticket_pricing": "Free",
                            "time_to_travel": "2-3 hours (including walking around and crossing both bridges)",
                            "best_time_to_visit": "Morning (for less crowd) or late afternoon (to catch sunset views)."
                          },
                          {
                            "place_name": "Parmarth Niketan Ashram",
                            "place_details": "One of the largest ashrams in Rishikesh, famous for its serene atmosphere, yoga, and meditation sessions. It hosts the famous Ganga Aarti on its ghats every evening. [32]",
                            "place_image_url": "https://example.com/parmarth_niketan.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1264,
                              "longitude": 78.3242
                            },
                            "ticket_pricing": "Free (donations accepted)",
                            "time_to_travel": "1-2 hours (for exploring)",
                            "best_time_to_visit": "Late afternoon to secure a good spot for Ganga Aarti."
                          },
                          {
                            "place_name": "Ganga Aarti at Parmarth Niketan / Triveni Ghat",
                            "place_details": "A mesmerizing Hindu ritual of worship with lamps, chanting, and devotional songs performed on the banks of the Ganges River. Parmarth Niketan's aarti is grander, while Triveni Ghat's is also significant. [23]",
                            "place_image_url": "https://example.com/ganga_aarti.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1264,
                              "longitude": 78.3242
                            },
                            "ticket_pricing": "Free",
                            "time_to_travel": "1-1.5 hours",
                            "best_time_to_visit": "Starts around sunset (usually between 6 PM - 7 PM depending on the season). Arrive 30-45 mins early for a good spot."
                          }
                        ]
                      },
                      {
                        "day": 2,
                        "theme": "Adventure & Nature",
                        "plan": [
                          {
                            "place_name": "River Rafting in Ganges",
                            "place_details": "Experience the thrill of white-water rafting on the Ganges River. Various stretches are available, from short to long, suitable for different thrill levels. (Shivpuri to Rishikesh is a popular stretch). [5]",
                            "place_image_url": "https://example.com/river_rafting.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1062,
                              "longitude": 78.3188
                            },
                            "ticket_pricing": "INR 600 - 1500 per person (depending on the stretch and season, may include transport)",
                            "time_to_travel": "3-4 hours (including travel to starting point and changing)",
                            "best_time_to_visit": "Morning (9 AM - 12 PM) for optimal river conditions and less heat."
                          },
                          {
                            "place_name": "Neer Garh Waterfall (Neer Gadu Waterfall)",
                            "place_details": "A beautiful natural waterfall accessible via a short trek. Perfect for a refreshing dip and enjoying nature. There are small cafes along the way. [34, 36, 37, 38]",
                            "place_image_url": "https://example.com/neergarh_waterfall.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1477,
                              "longitude": 78.3308
                            },
                            "ticket_pricing": "INR 30-50 per person (small entry fee)",
                            "time_to_travel": "2-3 hours (including trek and leisure time)",
                            "best_time_to_visit": "Late morning to early afternoon (11 AM - 3 PM) to enjoy the water and light."
                          },
                          {
                            "place_name": "Beatles Ashram (Chaurasi Kutia)",
                            "place_details": "Once the spiritual retreat of The Beatles, this abandoned ashram is now a unique, serene place for meditation and graffiti art. [14]",
                            "place_image_url": "https://example.com/beatles_ashram.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1259,
                              "longitude": 78.3364
                            },
                            "ticket_pricing": "INR 150 for Indians, INR 600 for foreigners",
                            "time_to_travel": "1.5-2 hours",
                            "best_time_to_visit": "Afternoon (3 PM - 5 PM) for good light and cooler temperatures."
                          }
                        ]
                      },
                      {
                        "day": 3,
                        "theme": "Yoga, Wellness & Local Culture",
                        "plan": [
                          {
                            "place_name": "Morning Yoga Session / Meditation (at Ashram or Hostel)",
                            "place_details": "Rishikesh is the 'Yoga Capital of the World'. Many ashrams and hostels offer morning yoga and meditation classes, suitable for beginners.",
                            "place_image_url": "https://example.com/yoga_session.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1037,
                              "longitude": 78.3175
                            },
                            "ticket_pricing": "Free (at some hostels) to INR 200-500 per person (for dedicated classes)",
                            "time_to_travel": "1-1.5 hours",
                            "best_time_to_visit": "Early morning (6 AM - 8 AM) for a peaceful start."
                          },
                          {
                            "place_name": "Vashistha Gufa (Cave)",
                            "place_details": "A serene cave believed to be the meditation spot of Sage Vashistha. A peaceful place for introspection, located a bit outside the main town.",
                            "place_image_url": "https://example.com/vashistha_gufa.jpg",
                            "geo_coordinates": {
                              "latitude": 30.2241,
                              "longitude": 78.3090
                            },
                            "ticket_pricing": "Free",
                            "time_to_travel": "2-3 hours (including travel)",
                            "best_time_to_visit": "Morning (9 AM - 12 PM) for tranquility."
                          },
                          {
                            "place_name": "Local Market Exploration & Cafe Hopping",
                            "place_details": "Wander through the bustling local markets near Lakshman Jhula and Ram Jhula. Shop for spiritual items, handicrafts, and clothes. Explore the numerous cafes offering various cuisines and views of the Ganges. [14]",
                            "place_image_url": "https://example.com/rishikesh_market.jpg",
                            "geo_coordinates": {
                              "latitude": 30.1040,
                              "longitude": 78.3180
                            },
                            "ticket_pricing": "Varies based on purchases; food costs are reasonable",
                            "time_to_travel": "2-4 hours",
                            "best_time_to_visit": "Afternoon (2 PM - 6 PM) for lively market experience and evening cafe ambiance."
                          },
                          {
                            "place_name": "Triveni Ghat (Optional evening visit for smaller Aarti)",
                            "place_details": "Another significant ghat where three holy rivers are believed to converge. You can witness a smaller, more intimate Ganga Aarti here compared to Parmarth Niketan. [32]",
                            "place_image_url": "https://example.com/triveni_ghat.jpg",
                            "geo_coordinates": {
                              "latitude": 30.0888,
                              "longitude": 78.2917
                            },
                            "ticket_pricing": "Free",
                            "time_to_travel": "1 hour",
                            "best_time_to_visit": "Sunset (around 6 PM - 7 PM)."
                          }
                        ]
                      }
                    ]
                  }
                }`,
                },
              ],
            },
            {
              role: 'user',
              parts: [{ text: userprompt }]
            },

          ],
          // contents: [
          //   {
          //     parts: [{ text: userprompt }],
          //   },
          // ],
          generationConfig: {
            temperature: 0.2,
          },
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await res.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text
    );
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate summary. Please try again later.");
  }

}




// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import { text } from "stream/consumers";

// import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY

// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_GEMINI_API_KEY });
// const model = 'gemini-2.5-flash'

// const tools = [
//   {
//     googleSearch: {
//     }
//   },
// ];

// const config = {
//   thinkingConfig: {
//     thinkingBudget: -1,
//   },
//   // responseMimeType: "application/json",
//   tools,
// };

// const contents = [
//   {
//     role: 'user',
//     parts: [
//       {
//         text: `Generate Travel Plan for Location: Rishikesh, for 3 days for a group of 5 friends with a cheap budget. Give me hotel options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, time to travel each location for 3 days with each day plan with best time to visit in JSON format`,
//       },
//     ],
//   },
//   {
//     role: 'model',
//     parts: [
//       {
//         text: `**Developing Rishikesh Itinerary**

//   I've begun solidifying the Rishikesh travel plan, focusing on a budget-friendly itinerary for five friends. My primary task is compiling a JSON list of affordable hotel options, ensuring each entry includes the hotel name, address, and price, keeping the budget constraint in mind.


//   **Compiling Data & Structure**

//   I've expanded my focus from just hotel options. Now, I'm diving deep into crafting a 3-day itinerary, coupled with those hotel choices. This involves meticulous research to build the JSON structures, specifically for the hotel list and the itinerary. My approach is to scrape relevant data points like geo-coordinates, images, and descriptions for each place and hotel. I'm prioritizing user-friendliness and ensuring data accuracy within the JSON format.


//   **Structuring Hotel & Plan Details**

//   Now, I'm focusing on the JSON structure for clarity and organization. I'm prioritizing data accuracy and accessibility for hotel and itinerary details. My current task involves researching and cross-checking the feasibility of various Rishikesh attractions, particularly those on a budget. I'm also ensuring the budget is maintained for all of the travel itinerary. This involves verifying prices and looking for free options as needed.


//   **Mapping Out the Rishikesh Journey**

//   I'm now focusing on creating a structured search plan. I've broken the task into manageable parts, starting with budget hotel searches and moving on to attractions. Finding accurate and current image URLs and precise real-time pricing for the "cheap budget" is the primary challenge. I plan to use representative data and cross-check multiple sources to ensure accuracy. The JSON format structure is in place, and I am working to make sure all data points fit neatly.


//   **Exploring Budget Stays**

//   I've scoped out several budget-friendly hostel options in Rishikesh, suitable for a group of five. Addresses, ratings, and price estimates (per night, often per bed in dorms) are readily available. This will allow for simple calculations for total accommodation costs.


//   **Analyzing Hotel Details**

//   I've gathered geo-coordinates and image URLs for the shortlisted hostels, but direct image links aren't always available. Instead, I'll provide listing page URLs or generic image search links. Price details are now a range or per-person dorm bed price, clearly indicating budget-friendliness for easy comparison. I've chosen Zostel Rishikesh and goSTOPS Rishikesh as the initial focus due to consistent budget-friendly ratings for groups.


//   **Focusing on Image Availability**

//   I've successfully identified Zostel Rishikesh, goSTOPS Rishikesh, Shiv Shakti Hostel, and The Hosteller Rishikesh as primary hostel options, gathering their addresses and ratings.  While direct image links remain scarce, I plan to provide representative booking page URLs or generic image search links. I'll include price ranges or dormitory bed prices for budget clarity and accurate group calculations. Geo-coordinates will be sourced specifically or by area (Laxman Jhula), facilitating efficient itinerary planning. Next steps involve refining the pricing details before moving to the itinerary phase!


//   `,
//       },
//       {
//         text: `\`\`\`json
//   {
//     "hotel_options": [
//       {
//         "name": "Zostel Rishikesh (Laxman Jhula)",
//         "address": "Plot No.1, near post office, Laxman Jhula, Rishikesh, Uttarakhand, 249302",
//         "price_range_per_night": "INR 500 - 1000 per person for dorms, private rooms will be higher (approx. INR 2500-4000 for a room for 4-5 people, highly variable)",
//         "hotel_image_url": "https://www.zostel.com/hostels/rishikesh-laxman-jhula/",
//         "geo_coordinates": {
//           "latitude": 30.104084,
//           "longitude": 78.318288
//         },
//         "rating": "7.8/10 (Good) - 9.4/10 (Superb) based on various platforms",
//         "description": "Located in the backpacking hub of Rishikesh, a 5-minute walk from Laxman Jhula, offering spectacular views of the Ganga. Features dedicated workstations, common areas for yoga, a rooftop, and a garden cafe. Ideal for meeting fellow travelers. [5, 14, 16]"
//       },
//       {
//         "name": "goSTOPS Rishikesh, Lakshaman Jhula",
//         "address": "Lakshman Jhula, Behind Uttarakhand Gramin Bank, Block Yamkeshwar P.O, P.S Laxman Jhula, Village Jonk, District - Pauri Harhwal, PIN- 249302",
//         "price_range_per_night": "INR 400 - 900 per person for dorms, private rooms higher (approx. INR 2000-3500 for a room for 4-5 people, highly variable)",
//         "hotel_image_url": "https://www.agoda.com/gostops-rishikesh-lakshaman-jhula/hotel/rishikesh-in.html",
//         "geo_coordinates": {
//           "latitude": 30.104278,
//           "longitude": 78.317926
//         },
//         "rating": "7.6/10 (Good) - 7.9/10 (Very good) based on various platforms",
//         "description": "A delightful hostel nestled amidst the serene surroundings of the Lakshman Jhula area, offering a blend of comfort and affordability. Praised for its cleanliness, friendly staff, and breathtaking views of the Ganga and mountains from the rooftop. Offers common areas, games, and a cafe. [18, 28, 30, 31]"
//       },
//       {
//         "name": "Shiv Shakti Hostel",
//         "address": "Near Sant Seva Ashram Opp. Sood & Sood Travel Agency, Laxman Jhula, Rishikesh, Uttarakhand, 249302",
//         "price_range_per_night": "INR 150 - 400 per person for dorms, private rooms available at a higher cost (approx. INR 1000-2000)",
//         "hotel_image_url": "https://www.agoda.com/shiv-shakti-hostel/hotel/rishikesh-in.html",
//         "geo_coordinates": {
//           "latitude": 30.1097,
//           "longitude": 78.3243
//         },
//         "rating": "7.2/10 (Very good) - 7.8/10 (Good) based on various platforms",
//         "description": "A tranquil and highly affordable hostel close to Laxman Jhula with river views. Known for its clean and spacious dorms, helpful staff, and community feel. Offers basic amenities suitable for budget travelers. [4, 15, 20, 27, 29]"
//       },
//       {
//         "name": "The Hosteller Rishikesh, Upper Tapovan",
//         "address": "Tapovan, Rishikesh, Uttarakhand, 249192",
//         "price_range_per_night": "INR 500 - 1200 per person for dorms, private rooms will be higher (approx. INR 2500-4500 for a room for 4-5 people, highly variable)",
//         "hotel_image_url": "https://www.agoda.com/the-hosteller-rishikesh-upper-tapovan/hotel/rishikesh-in.html",
//         "geo_coordinates": {
//           "latitude": 30.1172,
//           "longitude": 78.3129
//         },
//         "rating": "8.3/10 (Excellent) - 9.2/10 (Exceptional) based on various platforms",
//         "description": "A vibrant and highly-rated hostel known for its cleanliness, great staff, and excellent location in Tapovan. Offers a social atmosphere, suitable for groups, with various room types including dorms and private rooms. [4, 13, 23, 32]"
//       }
//     ],
//     "itinerary": {
//       "best_time_to_visit_rishikesh": "October to March offers pleasant weather for sightseeing and adventure activities. Avoid monsoon (July-September) due to heavy rains and summer (April-June) due to extreme heat.",
//       "days": [
//         {
//           "day": 1,
//           "theme": "Spiritual Exploration & Ganga Aarti",
//           "plan": [
//             {
//               "place_name": "Lakshman Jhula & Ram Jhula",
//               "place_details": "Two iconic suspension bridges offering panoramic views of the Ganges and surrounding temples. Explore the shops and cafes around them. Lakshman Jhula is more popular for cafes and spiritual ashrams, while Ram Jhula connects Parmarth Niketan. [14, 16, 30]",
//               "place_image_url": "https://example.com/lakshman_ram_jhula.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1098,
//                 "longitude": 78.3197
//               },
//               "ticket_pricing": "Free",
//               "time_to_travel": "2-3 hours (including walking around and crossing both bridges)",
//               "best_time_to_visit": "Morning (for less crowd) or late afternoon (to catch sunset views)."
//             },
//             {
//               "place_name": "Parmarth Niketan Ashram",
//               "place_details": "One of the largest ashrams in Rishikesh, famous for its serene atmosphere, yoga, and meditation sessions. It hosts the famous Ganga Aarti on its ghats every evening. [32]",
//               "place_image_url": "https://example.com/parmarth_niketan.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1264,
//                 "longitude": 78.3242
//               },
//               "ticket_pricing": "Free (donations accepted)",
//               "time_to_travel": "1-2 hours (for exploring)",
//               "best_time_to_visit": "Late afternoon to secure a good spot for Ganga Aarti."
//             },
//             {
//               "place_name": "Ganga Aarti at Parmarth Niketan / Triveni Ghat",
//               "place_details": "A mesmerizing Hindu ritual of worship with lamps, chanting, and devotional songs performed on the banks of the Ganges River. Parmarth Niketan's aarti is grander, while Triveni Ghat's is also significant. [23]",
//               "place_image_url": "https://example.com/ganga_aarti.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1264,
//                 "longitude": 78.3242
//               },
//               "ticket_pricing": "Free",
//               "time_to_travel": "1-1.5 hours",
//               "best_time_to_visit": "Starts around sunset (usually between 6 PM - 7 PM depending on the season). Arrive 30-45 mins early for a good spot."
//             }
//           ]
//         },
//         {
//           "day": 2,
//           "theme": "Adventure & Nature",
//           "plan": [
//             {
//               "place_name": "River Rafting in Ganges",
//               "place_details": "Experience the thrill of white-water rafting on the Ganges River. Various stretches are available, from short to long, suitable for different thrill levels. (Shivpuri to Rishikesh is a popular stretch). [5]",
//               "place_image_url": "https://example.com/river_rafting.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1062,
//                 "longitude": 78.3188
//               },
//               "ticket_pricing": "INR 600 - 1500 per person (depending on the stretch and season, may include transport)",
//               "time_to_travel": "3-4 hours (including travel to starting point and changing)",
//               "best_time_to_visit": "Morning (9 AM - 12 PM) for optimal river conditions and less heat."
//             },
//             {
//               "place_name": "Neer Garh Waterfall (Neer Gadu Waterfall)",
//               "place_details": "A beautiful natural waterfall accessible via a short trek. Perfect for a refreshing dip and enjoying nature. There are small cafes along the way. [34, 36, 37, 38]",
//               "place_image_url": "https://example.com/neergarh_waterfall.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1477,
//                 "longitude": 78.3308
//               },
//               "ticket_pricing": "INR 30-50 per person (small entry fee)",
//               "time_to_travel": "2-3 hours (including trek and leisure time)",
//               "best_time_to_visit": "Late morning to early afternoon (11 AM - 3 PM) to enjoy the water and light."
//             },
//             {
//               "place_name": "Beatles Ashram (Chaurasi Kutia)",
//               "place_details": "Once the spiritual retreat of The Beatles, this abandoned ashram is now a unique, serene place for meditation and graffiti art. [14]",
//               "place_image_url": "https://example.com/beatles_ashram.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1259,
//                 "longitude": 78.3364
//               },
//               "ticket_pricing": "INR 150 for Indians, INR 600 for foreigners",
//               "time_to_travel": "1.5-2 hours",
//               "best_time_to_visit": "Afternoon (3 PM - 5 PM) for good light and cooler temperatures."
//             }
//           ]
//         },
//         {
//           "day": 3,
//           "theme": "Yoga, Wellness & Local Culture",
//           "plan": [
//             {
//               "place_name": "Morning Yoga Session / Meditation (at Ashram or Hostel)",
//               "place_details": "Rishikesh is the 'Yoga Capital of the World'. Many ashrams and hostels offer morning yoga and meditation classes, suitable for beginners.",
//               "place_image_url": "https://example.com/yoga_session.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1037,
//                 "longitude": 78.3175
//               },
//               "ticket_pricing": "Free (at some hostels) to INR 200-500 per person (for dedicated classes)",
//               "time_to_travel": "1-1.5 hours",
//               "best_time_to_visit": "Early morning (6 AM - 8 AM) for a peaceful start."
//             },
//             {
//               "place_name": "Vashistha Gufa (Cave)",
//               "place_details": "A serene cave believed to be the meditation spot of Sage Vashistha. A peaceful place for introspection, located a bit outside the main town.",
//               "place_image_url": "https://example.com/vashistha_gufa.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.2241,
//                 "longitude": 78.3090
//               },
//               "ticket_pricing": "Free",
//               "time_to_travel": "2-3 hours (including travel)",
//               "best_time_to_visit": "Morning (9 AM - 12 PM) for tranquility."
//             },
//             {
//               "place_name": "Local Market Exploration & Cafe Hopping",
//               "place_details": "Wander through the bustling local markets near Lakshman Jhula and Ram Jhula. Shop for spiritual items, handicrafts, and clothes. Explore the numerous cafes offering various cuisines and views of the Ganges. [14]",
//               "place_image_url": "https://example.com/rishikesh_market.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.1040,
//                 "longitude": 78.3180
//               },
//               "ticket_pricing": "Varies based on purchases; food costs are reasonable",
//               "time_to_travel": "2-4 hours",
//               "best_time_to_visit": "Afternoon (2 PM - 6 PM) for lively market experience and evening cafe ambiance."
//             },
//             {
//               "place_name": "Triveni Ghat (Optional evening visit for smaller Aarti)",
//               "place_details": "Another significant ghat where three holy rivers are believed to converge. You can witness a smaller, more intimate Ganga Aarti here compared to Parmarth Niketan. [32]",
//               "place_image_url": "https://example.com/triveni_ghat.jpg",
//               "geo_coordinates": {
//                 "latitude": 30.0888,
//                 "longitude": 78.2917
//               },
//               "ticket_pricing": "Free",
//               "time_to_travel": "1 hour",
//               "best_time_to_visit": "Sunset (around 6 PM - 7 PM)."
//             }
//           ]
//         }
//       ]
//     }
//   }
//   \`\`\``,
//       },
//     ],
//   },
//   {
//     role: 'user',
//     parts: [
//       {
//         text: `INSERT_INPUT_HERE`,
//       },
//     ],
//   },
// ];

// export const chatResponse = ai.models.generateContentStream({
//   model,
//   config,
//   contents,
// });