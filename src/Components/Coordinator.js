// import React, { Component } from 'react'

// export class Coordinator extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          x:0,
//          y:0
//       }
//     }
//     logMousePosition=(e)=>{
//         this.setState({x:e.clientX ,y:e.clientY})
//     }
//     componentDidMount(){
//         window.addEventListener('mousemove',this.logMousePosition)
//     }
//   render() {
//     return (
//       <div>
//         X - {this.state.x} Y - {this.state.y}
//       </div>
//     )
//   }
// }

// export default Coordinator

import React,{useEffect, useState} from 'react'

const Coordinator = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=(e)=>{
       
        setX(e.clientX)
        setY(e.clientY)
        console.log("mouse event")
    }
 useEffect(()=>{
    console.log("useEffect")
    window.addEventListener('mousemove',logMousePosition)

    //cleanup the code
    return()=>{
        console.log("component unmounted")
        window.removeEventListener('mousemove',logMousePosition)
    }
 },[])

  return (
    <div>
      X  -  {x}  Y - {y}
    </div>
  )
}

export default Coordinator

