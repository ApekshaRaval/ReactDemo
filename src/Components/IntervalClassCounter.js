// import React, { Component } from 'react'

// export class IntervalClassCounter extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          count:0
//       }
//     }
//     componentDidMount(){
//         this.interval = setInterval(this.tick,1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }
//     tick=()=>{
//         this.setState({
//             count:this.state.count +1
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//       </div>
//     )
//   }
// }

// export default IntervalClassCounter


import React, { useState, useEffect } from 'react'

const IntervalClassCounter = () => {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount=>prevCount + 1)
    }


    useEffect(() => {
       
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)

        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalClassCounter
