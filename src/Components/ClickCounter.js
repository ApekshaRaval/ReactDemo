// import React, { Component } from 'react'

// class ClickCounter extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     incrementCount = () => {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render() {
//         const { count,incrementCount } = this.props
//         return (
//             <div>
//                 <button onClick={incrementCount}> Clicked {count} times</button>
              
//             </div>
//         )
//     }
// }

// export default ClickCounter

// hover counter
// import React, { Component } from 'react'

// export class ClickCounter extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     incrementCount = () => {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <button onMouseOver={this.incrementCount}>Hover{count} times</button>
//       </div>
//     )
//   }
// }

// export default ClickCounter

// import React, { useState } from 'react'

// const ClickCounter = () => {
//     const initialCount=0
//     const[count,setCount]=useState(initialCount);
//    const   incrementFive=()=>{
//     for(let i=0;i<5;i++){
//         setCount(prevCount=>prevCount+1)
//     }
//    }
//   return (
//     <div>
//         count:{count}
//         <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
//         <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
//         <button onClick={()=>setCount(initialCount)}>Reset </button>
//         <button onClick={incrementFive}>Increment Five </button>
//       {/* <button onClick={()=>setCount(count+1)}>Count{count}</button> */}
//     </div>
//   )
// }

// export default ClickCounter
