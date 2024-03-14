import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement } from '../Reduxslice/counterSlice'
  
 

const Reduxcountertask = () => {
  const count =   useSelector((state)=>state.counterSliceName.value)

  const dispatch = useDispatch()
    return (
    
    <div>  <button
    aria-label="Increment value"
    onClick={() => dispatch(increment())}
  >
    Increment
  </button>
  <span>{count}</span>
  <button
    aria-label="Decrement value"
    onClick={() => dispatch(decrement())}
  >
    Decrement
  </button></div>
  )
}


export default Reduxcountertask