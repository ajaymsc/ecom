import React, { useState } from 'react'

const Tictac = () => {

  const [arr, SetVal] = useState(["","","","","","","","",""])
  const [isClick, SetClicked] = useState(true)
  const [win, SetWin] = useState(false)

  const onCLickButton = (e) => {

    let b = e.target.value;
    let id = e.target.id;

    // console.log('click==', b === '', id);
    if (b === '') {
      let a;
      let arr1 = {...arr}
      a = isClick ? 'x' : 'o'
      e.target.value = a;
      arr1[id - 1] = a

      for (let i = 0; i < 9; i++) {
        let r = Math.floor(Math.random() * 9)
        
        if (arr1[r] === '') {
          arr1[r] = 'o'
          break;
        }
        console.log(arr[r] === '' ,r,arr[r] , arr);

      }
       SetVal(arr1)
      // SetClicked(!isClick)
    };


    //0 1 2
    //3 4 5
    //6 7 8
    // console.log(arr[0], arr[1], arr[2])
    // console.log(arr[0] === arr[1] === arr[2])
    // arr[0] == arr[1] == arr[2]);



    if (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x' ||
      arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x' ||
      arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x' ||
      arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x' ||
      arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x' ||
      arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x' ||
      arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x' ||
      arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x' ||
      arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o' ||
      arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o' ||
      arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o' ||
      arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o' ||
      arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o' ||
      arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o' ||
      arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o' ||
      arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o') {
      console.log('WINN');
      SetWin(true)

    }
    // console.log('=======>', arr);

  }
  return (
    <>
      <div className='ticbox'>

        {/* <input type='text' name='input' onChange={SetVal} value={val}/> */}
        <input id='1' disabled={win} value={arr[0]} onClick={(e) => onCLickButton(e)}></input>
        <input id='2' disabled={win} value={arr[1]} onClick={(e) => onCLickButton(e)}></input>
        <input id='3' disabled={win} value={arr[2]} onClick={(e) => onCLickButton(e)}></input>
        <input id='4' disabled={win} value={arr[3]} onClick={(e) => onCLickButton(e)}></input>
        <input id='5' disabled={win} value={arr[4]} onClick={(e) => onCLickButton(e)}></input>
        <input id='6' disabled={win} value={arr[5]} onClick={(e) => onCLickButton(e)}></input>
        <input id='7' disabled={win} value={arr[6]} onClick={(e) => onCLickButton(e)}></input>
        <input id='8' disabled={win} value={arr[7]} onClick={(e) => onCLickButton(e)}></input>
        <input id='9' disabled={win} value={arr[8]} onClick={(e) => onCLickButton(e)}></input>
      </div>
      <h1>
        {win ? " WON " : ""}
      </h1>
    </>)
}

export default Tictac