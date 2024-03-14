import React, { useState } from 'react'

const Todo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [s1, sets1] = useState('')
    const [s2, sets2] = useState('')
    const [s3, sets3] = useState('')
    const [s4, sets4] = useState('')
    const [s5, sets5] = useState('')
    const getData = () => {
        let arr = [...data]

        let obj = {
            name: name,
            s1: s1,
            s2: s2,
            s3: s3,
            s4: s4,
            s5: s5,
            total: parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5)
        }

        // arr.push(obj)
        setData([...arr,obj])
        sets1('')
        sets2('')
        sets3('')
        sets4('')
        sets5('')
        setName('')
        // console.log(arr);
    }
    return (
        <div>


           <br/> <input type='text' name='name' onChange={(e) => setName(e.target.value)} value={name} placeholder=' Enter Name' />
           <br/> <input type='text' name='s1' onChange={(e) => sets1(e.target.value)} value={s1} placeholder='Sub 1' />
           <br/> <input type='text' name='s2' onChange={(e) => sets2(e.target.value)} value={s2} placeholder='Sub 2' />
           <br/> <input type='text' name='s3' onChange={(e) => sets3(e.target.value)} value={s3} placeholder='Sub 3' />
           <br/> <input type='text' name='s4' onChange={(e) => sets4(e.target.value)} value={s4}  placeholder='Sub 4' />
           <br/> <input type='text' name='s5' onChange={(e) => sets5(e.target.value)} value={s5} placeholder='Sub 5' />
            <br />
            <button onClick={() => getData()}> Save </button>

            <table width={"100%"} border={"1"} cellPadding={"2px"} cellSpacing={"2px"}>
                <tr>
                    <td>Name</td>
                    <td>Sub 1</td>
                    <td>Sub 2</td>
                    <td>Sub 3</td>
                    <td>Sub 4</td>
                    <td>Sub 5</td>
                    <td>Total</td>
                </tr>
                {
                    data !== null && data.map((item, index) => {

                        return <tr key={index}>
                            <td >{item.name}</td>
                            <td>{item.s1}</td>
                            <td>{item.s2}</td>
                            <td>{item.s3}</td>
                            <td>{item.s4}</td>
                            <td>{item.s5}</td>
                            <td>{item.total}</td>
                        </tr>
                    })}
            </table>
        </div>
    )
}

export default Todo