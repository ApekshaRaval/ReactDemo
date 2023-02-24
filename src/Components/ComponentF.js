// import React from 'react'
// import { UserContext,ChannelContext } from '../App'
// const ComponentF = () => {
//   return (<>
//     <div>
//         <UserContext.Consumer>
//     {
//         name =>{
//             return(
//                 <ChannelContext.Consumer>
//                     {
//                      channel =>{
//                         return<div>user context value {name},user Channel value {channel}</div>
//                      }   
//                     }
//                 </ChannelContext.Consumer>
//             )
//         }
//     }
//       </UserContext.Consumer>
//     </div>
//     </>
//   )
// }

// export default ComponentF

import React,{useContext} from 'react'
import { CountContext } from '../App'
const ComponentF = () => {
  const countContext = useContext(CountContext)

  return (
    <div>
      counter F -{countContext.countState}
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
