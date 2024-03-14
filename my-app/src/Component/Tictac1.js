import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

const Tictac1 = () => {

  const [val, SetVal] = useState('')
  const [isClick, SetClicked] = useState(true)

  const onCLickButton = (e) => {

    let b = e.target.innerHTML;
    let id = e.target.id;

    //console.log('click==', b==='', id);
    if (b === '') {
      e.target.innerHTML = isClick ? 'x' : 'o'
      SetClicked(!isClick)
    }

    let arr = [];
    for (let i = 0; i < 9; i++) {
      arr[i] = document.getElementById(i + 1).innerHTML;

    }

    //0 1 2
    //3 4 5
    //6 7 8
    console.log(arr[0], arr[1], arr[2])
    console.log(arr[0] === arr[1] === arr[2])
    // arr[0] == arr[1] == arr[2]);



    if (arr[0] === 'x' && arr[1] === 'x' && arr[2] === "x" ||
      arr[3] === 'x' && arr[4] === 'x' && arr[5] === "x" ||
      arr[6] === 'x' && arr[7] === 'x' && arr[8] === "x" ||
      arr[0] === 'x' && arr[3] === 'x' && arr[6] === "x" ||
      arr[1] === 'x' && arr[4] === 'x' && arr[7] === "x" ||
      arr[2] === 'x' && arr[5] === 'x' && arr[8] === "x" ||
      arr[0] === 'x' && arr[4] === 'x' && arr[8] === "x" ||
      arr[2] === 'x' && arr[4] === 'x' && arr[6] === "x" ) 
      {
      // console.log('WINN');

      for (let i = 0; i < 9; i++) {
        //  document.getElementById(i + 1).disabled = true;

      }
    }
    console.log(arr);

  }
  return (
    <>
      <div className='ticbox'>

        {/* <input type='text' name='input' onChange={SetVal} value={val}/> */}
        <Button id='1' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='2' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='3' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='4' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='5' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='6' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='7' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='8' onClick={(e) => onCLickButton(e)}></Button>
        <Button id='9' onClick={(e) => onCLickButton(e)}></Button>
      </div>

    </>)
}

export default Tictac1