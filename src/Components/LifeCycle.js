import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor() {
      super()
      this.state={
        data:null,
        active:null,
        who:null
      }
    console.log("constructor")
     
    }
    componentDidUpdate(){
    console.log("componentDidUpdate")
    //  if(this.setState.who==null)
    //  {
    //     this.setState({who:"Apeksha"})
    //  }   
    // this.setState({who:"Apeksha"}) //this gives error
    }

    componentDidMount(){
        this.setState({data:"updated"})
        console.log("componentDidMount")
    }
  
  render() 
  {console.log("render")
    return (
      <div>
        <h1>{this.state.who}</h1>
        <button onClick={()=>{this.setState({active:"yes"})}}>Activate</button>
      </div>
    )
  }
}

export default LifeCycle
