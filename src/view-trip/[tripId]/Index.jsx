import React, { useEffect, useState } from "react"
import { db } from "@/service/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToBe from "../components/PlacesToBe";
import Footer from "../components/Footer";

export default function ViewTrip() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState([])

    useEffect(() => {
        tripId && GetTripData()
    }, [tripId])

    const GetTripData = async () => {
        const docRef = doc(db, "UserTrips", tripId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document:", docSnap.data())
            setTrip(docSnap.data())
        }
        else {
            console.log("No such document found!")
            toast("No trip found!")
        }
    }

    return (
        <div className="p-10 md:px-20 lg:px-44 xl:px-56">

            {/* Info section  */}
            <InfoSection trip={trip} />

            {/* Recommended hotels */}
            <Hotels trip={trip} />

            {/* Itinerary */}
            <PlacesToBe trip={trip} />

            {/* Footer */}
            <Footer trip={trip} />

        </div>
    )
}

