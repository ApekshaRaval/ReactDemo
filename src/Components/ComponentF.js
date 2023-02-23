import React from 'react'
import { UserContext,ChannelContext } from '../App'
const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
    {
        name =>{
            return(
                <ChannelContext.Consumer>
                    {
                     channel =>{
                        return<div>user context value {name},user Channel value {channel}</div>
                     }   
                    }
                </ChannelContext.Consumer>
            )
        }
    }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
