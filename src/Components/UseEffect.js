// //class component
// import React, { Component } from 'react'

// export class UseEffect extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          count:0,
//          name:''
//       }
//     }
//     componentDidMount(){
//     document.title = `Clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevProps,prevState){
//         if(prevState.count!==this.state.count){
//             console.log("updated ")
//         }

//         document.title = `Clicked ${this.state.count} times`
//         }

//   render() {
//     return (
//       <div>
//         <input type="text"value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Clicked {this.state.count} times</button>
//       </div>
//     )
//   }
// }

// export default UseEffect

import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("updated")
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default UseEffect

