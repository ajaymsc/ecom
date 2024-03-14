import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiBirdperson = () => {

    const [data, SetData] = useState(null)
    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character')
            .then((result) => {
                console.log(result.data);
                SetData(result.data);

             })


    }, [])

    return (
        <div> {data !== null &&  data?.results.map((item, index)=>{
            console.log(item);
return <div key={index}>  <div className='card '>
    <h2>{item.name}</h2>
    <div style={{width:'100%' , textAlign:'center'}}>
    <img src={item.image} alt='...'  /> </div> 
</div> </div>
        }) }</div>
    )
}

export default ApiBirdperson