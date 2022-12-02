import { useForm } from "../hooks/useForm"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const formValues = {
    weather : ''
}
export const WeatherForm = ({onChangeCity, setisOpen, isOpen, setIsLoading, isLoading}) => {

    
    const {city, onInputChange} = useForm(formValues)    

    const onFormSubmit = (event)=>{
        event.preventDefault();
        if (city.length <=1) return;
        onChangeCity(city)
        setisOpen(true)
    }
    
    return (
      <>
        <Button style={{backgroundColor:'#FFFFFF', marginRight:'10px'}} className="p-button-raised p-button-text p-button-plain" icon="pi pi-bars" onClick={()=>setisOpen(!isOpen)}/>
        <form  style={{display: "inline"}} onSubmit={onFormSubmit}>
          <span className="p-float-label p-input-icon-right">
          <div className="p-inputgroup">
              <InputText 
                name="city" 
                type="text" 
                id="lefticon" 
                value={city} 
                onChange={onInputChange} 
              />
              <Button  style={{backgroundColor:'#FFFFFF'}} className="p-button-outlined p-button-secondary" icon="pi pi-search"/>
            </div>
          </span>
        </form>
      </>
    )
}
