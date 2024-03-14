import React, { useContext } from 'react'
import { DataContext } from '../App';
 

const One = () => {
    const user = useContext(DataContext);

  return (
    <div>one {user}</div>
  )
}

export default One