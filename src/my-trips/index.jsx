import { db } from '@/service/FirebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TripCardItem from './components/TripCardItem'

function MyTrips() {
    const navigate = useNavigate()
    const [userTrips, setUserTrips] = useState([]);


    useEffect(() => {
        GetUserTrips()
    }, [])


    const GetUserTrips = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            navigate("/")
            return;
        }
        setUserTrips([])

        const qt = query(collection(db, "UserTrips"), where("userEmail", "==", user?.email));
        const querySnapshot = await getDocs(qt);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal => [...prevVal, doc.data()])
        });

    }


    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>
            <div>
                {userTrips.map((trip, index) => (
                    <TripCardItem trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default MyTrips;