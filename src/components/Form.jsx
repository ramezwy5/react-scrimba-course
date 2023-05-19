import { useState } from 'react'
import "./Form.css"

export default function Form(){
    const [firstName, setFirstName] = useState("")

    return( 
        <form className='form'>
            <input 
                type='text'
                placeholder='First Name'
            />
        </form>
    )
}