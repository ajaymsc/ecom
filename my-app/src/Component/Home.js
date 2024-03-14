import React from 'react'
import Card from './Card';

const Home = () => {

    let name = "Hello";
    let obj = [{ name: "abc", contactno: "2635753742" },
    { name: "asdas", contactno: "56765753742" },
    { name: "grhr", contactno: "6456464" },
    { name: "fbfgf", contactno: "98796564742" }]

    return (
        <>
            {name}

            {/* {obj.map(function(item, index, arr) {
 
          if( item.name != 'abc'){ 
            return            <li  key={index}> {item.name} {item.contactno} </li>
        }
     } )
} */}
            <Card data={obj} />
        </>
    )
}

export default Home