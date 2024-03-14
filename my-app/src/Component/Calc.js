import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

const Calc = () => {
    let [op, SetOp] = useState("");
    let [val1, SetVal1] = useState("");
    let [val2, SetVal2] = useState("");
     let SetVal = (val) =>{

        let v =    val1 + ''+val;
        SetVal1(v)
    }
    let Operate = (op) => {
        SetOp(op)
        console.log(op);
        SetVal2(val1);
        SetVal1('');
        //  console.log('1=',val1,'  2=',val2);
    }

    let Calculate = () => {

        let ans = 0;
        if (op === "+")
            ans = parseInt (val1) +  parseInt(  val2);

            if (op === "-")
            ans = parseInt (val1) -  parseInt(  val2);

            if (op === "/")
            ans = parseInt (val1)  /  parseInt(  val2);
            if (op === "x")
            ans = parseInt (val1) *  parseInt(  val2);


            if (op === "c"){
                SetVal('');
                SetVal1('');
                SetVal2('');
            } 
            // console.log('1=', val1, op, '  2=', val2);
        // SetAns(ans);
        SetVal1(ans);
    }

    return (<>
        <div className='container'>


            <input type='text' name='calc' readOnly value={val1} />

            <div>
                <div className='box'>

                    <Button onClick={() => SetVal(1)}> 1 </Button>
                    <Button onClick={() => SetVal(2)}> 2 </Button>
                    <Button onClick={() => SetVal(3)}> 3 </Button>
                    <Button onClick={() => Operate("+")}> + </Button>
                    <Button onClick={() => SetVal(4)}> 4 </Button>
                    <Button onClick={() => SetVal(5)}> 5 </Button>
                    <Button onClick={() => SetVal(6)}> 6 </Button>
                    <Button onClick={() => Operate("-")}> - </Button>
                    <Button onClick={() => SetVal(7)}> 7 </Button>
                    <Button onClick={() => SetVal(8)}> 8 </Button>
                    <Button onClick={() => SetVal(9)}> 9 </Button>
                    <Button onClick={() => Operate("/")}> / </Button>
                    <Button onClick={() => SetVal(0)}> 0 </Button>
                    <Button onClick={() => Operate("C")}> C </Button>
                    <Button onClick={() => Calculate()}> = </Button>
                    <Button onClick={() => Operate("x")}> * </Button>

                </div>
            </div>
        </div>
    </>

    )
}

export default Calc