import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { toast } from 'sonner';
import { SelectBudgetOptions, SelectTravelList } from '@/constants/Options';
import React, { useEffect, useState } from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete'
import Autocomplete from 'react-google-autocomplete'


function CreateTrip() {

    // const [place, setPlace] = useState();
    const [formData, setFormData] = useState([])

    const [address, setAddress] = useState('')
    const [selectedPlace, setSelectedPlace] = useState(null)


    const handlePlaceSelected = (place) => {
        setSelectedPlace(place)
    }

    const handleInputChange = (name, value) => {

        setFormData({
            ...formData,
            [name]: value
        })
    };

    useEffect(() => {
        console.log(formData);
    }, [formData])



    const OnGenerateTrip = () => {
        if (formData?.noOfDays > 10 && !formData?.budget || !formData?.traveler) {
            // console.log("Itni chutti na milni :(")
            toast("Please give me all the details to generate your trip!")
            return;
        }
        console.log(formData)
    }

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-12'>
            <h2 className='font-bold text-4xl'>Where are we going?? 🏕️</h2>
            <p className='mt-3 text-gray-500 text-xl'> Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.  </p>


            <div className='mt-20 gap-10'>
                <div>
                    <h2 className='text-xl flex my-3 font-medium'>What is the destination of choice? 🌴</h2>
                    {/* <Autocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} /> */}
                    <ReactGoogleAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        onPlaceSelected={handlePlaceSelected}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip? 🏕️</h2>
                    <Input placeholder={'Ex. 3 days'} type='number' onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
                </div>
            </div>

            <div>
                <h2 className='text-xl my-4 font-medium'>What is Your Budget? 🤑</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectBudgetOptions.map((item, index) => (
                        <div key={index} onClick={() => handleInputChange('budget', item.title)} className={`p-5 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.budget == item.title && 'shadow-lg border-black-500'}`} >
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
                        <div key={index} onClick={() => handleInputChange('traveler', item.people)} className={`p-5 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.traveler == item.people && 'shadow-lg border-black'}`}>
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