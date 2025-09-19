import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
                {trip?.deets?.hotel_options?.map((hotel, index) => (
                    <Link to={"https://www.google.com/maps/search/?api=1&query=" + hotel?.name + "," + hotel?.address} target='_blank' key={hotel?.name}>
                        <div className='hover:scale-105 transition-all cursor-pointer'>
                            <img src="/unsplash_1.jpg" alt="hotel" className='rounded-lg' />
                            <div className='my-3 flex flex-col gap-2'>
                                <h2 className='font-medium'>{hotel?.name}</h2>
                                <h2 className='text-md text-gray-500'>📍 {hotel?.address}</h2>
                                <h2 className='text-md'>💰 {hotel?.price_range_per_night} {hotel?.price_per_night}</h2>
                                <h2 className='text-md'>⭐ {hotel?.rating}</h2>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>


        </div >
    )
}

export default Hotels