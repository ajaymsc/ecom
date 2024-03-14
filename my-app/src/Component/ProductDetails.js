import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Rating } from '@mui/material'
const ProductDetails = () => {
    let { productid } = useParams()

    let [data, SetData] = useState(null)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productid}`).then((result) => {

            SetData(result.data)
            console.log("result", result.data);
        })
    }, [])
    return (

        <>
            {data !== null ? <div>
                {/*                 
                { Object.entries(data).map( (itm) =>{
                    console.log(itm);

                    
                    return itm

                }) } */}

                <div className='card'>
                    <div className='card-header'>
                        {data.title}
                    </div>
                    <div className='card-body'>
                        <img src={data.thumbnail} width={"100px"} />
                        <p>
                            {data.description}
                        </p>
                        <p>{data.price}</p>
                        <h5>{data.category}
                        </h5>
                        <h4>

                            Brand  : {data.brand}
                        </h4>
                        <div className='badge bg-primary'>
                            {data.discountPercentage} %
                        </div>
                        <div>
                            {data.rating} /5
                            <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
                        </div>

                    </div>
                </div>
                {Object.keys(data).map((item, index) => {
                    console.log(item);
                    return <div key={index}>

                        {item === 'images' ?
                            data[item].map((img) => {
                                console.log(img);
                                return <img src={img} width={"100px"} />


                            }) : ""}

                    </div>

                })}</div> : ""}
        </>
    )
}

export default ProductDetails