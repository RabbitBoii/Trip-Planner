import React, { useEffect, useState } from 'react'
import { assets } from '@/assets/assets'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'


function InfoSection({ trip }) {

    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        trip && GetPlacePhoto()
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location
        }

        const result = await GetPlaceDetails(data).then(res => {
            const snap = res.data?.places[0].photos[4].name
            console.log(snap)

            const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", snap)
            console.log(PhotoUrl)
            setPhotoUrl(PhotoUrl)
        })
    }


    return (
        <div>

            <img src={photoUrl} alt="travel" className='h-[400px] w-full object-cover rounded-xl' />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>📆 {trip?.userSelection?.noOfDays} Days</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>💰 {trip?.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md lg:text-lg'>🧑‍🤝‍🧑 {trip?.userSelection?.traveller} </h2>
                    </div>
                </div>
                <button><img src={assets.send} alt="send" className='h-10 w-10' /></button>
            </div>
        </div>
    )
}

export default InfoSection  