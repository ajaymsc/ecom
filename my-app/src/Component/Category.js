import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
    const [data, SetData] = useState(0);
    const [collection, SetCollection] = useState(null)

    useEffect(() => {
        //data

        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                SetCollection(response.data)
                console.log(collection);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        SetData("test1 from effect");
        SetData(1)
    }, [data == 0])
    return (
        <div className='container'>
            <div className='text-left'>
              <h1>Category List</h1>
            <ul className=''>

                        

                {collection !== null && collection.map((item, index) => {
                    // console.log(item);
                    return    <li key={index}  style={ {listStyle:'none'}}>
                                    <Link to={item} > {item} </Link>
                                </li>

 



                })}
 </ul>

            </div>
        </div>
    )
}

export default Category