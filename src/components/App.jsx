import { useEffect, useState } from 'react'
import SearchBar from "./SearchBar/SearchBar.jsx"
import { fetchPhotosByKeyword } from './fetchImages.js'






const App = () => {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] =  useState(false)


    useEffect(() => {
        async function fetchPhotos () {
            try {
                setLoader(true)
                const data = await fetchPhotosByKeyword ("dog");
                setPhotos(data)
                
            } catch (error) {
                setError(true)                
            } finally {
                setLoader(false)
            }
        }
        fetchPhotos()
    }, [])
    

const handleSubmit = (keyword) => {
    
  }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default App 
