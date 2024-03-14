import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsseefectApp = () => {
    const [countIncrement,setCountIncrement] = useState(0)
    const [countDecrement,setCountDecrement] = useState(0)
    const [data,setData] = useState(null)

    useEffect(()=>{
    
        console.log("jj")
        axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    console.log(response);
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    },[countDecrement])


  return (
    <div>
   
       <button onClick={()=>setCountIncrement(countIncrement + 1)}>one {countIncrement}</button>
       <button onClick={()=>setCountDecrement(countDecrement - 1)}>two {countDecrement}</button>
        {
            data != null && data?.results?.map((item)=>{
                return(
                    <>
                    <img src={item.image} ></img>
                    </>
                )
            })
        }
    </div>
  )
}

export default UsseefectApp