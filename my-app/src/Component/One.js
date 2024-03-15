import React, { useContext } from 'react'
import { MyContext } from '../App';
 

const One = () => {
    const user = useContext(MyContext);

  return (
    <div>one {user}</div>
  )
}

export default One