import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Skeleton, Typography } from '@mui/material';
import Card from './Card';

const Dummyjson = () => {
    const [data, SetData] = useState(0);
    const [collection, SetCollection] = useState(null)
    const { selectedcategory } = useParams()
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        //data

        console.log("slecetedcategory", selectedcategory);

        axios.get(`https://dummyjson.com/products/category/${selectedcategory}`)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                SetCollection(response.data)
                console.log("============collection");
                console.log(collection);
            })
            .catch(function (error) {
                // handle error
                console.log("===========Error");
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        SetData("test1 from effect");
        console.log(data);
 setTimeout(() => {
    
     SetLoading(false)
 }, 3000);
        SetData(1)
    }, [data == 0])
    return (
        <div className='container'>

            <div className='d-flex gap-2'>
                {loading ?  <>

<div className='card bordered' style={{display:'block' , width:'200px'}}>
 
    <Skeleton variant="rectangular" animation="wave" width={200} height={118} />
        <Skeleton />
 
</div>
<div className='card bordered' style={{display:'block' , width:'200px'}}>
 
    <Skeleton variant="rectangular" animation="wave" width={200} height={118} />
        <Skeleton />
 
</div>
<div className='card bordered' style={{display:'block' , width:'200px'}}>
 
    <Skeleton variant="rectangular" animation="wave" width={200} height={118} />
        <Skeleton />
 
</div>
<div className='card bordered' style={{display:'block' , width:'200px'}}>
 
    <Skeleton variant="rectangular" animation="wave" width={200} height={118} />
        <Skeleton />
 
</div>
<div className='card bordered' style={{display:'block' , width:'200px'}}>
 
    <Skeleton variant="rectangular" animation="wave" width={200} height={118} />
        <Skeleton />
 
</div>

</>  :  <>
                {  collection !== null && collection?.products.map((item, index) => {

                    console.log(item);

                    console.log('loading item', item.title, index);

                    return   <div  className='align-self-start' >
<div className='align-self-center'>
                            <Link to={`/productdetails/${item.id}`} >
                                <img src={item.thumbnail} className='img-thumbnail' style={{  height:"120px"  } } />
                            </Link>

</div>
<div className='justify-content-between'>

                            <b className='' > {item.title} </b>
</div>

                        </div>
                     



                })}
            
            </>  }

            </div>
        </div>
    )
}

export default Dummyjson