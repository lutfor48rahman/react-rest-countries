import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';


function App() {
  return (
    <div className="App">
      {/* <LoadCountris></LoadCountris> */}
      <Country></Country>
      
    </div>
  );
}


// function LoadCountris(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   },[])
//   return (
//     <div>
//       <h2>Well come to travel many countries!!!!</h2>
//       <h4>Country : {countries.length}</h4>
//       {
//         countries.map(country => <Country name = {country.name.common} population = {country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country (props){
//   return (
//     <div className='container'>
//       <h3>Name : {props.name} </h3>
//       <h5>Population : {props.population} </h5>
//     </div>
//   )
// }

export default App;
