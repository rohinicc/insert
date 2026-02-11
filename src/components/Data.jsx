import React from 'react'
import Hoc from './Hoc'
import Cart from './Cart';

const  Data = (props) => {
    console.log(props);
    
  return (
    <div>
      <Cart></Cart>
    </div>
  )
}

export default  Hoc(Data)
