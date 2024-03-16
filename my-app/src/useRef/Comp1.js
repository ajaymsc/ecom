import React, { useEffect, useRef, useState } from 'react'

const Comp1 = () => {

    const myrefval = useRef(0)
    const [data, SetData] = useState(null);
    const [cnt, SetCnt] = useState(0);

    useEffect(() => {

        myrefval.current = myrefval.current + 1
        // SetCnt(cnt +1)
        console.log("useEffect");
});
    return (
        <div>
            <input type='text' value={data} onChange={(e) => SetData(e.target.value)} />
            <button onClick={() => console.log(myrefval.current)} >Click </button>
            <h1>
                {myrefval.current}
            </h1>
            <h2>
                {cnt}
            </h2>
        </div>
    )
}

export default Comp1