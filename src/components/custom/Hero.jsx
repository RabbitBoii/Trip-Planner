import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='flex flex-col items-center mx-60 gap-9'>
            <h1 className='font-extrabold text-[70px] text-center mt-20'>
                <span className='text-[#64C2DB]'>Discover Your Next Adventure with AI: </span>
                Personalized Itineraries at Your Fingertips.
            </h1>
            <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget. </p>
            <Link to={'/create-trip'}>
                <Button className='bg-[#7476ED]'>Get Started, It's Free! </Button>

            </Link>
        </div>
    )
}

export default Hero