import axios from 'axios'

axios.defaults.baseURL = "https://api.unsplash.com/v1";

export const fetchPhotosByKeyword = async keyword => {
    const  res = await axios.get("/search/photos",{
        query: keyword,
        page: currentPage,
        per_page: 15
    })
    reutrn (res.data.results)
}