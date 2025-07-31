import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { toast } from 'sonner';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/Options';
import React, { useEffect, useState } from 'react'
import Autocomplete from "react-google-autocomplete"
import { chatResponse } from '@/service/AIModel';



function CreateTrip() {


    const [place, setPlace] = useState()
    const [formData, setFormData] = useState([])


    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    };


    useEffect(() => {
        console.log(formData);
    }, [formData])

    const OnGenerateTrip = async () => {
        if (formData?.noOfDays > 10 && !formData?.location || !formData?.budget || !formData?.traveller) {
            // console.log("Itni chutti na milni :(")
            toast("Please give me all the details to generate your trip!")
            return;
        }
        if (formData?.noOfDays > 10) {
            toast("Itni chutti na milni bro :(")
            return
        }
        // if (formData?.noOfDays > 10) {
        //     toast("Please give valid details!")
        //     return;
        // }
        const FINAL_PROMPT = AI_PROMPT
            .replace("{location}", formData?.location?.formatted_address)
            .replace("{budget}", formData?.budget)
            .replace("{totalDays}", formData?.noOfDays)
            .replace("{traveller}", formData?.traveller)
            .replace("{totalDays}", formData?.noOfDays)

        console.log(FINAL_PROMPT)

        const result = await chatResponse.sendMessage({ message: FINAL_PROMPT })
        console.log(result?.response?.text())
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-12'>
            <h2 className='font-bold justify-center flex text-4xl'>Where are we going?? 🏕️🏔️</h2>
            <p className='mt-3 text-gray-500 text-xl justify-center flex'> Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.  </p>


            <div className='mt-20 mb-10'>
                <div>
                    <h2 className='text-xl flex my-3 font-medium'>What is the destination of choice? 🌴</h2>
                    {/* <Autocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} /> */}
                    {/* <ReactGoogleAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        onPlaceSelected={handlePlaceSelected}
                        onChange={handleInputChange}
                    /> */}
                    <Autocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        // onPlaceSelected={place}
                        onPlaceSelected={place => { setPlace(place); handleInputChange('location', place) }}
                    />
                </div>
            </div>

            <div className='mb-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip? 🏕️</h2>
                    <Input placeholder={'Ex. 2 days'} type='number' onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
                </div>
            </div>

            <div className='mb-10'>
                <h2 className='text-xl my-4 font-medium'>What is Your Budget? 🤑</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectBudgetOptions.map((item, index) => (
                        <div key={index} onClick={() => handleInputChange('budget', item.title)} className={`p-4 border rounded-lg cursor-pointer hover:shadow-2xl ${formData?.budget == item.title && 'shadow-lg border-black'}`} >
                            <h2 className='text-4xl'>{item.icon}</h2>
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <h2 className='text-xl my-4 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectTravelList.map((item, index) => (
                        <div key={index} onClick={() => handleInputChange('traveller', item.people)} className={`p-4 border rounded-lg cursor-pointer hover:shadow-2xl ${formData?.traveller == item.people && 'shadow-lg border-black '}`}>
                            <h2 className='text-4xl'>{item.icon}</h2>
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-15 justify-end flex '>
                <Button onClick={OnGenerateTrip}>Generate Trip</Button>
            </div>


        </div >
    )
}

export default CreateTrip