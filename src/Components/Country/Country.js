import React, { useEffect, useState } from 'react';
import Country1 from './Country1/Country1';
import './Country.css';

const Country = () => {
    const [countries,setCountries] = useState([]);
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h2 className='heading'>Traveling awsome county!!!!</h2>
           <div className="countries-container">
           {
                countries.map(country => <Country1 country={country} key={country.cca3}></Country1>)
            }
           </div>
        </div>
    );
};

export default Country;