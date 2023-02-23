import React,{useState} from 'react'
import Coordinator from './Coordinator'

const MouseContainer = () => {
    const[display,setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <Coordinator/>}
    </div>
  )
}

export default MouseContainer
