import React from 'react'
import { ContextApi } from './ContextApi'

const Dinga = () => {
  return (
    <div>
      <ContextApi.Consumer >
        {
            (data)=>{
console.log(data);

            }
        }
      </ContextApi.Consumer>
    </div>
  )
}

export default Dinga
