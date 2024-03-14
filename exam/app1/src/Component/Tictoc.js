import React, { useEffect, useState } from 'react'

const Tictoc = () => {

    const [ticarr, SetTicArr] = useState(["", "", "", "", "", "", "", "", ""])
    const [tog, SetTog] = useState(true)
    const [cnt, SetCnt] = useState(0)
    const [win, SetWin] = useState(false)

    const changeVal = (val) => {

        let ticarr1 = { ...ticarr }
        if (ticarr1[val] == '') {
            ticarr1[val] = tog ? 'x' : 'o'
            SetTog(!tog)
            SetCnt(cnt + 1)
        }
        console.log(cnt);
        console.log(ticarr1);


        SetTicArr(ticarr1);
        //0 1 2
        //3 4 5
        //6 7 8
        if (ticarr1[0] === 'x' && ticarr1[1] === 'x' && ticarr1[2] === 'x' ||
            ticarr1[3] === 'x' && ticarr1[4] === 'x' && ticarr1[5] === 'x' ||
            ticarr1[6] === 'x' && ticarr1[7] === 'x' && ticarr1[8] === 'x' ||
            ticarr1[0] === 'x' && ticarr1[3] === 'x' && ticarr1[6] === 'x' ||
            ticarr1[1] === 'x' && ticarr1[4] === 'x' && ticarr1[7] === 'x' ||
            ticarr1[2] === 'x' && ticarr1[5] === 'x' && ticarr1[8] === 'x' ||
            ticarr1[0] === 'x' && ticarr1[4] === 'x' && ticarr1[8] === 'x' ||
            ticarr1[2] === 'x' && ticarr1[4] === 'x' && ticarr1[6] === 'x' ||
            ticarr1[0] === 'o' && ticarr1[1] === 'o' && ticarr1[2] === 'o' ||
            ticarr1[3] === 'o' && ticarr1[4] === 'o' && ticarr1[5] === 'o' ||
            ticarr1[6] === 'o' && ticarr1[7] === 'o' && ticarr1[8] === 'o' ||
            ticarr1[0] === 'o' && ticarr1[3] === 'o' && ticarr1[6] === 'o' ||
            ticarr1[1] === 'o' && ticarr1[4] === 'o' && ticarr1[7] === 'o' ||
            ticarr1[2] === 'o' && ticarr1[5] === 'o' && ticarr1[8] === 'o' ||
            ticarr1[0] === 'o' && ticarr1[4] === 'o' && ticarr1[8] === 'o' ||
            ticarr1[2] === 'o' && ticarr1[4] === 'o' && ticarr1[6] === 'o') {
            SetWin(true);
        }

    }
    const resetBoard = () => {

        SetTicArr(["", "", "", "", "", "", "", "", ""])
        SetWin(false)
        SetCnt(0)
    }
    return (
        <div className='container'>

            <div className='ticbox'>

     {/* {ticarr !== null &&  ticarr?.map(  (item,index)=> {
        
         return <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(index)} value={ticarr[index]} ></input>
            
     }
     )} */}

                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(0)} value={ticarr[0]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(1)} value={ticarr[1]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(2)} value={ticarr[2]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(3)} value={ticarr[3]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(4)} value={ticarr[4]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(5)} value={ticarr[5]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(6)} value={ticarr[6]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(7)} value={ticarr[7]} ></input>
                <input className="ticinput" readOnly disabled={win} onClick={() => changeVal(8)} value={ticarr[8]} ></input>

                <div className='result'>
                    {win ? <h1>WIN</h1> : ""}
                    {cnt > 7 && !win ? <h1>DRAW</h1> : ""}
                    <button onClick={() => resetBoard()} > RESET </button>
                </div>
            </div>




        </div>

    )
}

export default Tictoc