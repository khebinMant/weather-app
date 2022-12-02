import React from 'react'
import { PlacesImageList } from './PlacesImageList'

export const WeatherMainInfo = ({weather, images}) => {

  const dateAndHour = weather?.location.localtime.split(" ")

  return (
    <div className='info-content'>
      <ul className="list-group">
        <li className="list-group-item"> 
            <span><b>Nombre: </b>  {weather?.location.name} </span>
        </li>
        <li className="list-group-item"> 
            <span><b>Pais: </b> {weather?.location.country} </span>        
        </li>
        <li className="list-group-item">
            <span><b>Fecha: </b> {dateAndHour[0]} </span>
        </li>
        <li className="list-group-item">
            <span><b>Hora: </b> {dateAndHour[1]} </span>
        </li>
        <li className="list-group-item">
          <span><b>Clima: </b> {weather?.current.condition.text} </span>
          <img 
              src={`http:${weather?.current.condition.icon}`} 
              width="50px"
              alt={weather?.current.condition.text}  
            />  
        </li>
        <li className="list-group-item">
          <span><b>Temperatura: </b>{weather?.current.temp_c}°C</span>
        </li>
        <li>
          <PlacesImageList images={images} />
        </li>
      </ul>  
    </div>
    )
}
