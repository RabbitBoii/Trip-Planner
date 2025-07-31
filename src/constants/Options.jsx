export const SelectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveller in exploration phase',
        icon: '✈️',
        people: 'solo traveller'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travellers in tandem',
        icon: '🥂',
        people: 'couple'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A familia of adventure and fun lovers',
        icon: '🏡',
        people: 'family of 4-5 members'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '⛵',
        people: 'group of friends'
    }
]


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about it',
        icon: '💸'
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} days for a {traveller} with a {budget} budget. Give me hotel options list with hotel name, hotel address, price, hotel image url, geo coordinates, rating, description and suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, time to travel each location for {totalDays} days with each day plan with best time to visit in JSON format'