import {useState} from 'react'

const useCount = (initialCount=0,value) => {
    const[count,setCount]=useState(0)
    const increment = () =>{
        setCount(prevCount=>prevCount +value)
    }
    const decrement = () =>{
        setCount(prevCount=>prevCount - value)
    }
    const reset = () =>{
        setCount(initialCount)
    }
    return[count,increment,decrement,reset]
    }

export default useCount
