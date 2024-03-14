import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='card p-2 m-5'>

            {data.map(function (item, index, arr) {
 
                    return <div key={index}>
                        <div className='card-header'>

                            {item.name}
                        </div>

                        <div className='card-body' >  {item.contactno}
                        </div>
                    </div>
             })
            }


        </div>
    )
}

export default Card