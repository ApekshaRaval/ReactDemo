// import React, { Component } from 'react'

// class Form extends Component {
//     constructor(props) {
//         super(props)
//         this.state={
//             username: ''
//         }
//     }
 
//     clickHandler=()=>{
//         alert(this.inputRef.current.value)
//     }
//     handleUsername=(e)=>{
//    this.setState({
//     username: e.target.value
//    })
//     }
//    onSubmit=(e)=>{
//     e.preventDefault();
//        alert(`username is : ${this.state.username}`)
//          }
//     render() {
//         return (
//             <form>
//                 <div>
//                   <label>Username</label>
//                   <input type="text"   value={this.state.username}
//                   onChange={this.handleUsername}/>
               
//                 </div>
//                 <button onClick={this.onSubmit}>Submit</button>
             
//             </form>

//         )
//     }
// }
// export default Form
import React,{useRef,useState} from 'react'

const Form = () => {
    //it preserve value no rerender
    const name = useRef(null)
    const[show,setShow]=useState(false)
     const submitForm=(e)=>{
        e.preventDefault();
        const Name= name.current.value;
        Name=== "" ? alert("plz fill the data") : setShow(true);

    }
  return (
  <>
  <form onSubmit={submitForm}>
     <div> 
    <label htmlFor='name'>Enter Your name</label><br/>
      <input type="text" id="name" ref={name}/>
      </div>
      <button>Submit</button>
      </form> 
      <p>{show ? `your name is ${name.current.value}`: ""}</p>
      </>
 
  )
}

export default Form
