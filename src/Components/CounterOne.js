// import React,{useReducer} from 'react'

// const initialState=0
// const reducer=(state,action)=>{
// switch(action){
//     case 'increment':
//         return state + 1
//         case 'decrement':
//             return state - 1
//             case 'reset':
//                 return initialState
//                 default:
//                     return state
// }
// }

// const CounterOne = () => {
//     const [count,dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//         <div>count - {count}</div>
//       <button onClick={()=>dispatch('increment')}>Increment</button>
//       <button  onClick={()=>dispatch('decrement')}>Decrement</button>
//       <button  onClick={()=>dispatch('reset')}>Reset</button>
//     </div>
//   )
// }

// export default CounterOne


//state as a object
import React,{useReducer} from 'react'

const initialState={
    firstCounter :0,
    secondCounter:10
}

 const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter + action.value}
            case 'decrement':
            return {...state,firstCounter: state.firstCounter - action.value}
            case 'increment2':
            return {...state,secondCounter: state.secondCounter + action.value}
            case 'decrement2':
            return {...state,firstCounter: state.secondCounter - action.value}
            case 'reset':
            return initialState
            default:
                return state
    }

 }


const CounterOne = () => {

const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <div>First count - {count.firstCounter}</div>
    <div>Second count - {count.secondCounter}</div>
    <div>
      <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>
      <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
    <div>
              
      <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment counter2</button>
      <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement counter2</button>
    </div>
    </>
  )
}

export default CounterOne

