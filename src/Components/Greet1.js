// class Component
import React,{Component} from 'react' ;
import Greet from './Greet ';

//  use of props
// class Greet1 extends Component{
//     clickButton()
//     {
//         console.log("click btn")
//     }
//     // render(){
//     //     return <h1>Hello  {this.props.name}</h1>
//     // }

//     //destructuring of props
//     render(){
//         const {name} = this.props
     
//         return(
//             <>
//             <h1>Hello {name}</h1>
//             <button onClick={this.clickButton}>click me</button>
//             </>
//         )

//     }
// }


//use of State
class Greet1  extends Component{
//     constructor(){
//         super()
//         this.state={
//             message: "hello"
//         }
//     }
//     // setState method use two parameters 1 = object , 2 = callback function

//     clicked=()=>{
//         this.setState({
//             message:"chup"
//         })
        
//     }
//     render(){
//         return(
//             <>
//             <div>
//            <h1>count - {this.state.message}</h1>
           
//            {/* <button onClick={this.clicked.bind(this)}>Increment</button> */}
//            <button onClick={this.clicked}>Increment</button>
        
//            </div>
//            </>
//         ) 
//     }
// }

//methods as props
constructor(props){
    super(props)
    this.state={
        parentName: "parent"
    }
}
// setState method use two parameters 1 = object , 2 = callback function

greetParent=(childName)=>{
  alert(`hello ${this.state.parentName } from ${childName}`)
    
}
render(){
    return(
        <>
       <Greet greetHandler={this.greetParent}/>
    
      
       </>
    ) 
}
}
export default Greet1 ;