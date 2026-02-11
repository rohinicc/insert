import React from 'react'
import { createContext } from 'react'

export let ContextApi=createContext()

let Rajajinagar=({children})=>{
    console.log(children);
    return <ContextApi.Provider value={{name:"neha...."}}>
    {children}
</ContextApi.Provider>
}

export default Rajajinagar 


