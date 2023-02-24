import React from 'react'
import UseInput from './UseInput'

const UseForm = () => {
   
    const[firstName,bindFirstName,resetFirstName]=UseInput('')
    const[lastName,bindLastName,resetLasttName]=UseInput('')
    const submitHandler=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLasttName()
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>First Name</label>
            <input 
            {...bindFirstName}
             type="text"/>
        </div>
        <div>
            <label>Last Name</label>
            <input  
           {...bindLastName}
             type="text"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseForm
