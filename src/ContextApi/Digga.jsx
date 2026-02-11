import React from 'react'
import { ContextApi } from './ContextApi'

const Digga = () => {
  return (
    <div>
      <ContextApi.Consumer>
        {
        (data)=>{
            console.log(data);
            
        }
}
      </ContextApi.Consumer>
    </div>
  )
}

export default Digga
