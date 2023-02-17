
import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
            "city": "Jaipur", 
            "lat": "26.9167", 
            "lng": "75.8667", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Rājasthān", 
            "capital": "admin", 
            "population": "3073350", 
            "population_proper": "3073350"
          },
          current:'',
          daily:''
    })

    
    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}