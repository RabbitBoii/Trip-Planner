import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { toast } from 'sonner';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/Options';
import React, { useEffect, useState } from 'react'
import Autocomplete from "react-google-autocomplete"
import { aiTrip } from '@/service/AIModel';
// import { chatResponse } from '@/service/AIModel';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { assets } from '@/assets/assets';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/FirebaseConfig';
import { useNavigate } from 'react-router-dom';



function CreateTrip() {

    const [place, setPlace] = useState()
    const [openDialog, setOpenDialog] = useState(false)
    const [formData, setFormData] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    };

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const login = useGoogleLogin({
        onSuccess: (codeResp) => getUser(codeResp),
        onError: (error) => console.log(error)
    })

    const OnGenerateTrip = async () => {

        const user = localStorage.getItem("user")

        if (!user) {
            setOpenDialog(true)
            return
        }


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
        setLoading(true)
        const FINAL_PROMPT = AI_PROMPT
            // .replace("{location}", formData?.location?.formatted_address)
            .replace("{location}", formData?.location)
            .replace("{budget}", formData?.budget)
            .replace("{totalDays}", formData?.noOfDays)
            .replace("{traveller}", formData?.traveller)
            .replace("{totalDays}", formData?.noOfDays)
        console.log(FINAL_PROMPT)

        const rawresult = await aiTrip(FINAL_PROMPT)
        const result = rawresult.replace(/```json|```/g, '').trim()
        console.log(result)
        setLoading(false)
        saveTrip(result)
    }

    const saveTrip = async (tripData) => {

        setLoading(true)
        const user = JSON.parse(localStorage.getItem("user"))
        const docId = Date.now().toString()


        await setDoc(doc(db, "UserTrips", docId), {
            id: docId,
            userEmail: user?.email,
            userSelection: formData,
            deets: JSON.parse(tripData)
        })
        setLoading(false)
        navigate('/view-trip/' + docId)
    }


    const getUser = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((res) => {
            console.log(res)
            localStorage.setItem("user", JSON.stringify(res.data))
            setOpenDialog(false)
            OnGenerateTrip()
        })
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
                        onPlaceSelected={place => {
                            setPlace(place);
                            handleInputChange('location', place?.formatted_address)
                        }}
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
                <Button disabled={loading} onClick={OnGenerateTrip}> {loading ? <img src={assets.loading} className='h-6 w-6 animate-spin' alt="loading" /> : "Generate Trip"}</Button>
            </div>

            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <img src='/logo.svg' alt="logo" />
                            <h2 className='font-bold text-lg mt-6 mb-3'>Sign in with Google</h2>
                            <p>Sign in to app with google authentication securely.</p>
                            <Button className='w-full mt-5 flex gap-4 items-center' onClick={login}> <img src={assets.google} className='h-6 w-6' alt="" />  Sign in with Google</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div >
    )
}

export default CreateTrip