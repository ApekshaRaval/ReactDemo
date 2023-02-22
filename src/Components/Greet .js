import React from 'react'

// const Greet = () => <h1>Hello Appu</h1>

// function Greet (){
//     return <h1> Hello Apeksha</h1>
// // }

// const Greet = (props) => {

//  function clickButton(){
//         console.log("clicked ")
//     }

//     return (
//         <>
//             <h1>Hello {props.name}</h1>
//             <button onClick={clickButton}>click</button>
//         </>
//     )
// }


//destructuring props
// const Greet = ({name}) => {
//     return (
//         <>
//             <h1>Hello {name}</h1>
//         </>
//     )
// }

// const Greet = (props) => {
//     const {name} =props
//     return (
//         <>
//             <h1>Hello {name}</h1>
//         </>
//     )
// }

const Greet = ({name}) => {


   
       return (
           <>
           
             <h2> {name.firstName} {name.lastName} {name.age} </h2>
               {/* <button onClick={()=>props.greetHandler('child')}>Greet Parent</button> */}
           </>
       )
   }

export default  Greet ;


