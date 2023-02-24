import React,{useReducer} from 'react'

const initialState=0



const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return state + action.value
            case 'decrement':
                return state - action.value
                case 'reset':
                    return initialState
                    default:
                        return state
    }

}


const CounterTwo = () => {

    const[count,dispatch] = useReducer(reducer,initialState)
    const[countTwo,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <>
   <div>First Counter:{count}</div>
    <div>
      <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:'reset',})}>Reset</button>
    </div>
    <div> Second Counter:{countTwo}</div>
    <div>
      <button onClick={()=>dispatchTwo({type:'increment',value:1})}>increment</button>
      <button onClick={()=>dispatchTwo({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>
    </div>
    </>
  )
}

export default CounterTwo
