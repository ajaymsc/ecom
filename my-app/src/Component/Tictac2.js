import React, { useState } from 'react'
// import './App.css'

const Tictac2 = () => {
  const [tic, setTic] = useState(["", "", "", "", "", "", "", "", ""])
  const [tog, SetTog] = useState(false)
  const [win,SetWin] = useState(false)
  const tickBox = (i) => {
    // console.log(tic[i]);
    // console.log('tickBox',i,tic[i]);
    // console.log(tic);
    if ( tic[i] == '' ) {
      tic[i] = tog ? 'x' : 'o'
      //  setTic( tic )
      SetTog(!tog)
    }

    

    if (tic[0] === 'x' && tic[1] === 'x' && tic[2] === 'x' ||
      tic[3] === 'x' && tic[4] === 'x' && tic[5] === 'x' ||
      tic[6] === 'x' && tic[7] === 'x' && tic[8] === 'x' ||
      tic[0] === 'x' && tic[3] === 'x' && tic[6] === 'x' ||
      tic[1] === 'x' && tic[4] === 'x' && tic[7] === 'x' ||
      tic[2] === 'x' && tic[5] === 'x' && tic[8] === 'x' ||
      tic[0] === 'x' && tic[4] === 'x' && tic[8] === 'x' ||
      tic[2] === 'x' && tic[4] === 'x' && tic[6] === 'x' ||
      tic[0] === 'o' && tic[1] === 'o' && tic[2] === 'o' ||
      tic[3] === 'o' && tic[4] === 'o' && tic[5] === 'o' ||
      tic[6] === 'o' && tic[7] === 'o' && tic[8] === 'o' ||
      tic[0] === 'o' && tic[3] === 'o' && tic[6] === 'o' ||
      tic[1] === 'o' && tic[4] === 'o' && tic[7] === 'o' ||
      tic[2] === 'o' && tic[5] === 'o' && tic[8] === 'o' ||
      tic[0] === 'o' && tic[4] === 'o' && tic[8] === 'o' ||
      tic[2] === 'o' && tic[4] === 'o' && tic[6] === 'o') {
      // console.log('WINN');
      SetWin(true)

    }

  }

  return (
    <div>

      <div className='main'>
        <input className='ticItem' disabled={win} readOnly  value={tic[0]} onClick={() => tickBox(0)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[1]} onClick={() => tickBox(1)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[2]} onClick={() => tickBox(2)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[3]} onClick={() => tickBox(3)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[4]} onClick={() => tickBox(4)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[5]} onClick={() => tickBox(5)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[6]} onClick={() => tickBox(6)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[7]} onClick={() => tickBox(7)} ></input>
        <input className='ticItem' disabled={win} readOnly value={tic[8]} onClick={() => tickBox(8)} ></input>
      </div>
      <h1>
      {win ?"WON" :""}
      </h1>
    </div>
  )
}

export default Tictac2