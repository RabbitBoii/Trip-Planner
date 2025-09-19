import React from 'react'
import PlaceCard from './PlaceCard'

function PlacesToBe({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Places to Visit</h2>
            {/* <h2 className='font-bold text-lg mt-3'>{trip?.deets?.itinerary?.best_time_to_visit_delhi}</h2> */}
            <div className=''>
                {trip?.deets?.itinerary?.days?.map((item, index) => (
                    <div className='mt-5'>
                        <h2 className='font-bold text-lg'>Day {item?.day}</h2>
                        <h2 className='font-bold text-lg'>Theme: {item?.theme}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item?.plan.map((place, index) => (
                                <div className='my-3'>
                                    <h2 className='font-medium text-sm text-orange-400'>{place?.best_time_to_visit}</h2>
                                    {/* <h2>{place.place_name}</h2> */}
                                    <PlaceCard place={place} />
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default PlacesToBe





// day{ plan {best_time_to_vist, geo-coordinates, place_details, place_image_url, place_name, ticket_pricing, time_to_travel }, theme }
//    