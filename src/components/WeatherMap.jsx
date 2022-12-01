import { WeatherAppPageSkeleton } from "./WeatherAppPageSkeleton";
import { WeatherMainInfo } from "./WeatherMainInfo";
import { WeatherForm } from "./WeatherForm";
import { useWeather } from "../hooks/useWeather";
import { NoPlaceFound } from "./NoPlaceFound";

export const WeatherMap = () => {

  const { weather, handleChangeCity, isLoading, setIsLoading, isOpen, setisOpen, images } = useWeather()


  return (
    <>
      <iframe
          className="map-content"
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127672.59150858277!2d${weather?.location.lon}!3d${weather?.location.lat}905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1669826666130!5m2!1ses!2sec`}
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
      ></iframe>  
      <div className="weather-content">
        <WeatherForm className="card-img-top" isLoading={isLoading} setIsLoading={setIsLoading} onChangeCity={handleChangeCity} setisOpen={setisOpen} isOpen={isOpen}/>
        {
          isLoading?
          <WeatherAppPageSkeleton />
          :
          weather ?
          <>
            {
              isOpen?
              <WeatherMainInfo weather={weather} images={images}/>
              :
              <></>
            }
          </>
          : 
          <div>
          {
            isOpen?
            <>
              <NoPlaceFound />
            </>
            :
            <></>
          }
          </div>
        }
      </div>
    </>
  );
};
