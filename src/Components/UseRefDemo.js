// import React from 'react'

// const userRef=React.createRef();

// const UseRefDemo = () => {
// const focusinput =()=>{
//     userRef.current.value="Apeksha"
// }
//   return (
//     <div>
//       <input ref={userRef} type="text" name="user"/>
//       <button onClick={focusinput}>Focus</button>
//     </div>
//   )
// }

// export default UseRefDemo


// import React,{useEffect,useRef} from 'react'

// const UseRefDemo = () => {
//     const inputRef = useRef(null)
//     useEffect(()=>{
//    inputRef.current.focus()
//     },[])
//   return (
//     <div>
//       <input ref={inputRef} type="text" name="user"/>
// {/*       <button onClick={focusinput}>Focus</button> */}
//     </div>
//   )
// }

// export default UseRefDemo


import React, { useEffect, useRef, useState } from 'react'

const UseRefDemo = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
    intervalRef.current=setInterval(()=>{
    setTimer(prevTimer =>prevTimer+1)
  },1000)
  return()=>{
  clearInterval(intervalRef.current)
  }
    },[])
    return (
        <div>
              Timer :  {timer}
              <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default UseRefDemo



