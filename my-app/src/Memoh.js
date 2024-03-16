import React, { useMemo, useState } from 'react'

const Memoh = () => {

    const [data,setData] = useState(0)
    const [count,setCount] = useState(2)

    function sum (){
        return "sum is"
    }
    useMemo(()=>{

        sum();
        console.log(sum())
    },[count])
 
  
  return (
    <div>

<h2>
    Using Use Memo
</h2>
      <button onClick={()=>setData(data + 1)}>Increment Val{data}</button>
      <button onClick={()=>setCount(count +2)}>Increment Two{count}</button>

    </div>
  )
}

export default Memoh