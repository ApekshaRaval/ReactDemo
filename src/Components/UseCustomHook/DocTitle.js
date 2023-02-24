// import React,{useState} from 'react'
// import useDocumentTitle from './useDocumentTitle'

// const DocTitle = () => {
//     const[count,setCount] = useState(0)
//     useDocumentTitle(count)
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)} > count - {count}</button>
//     </div>
//   )
// }

// export default DocTitle


import React from 'react'
import useCount from './useCount'

const DocTitle = () => {
    const[count,increment,decrement,reset] = useCount(0,10)
  return (
    <div>
        <h2>count = {count}</h2>
       <button onClick={increment} > increment</button>
       <button onClick={decrement} > decrement</button>
       <button onClick={reset} > reset</button>
    </div>
  )
}

export default DocTitle


