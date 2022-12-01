import { useEffect, useState } from "react";
import { defaultData } from "../data/defaultData";

export const useWeather = () => {

    const [weather, setWeather] = useState(defaultData)
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setisOpen] = useState(true)
    const [images, setImages] = useState([])

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather]);

    const loadInfo =  async (city='Quito')=>{
        
        setTimeout(async() => {     
            const resp = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
            if(resp.ok){
                const data = await resp.json()
                setIsLoading(false)
                setWeather(data)      
                loadImages(data.location.name)
            }
            else{
                setIsLoading(false)
            }
 
        }, 1000);
    }

    const loadImages = async (place='Ecuador')=>{
        const resp = await fetch(`${process.env.REACT_APP_PHOTO}client_id=${process.env.REACT_APP_PHOTO_KEY}&query=${place}`)
        if(resp.ok){
            const data = await resp.json()
            setIsLoading(false)
            setImages(data.results)
        }
        else{
            setIsLoading(false)
        }
    }

    const handleChangeCity = (city) =>{
        setWeather(null);
        setIsLoading(true)
        loadInfo(city)
    }

  return {
      images,
      weather,
      isLoading,
      setIsLoading,
      handleChangeCity,
      isOpen,
      setisOpen
  }

}
