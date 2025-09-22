import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCard({ hotel }) {

    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        hotel && GetPlacePhoto()
    }, [hotel])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: hotel?.name
        }

        const result = await GetPlaceDetails(data).then(res => {
            const snap = res.data?.places[0].photos[1].name
            // const snap = res.data?.places[0]
            // console.log(snap)

            const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", snap)
            // console.log(PhotoUrl)
            setPhotoUrl(PhotoUrl)
        })
    }




    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" + hotel?.name + "," + hotel?.address} target='_blank' key={hotel?.name}>
            <div className='hover:scale-105 transition-all cursor-pointer border rounded-xl p-3'>
                <img src={photoUrl ? photoUrl : '/unsplash_1.jpg'} alt="hotel" className='rounded-xl h-[200px] w-full object-cover' />
                {/* <img src='/unsplash_1.jpg' alt="hotel" className='rounded-xl h-[200px] w-full object-cover' /> */}
                <div className='my-3 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel?.name}</h2>
                    <h2 className='text-md text-gray-500'>📍 {hotel?.address}</h2>
                    <h2 className='text-md'>💰 {hotel?.price_range_per_night} {hotel?.price_per_night}</h2>
                    <h2 className='text-md'>⭐ {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard