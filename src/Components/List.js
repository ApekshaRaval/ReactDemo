import React from 'react'
import Greet from './Greet '
const List = () => {
    const name = ['apeksha','appu','apexa']
    const name1 = [
        { id:1,firstName:"John", lastName:"Doe", age:55, eyeColor:"blue"}, 
        {id:2,firstName:"clark", lastName:"sparse", age:30, eyeColor:"black"}
    ]
    // const list = name.map(name => <h2>{name.firstName} {name.lastName} {name.age}</h2>) 
    //  const list = name.map(name => <Greet  key={name.id} name={name}/>)
     const list = name.map((name,index )=> <h2 key={index} >{index}{name}</h2>)
    
    return (
        <>
            <div>
                {list}
                {/* <h1 className={styles.error}>error</h1> */}
              <h1 className='success'>success</h1>
            </div>
        </>
    )
}

export default List
