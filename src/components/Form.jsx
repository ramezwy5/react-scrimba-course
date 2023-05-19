import { useState } from 'react'


export default function Form(){
    const [count, setCount] = useState(0)


    function counts(){
        setCount(prevCount => prevCount += 1)
    }


    return( 
        <form>
            <h3>{count}</h3>
            <button className='btn' onClick={counts}>Click Count</button>
        </form>
    )
}