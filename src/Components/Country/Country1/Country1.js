import React from 'react';

const Country1 = (props) => {
    // console.log(props);
    const {name,area,population,flags} = props.country;
    return (
        <div className='container'>
            <h2>Country Name :{name.common} </h2>
            <img src={flags.png} alt="" />
            <p><small>Area :{area} </small></p>
            <p><small>Population :{population} </small></p>
        </div>
    );
};

export default Country1;