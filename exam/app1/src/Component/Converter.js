import React, { useState } from 'react'

const Converter = () => {


    const [val, SetVal] = useState('')
    const [result, SetResult] = useState(0)
    const [from, SetSelectedFrom] = useState('')
    const [to, SetSelectedTo] = useState('')




    const convertVal = () => {
        console.log(val);
        console.log('click convert', from);

        //         let rates1 = [{ "USD": 1} , EUR => 0.85,INR => 74.71];
        // console.log(rates1["USD"]);
        let rates = [{ name: "USD", value: 1 }, { name: "EUR", value: 0.85 }, { name: "INR", value: 74.71 }, { name: "PKR", value: 292.75 }, { name: "NPR", value: 119.53 }, { name: "CAD", value: 1.26 }]
        let Fromrate = rates.filter((item, index) => {

            return item.name == from
        })
        let ToRate = rates.filter((item, index) => {

            return item.name == to
        })
        console.log(Fromrate);
        console.log(ToRate);
        // console.log(rate);



        // 1 usd   74 inr 
        // 1 inr  = 1/74 
         
        let usdrate = 1 / parseFloat(Fromrate[0].value)
        let currate = usdrate * parseFloat(val) * parseFloat(ToRate[0].value)

        console.log(usdrate, currate);

        let ans = parseFloat(currate).toFixed(2);
        // console.log(ans, val, rate, val * rate);

        SetResult(ans);
    }
    return (
        <div className='converter'>
            <form>
                <input type='text'  pattern={"[0-9]"}  placeholder='Enter Number' required onChange={(e) => SetVal(e.target.value)} value={val} />
                <br />
                From
                <select required onChange={(e) => SetSelectedFrom(e.target.value)}>
                    <option value={""}>Select</option>
                    <option value={"USD"}>USD</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"INR"}>INR</option>
                    <option value={"PKR"}>PKR</option>
                    <option value={"NPR"}>NPR</option>
                    <option value={"CAD"}>CAD</option>

                </select>
                To
                <select required onChange={(e) => SetSelectedTo(e.target.value)}>
                    <option value={""}>Select</option>
                    <option value={"USD"}>USD</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"INR"}>INR</option>
                    <option value={"PKR"}>PKR</option>
                    <option value={"NPR"}>NPR</option>
                    <option value={"CAD"}>CAD</option>

                </select>
            </form>
            <button onClick={() => convertVal()}> Convert </button>

 { val === '' && result  ? <h3>Enter Number and  convert  </h3> :  
            <h1 >     {val}   {from}  =  {result}    {to}</h1>
    }
        </div>
    )
}

export default Converter