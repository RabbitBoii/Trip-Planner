import React, { useEffect } from 'react'
import { assets } from '@/assets/assets'
import { GetPlaceDetails } from '@/service/GlobalApi'


const API_URl = "https://places.googleapis.com/v1/{NAME}/media?key=API_KEY&PARAMETERS"
function InfoSection({ trip }) {

    useEffect(() => {
        trip && GetPlacePhoto()
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location
        }

        const result = await GetPlaceDetails(data).then(res => {
            console.log(res.data?.places[0].photos[3].name)
        })
    }


    return (
        <div>

            <img src="/unsplash_1.jpg" alt="travel" className='h-[400px] w-full object-cover rounded-xl' />

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