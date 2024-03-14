import React from 'react'
import { FaLeaf } from 'react-icons/fa';

const Snack = () => {

    let i, j, k, l, n = 100;
    let arr = [];
    k = n
    l = n
    console.log("snack");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

                //odd row 
              if (i % 2 == 1) {
                // console.log(k);
                arr[n - 1] = l;   
                k--;  //
                l++;          
            } else { 
                // console.log(l);
                arr[n - 1] = k;
                k--;                
            }
            n--; //100
        }
        l =  k - 9; // 90-9 = 81 == 81 ,82 ,83 ....
        console.log('l = ',l);
        console.log( 'k =',k);
    }

    arr.reverse()

    //1 2 3 4 5
    //10 9 8 7 6
    //11 12 13 14 15
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '500px' }}>
            {/* <h1>snack pattern</h1> */}
            {arr.map((item, index) => {

                return <span style={{ display: 'flex', width: '50px', height: '50px', border: "1px solid", alignItems: 'center', justifyContent: 'center' }}> {item}</span>

            })}
        </div>
    )
}

export default Snack