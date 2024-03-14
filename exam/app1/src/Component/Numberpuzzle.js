import React, { useEffect, useState } from 'react'

const Numberpuzzle = () => {

    const [arr, setArr] = useState(["3", "2", "1", "4", "7", "5", "8", "", "6"])
    const [win, SetWin] = useState(false)
    // let [cnt, SetCnt] = useState(0)
    // 0 1 2 
    // 3 4 5
    // 6 7 8

    // useEffect(() => {
    //     console.log("arr effect");
    //     arr?.map((item, index) => {

    //         let result = false
    //         console.log(item, index);
    //         SetWin(result)

    //     })

    // })
    const ChangePosition = (i) => {


        if (arr[i] == "") {
            console.log(" no");
        } else {

            let pos = [[1, 3], [0, 4, 2], [1, 5], [0, 4, 6], [1, 3, 5, 7], [2, 4, 8], [3, 7], [4, 6, 8], [5, 7]]

            console.log("update pos");
            pos[i].map((itm, ind) => {
                let arr1 = { ...arr }
                if (arr[itm] == "") {
                    console.log('updating item', itm);
                    arr1[itm] = arr1[i]
                    arr1[i] = ""
                    setArr(arr1)
                }

                if (arr1[0] == 1 && arr1[1] == 2 && arr1[2] == 3 && arr1[3] == 4 && arr1[4] == 5 && arr1[5] == 6 && arr1[6] == 7 && arr1[7] == 8 && arr1[8] == "") {
                    SetWin(true)
                    console.log("win");
                }
            })

        }

      

        // SetCnt(0)
        //  for (let index = 0; index < 8; index++) {
        //     let item = parseInt(arr[index]);

        //         console.log(cnt ,"=>>=====", item, index+1, item ==  (index +1));

        //     if( item === (index +1))
        //     {
        //          SetCnt(cnt + 1 )
        //     }else{
        //         break;
        //     } 

        // }
        // if(cnt === 8)
        // SetWin(true)

        //     arr.map((item, index)=>{

        // console.log("===============", item, index);


        //     })
    }
    const resetBoard = () =>{

        let newarr =["","","","","","","","",""];

        for (let i = 0; i <  8; i++) {

            while(newarr[i] == ""){
                let r = Math.floor(  Math.random() *  9);
                let check =  newarr.filter((item,index)=>{
                    return item == r
                }) 
                if(check .length === 0){
                newarr[i] = r 
                break;
                }
            }
            console.log(newarr);
        }
        setArr(newarr);
        SetWin(false);
    }
    return (
        <div className='main'>

            <div className='puzzlebox'>


                <input className='puzzleitem' readOnly onClick={() => ChangePosition(0)} value={arr[0]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(1)} value={arr[1]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(2)} value={arr[2]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(3)} value={arr[3]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(4)} value={arr[4]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(5)} value={arr[5]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(6)} value={arr[6]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(7)} value={arr[7]} ></input>
                <input className='puzzleitem' readOnly onClick={() => ChangePosition(8)} value={arr[8]} ></input>
                <div className='result'>

                    {win ? <div><h1>WIN</h1>  <button className='reset' onClick={() => resetBoard()} > RESET </button></div> : ""}
 
                </div>

            </div >

        </div >
    )
}

export default Numberpuzzle