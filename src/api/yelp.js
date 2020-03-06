import axios from "axios"

export default axios.create({
    baseURL:  'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 2yb0O8YsixUvWtzHUtHMlDdWRA_5PYfI9YV5XMcTCrtMiuo4NAy1r6OxFevN507na66YpSBunXuCVoyeBtme573hs04wdlXWl18L_JG2NTbqHEqhaH2G5GJCEXRWXnYx'
    }

})

// yelp.get('/search')

