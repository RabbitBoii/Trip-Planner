import React from 'react'
import { Link } from 'react-router-dom'

function PlaceCard({ place }) {
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" + place?.place_name} target='_blank'>
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md'>
                <img src='/unsplash_1.jpg' className='w-[130px] h-[130px] rounded-xl' alt='place-img' />
                <div className=''>
                    <h2 className='font-bold text-lg'>{place?.place_name}</h2>
                    <p className='text-sm text-gray-500'>{place?.place_details}</p>
                    <h2 className='mt-2'>🕓 {place.time_to_travel}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard