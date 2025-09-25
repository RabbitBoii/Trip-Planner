import React from 'react'

function MyTrips() {
    const user = JSON.parse(localStorage.getItem("user"));


    return (
        <div>
            <h2>My Trip</h2>
            {/* <div>
                <h2>{user.}</h2>
            </div> */}

        </div>
    )
}

export default MyTrips;