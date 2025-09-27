import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TripCardItem({ trip }) {


    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        trip && GetPlacePhoto()
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location
        }

        const result = await GetPlaceDetails(data).then(res => {
            const snap = res.data?.places[0].photos[3].name
            console.log(snap)

            const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", snap)
            console.log(PhotoUrl)
            setPhotoUrl(PhotoUrl)
        })
    }


    return (
        <Link to={"/view-trip/" + trip?.id}>
            <div className='hover:scale-105 transition-all'>
                <img src={photoUrl ? photoUrl : "/unsplash_1.jpg"} alt="" className='object-cover rounded-xl h-[225px] w-full' />
                <div className='my-3'>
                    <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
                    <h2 className='text-gray-500 text-sm'>{trip?.userSelection?.noOfDays} Day {trip?.userSelection?.traveller} trip with {trip?.userSelection?.budget} budget. </h2>
                </div>
            </div>
        </Link>
    )
}

export default TripCardItem