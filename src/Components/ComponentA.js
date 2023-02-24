import React,{useContext} from 'react'
import {CountContext} from '../App'

const ComponentA = () => {
/* Getting the value from the context. */
  const countContext = useContext(CountContext)

  return (
    <div>
      counter A - {countContext.countState}
      
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
