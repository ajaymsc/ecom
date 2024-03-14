import React, { useEffect, useState } from 'react'

const Todo2 = () => {

    const [title, SetTitle] = useState(''); 
    const [arr, SetArr] = useState([]);
    const [update, SetUpdate] = useState(-1);
    const [id,setId] = useState(null)
  
    const adddata = () => { 
       if(id ==  null){

           SetArr([...arr,{ title: title,  status: false}])
       }else{
        let temp = [...arr]
        // temp[id].status = !temp[id].status
        temp[id].title = title
        SetArr(temp)
       }

     
       
    }
   

    // console.log(arr)

    const selectData = (i) => {
        console.log(i);
        SetUpdate(i)
        let selectedtask = arr[i];
        SetTitle(selectedtask.title)
    }
    
    
    const updateData = () => {
        
        if (update >= 0) {
            
            let task = {
                title: title,
            }
            arr[update] = task
            
        }
        SetArr(arr)
        SetTitle('')
        SetUpdate(-1)
        
    }
    const handleChange = (index) => {
        // console.log(data);
        setId(index)
         SetTitle(arr[index].title)
         let temp = [...arr]
         temp[index].status = !temp[index].status
         SetArr(temp)
        // let arr1 = { ...arr }
        // // let value = e.target.value;
        // // SetCheck(value);
        // let task = {
        //     title: data.title,
        //     status: !data.status,
        // }
        // arr1[i] = task

        // console.log(arr1);
        // SetArr(arr1)
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
            
                    <input  className='todoiput' type='text'
                    placeholder='Enter Task Title' required onChange={(e) => SetTitle(e.target.value)} value={title} ></input>
                    {/* <input type='checkbox' onChange={(e) => SetCheck(e.target.value)} value={check} ></input> */}
                    <br />
                    {update > -1 ?
                        <button className='todobtn' onClick={() => updateData()}> Update </button>
                        :  <button className='todobtn' onClick={adddata}> Add new </button>}
            
            </div>
           
            <div>
                <ul className='tasklist' >
                     {
                         arr != null && arr?.map((item, index) => {
// console.log('map',item);
                            return <li key={index} >

                                <input type="checkbox" onChange={() => handleChange(index)} checked={item.status ? true : ""} />
                                <div className='title' > {index + 1} - {item.title}</div>
                                <button onClick={() => selectData(index)}>Edit</button>
                                <button onClick={() => deleteData(index)}>Delete</button>
                            </li>

                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Todo2