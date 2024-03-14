import React, { useState } from 'react'

const Todo = () => {

    const [title, SetTitle] = useState('');
    const [arr, SetArr] = useState([]);
    const [update, SetUpdate] = useState(null);
    const [filter, SetFilter] = useState('');

    const handleChange = (i) => {


        let arr1 = [...arr]
        SetUpdate(i)
        SetTitle(arr1[i].title)
        let task = {
            title: arr1[i].title,
            status: !arr1[i].status,
        }
        arr1[i] = task

        SetArr(arr1)
    }
    const adddata = () => {

        if (update == null) {
            let task = {
                title: title,
                status: false,
            }
            SetArr([...arr, task])


        } else {


            let temp = arr;
            let task = {
                title: title,
                status: arr[update].status,

            }
            temp[update] = task
            SetArr(temp)
            SetUpdate(null)


        }
        SetTitle('')
    }



    const deleteData = (i) => {


        let newarr = arr.filter((item, index) => {

            return index != i

        })

        SetArr(newarr);
    }


    return (
        <div className='main'>
            <div className=''>
<form>
                <input className='todoiput' type='text'
                    placeholder='Enter Task Title' required onChange={(e) => SetTitle(e.target.value)} value={title} ></input>
                <br />
                <button className='todobtn' onClick={() => adddata()}> Save </button>
                <select onChange={(e) => SetFilter(e.target.value)} >
                    <option value={''} > ALL </option>
                    <option value={true} > Complete </option>
                    <option value={false} > Uncomplete </option>
                </select>
                </form>           
            </div>
            <div>
                <ul className='tasklist' >
                    {filter === '' ?
                        arr !== null && arr.length > 0 && arr?.map((item, index) => {
                             
                            return   <li key={index} >

                                <input type="checkbox" onChange={() => handleChange(index)} checked={item.status ? "checked" : ""} />
                                <div className='title' > {index + 1} - {item.title}</div>
                                <button onClick={() => deleteData(index)}>Delete</button>
                            </li>

                        })  : 
                        arr !== null && arr.length > 0 && arr?.map((item, index) => {
                     
                             let bool = filter ===  'true' ? true : false
                            return  bool ===  item.status &&   <li key={index} >

                                <input type="checkbox" onChange={() => handleChange(index)} checked={item.status ? "checked" : ""} />
                                <div className='title' > {index + 1} - {item.title}</div>
                                <button onClick={() => deleteData(index)}>Delete</button>
                            </li>

                        }) 
                    }
                </ul>
            </div>
        </div>

    )
}

export default Todo