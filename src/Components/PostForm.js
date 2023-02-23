// import React, { Component } from 'react'
// import axios from 'axios'

// class PostForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             userId: '',
//             title: '',
//             body: ''
//         }
//     }
// changeHandler = (e) => {

//     this.setState({ [e.target.name]: e.target.value })
// }
// submitHandler=(e)=>{
//     e.preventDefault();
//     console.log(this.state)
//     axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
//     .then(response=>{
//         console.log(response)

//     })
//     .catch(error=>{
//         console.log(error)

// })
// }

//     render() {
//         const { userId, title, body } = this.state
//         return (
// <>
//     <form onSubmit={this.submitHandler}>
//         <div>
//             <input
//                 type="text"
//                 name="userId"
//                 value={userId}
//                 onChange={this.changeHandler}
//             />
//         </div>
//         <div>
//             <input
//                 type="text"
//                 name="title"
//                 value={title}
//                 onChange={this.changeHandler}
//             />
//         </div>
//         <div>
//             <input
//                 type="text"
//                 name="body"
//                 value={body}
//                 onChange={this.changeHandler}
//             />
//         </div>
//         <button type="submit">Submit</button>
//     </form>
// </>
//         )
//     }
// }

// export default PostForm


// functional component
//object method

// import React, { useState } from 'react'
// import axios from 'axios'

// const PostForm = () => {
//     const [data, setData] = useState({});


//     const changeHandler = (e) => {

//         setData({ ...data, [e.target.name]: e.target.value })
//     }
//     const submitHandler = (e) => {
//         e.preventDefault();

//         axios.post('https://jsonplaceholder.typicode.com/posts', data)
//             .then(response => {
//                 console.log(response)

//             })
//             .catch(error => {
//                 console.log(error)

//             })
//     }
//     return (
//         <>
//             <form onSubmit={submitHandler}>
//                 <div>
//                     <input
//                         type="text"
//                         name="userId"
//                         onChange={changeHandler}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         name="title"
//                         onChange={changeHandler}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         name="body"
//                         onChange={changeHandler}
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             <div>
//                 <h2>UserId :{data.userId}</h2>
//                 <h2>Title :{data.title}</h2>
//                 <h2>Body :{data.body}</h2>
//             </div>
//         </>
//     )
// }

// export default PostForm


//array method
 import React,{useState} from 'react'
 
 const PostForm = () => {
    const [items,setItems] = useState([])
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }
     
        ])
    }
   return (
    <>
     <div>
        <button onClick={addItem}>Add a Number</button>
        <ul>
       {
        items.map(item=><li key={item.id}>{item.value}</li>)
       }
       </ul>
     </div>
     </>
   )
 }
 
 export default PostForm
 
