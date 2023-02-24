import {useState} from 'react'

const UseInput = () => {
    const[value,setValue]=useState('')
    const reset =()=>{
        setValue('')
    }
const bind ={
    value,
    onchange:e=>{
        setValue(e.target.value)

    }
}
return [value,bind,reset]
}

export default UseInput
