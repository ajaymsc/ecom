import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Dummyjson = () => {
    const [data, SetData] = useState(0);
    const [collection, SetCollection] = useState(null)
    const { selectedcategory } = useParams()
    useEffect(() => {
        //data

        console.log("slecetedcategory", selectedcategory);

        axios.get(`https://dummyjson.com/products/category/${selectedcategory}`)
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
        console.log(data);

        SetData(1)
    }, [data == 0])
    return (
        <div className='container'>
            <div className='d-flex gap-2'>
                {collection !== null && collection.products.map((item, index) => {
                    console.log(item);
                    return <>
                        <div className='card'>

                            <b className='' > {item.title} </b>

                            <Link to={`/productdetails/${item.id}`} >
                                <img src={item.thumbnail} style={{ width: "100% " }} />
                            </Link>
                        </div>
                    </>



                })}


            </div>
        </div>
    )
}

export default Dummyjson