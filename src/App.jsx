// import React, { useEffect, useState } from 'react'
// import "./App.css"
// import  SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// const App = () => {

//   const[message,setMessage]=useState("")

//   let commands=[
//     {
//       command:"hello",
//       callback:()=>{setMessage("hello rohini")}
//     },
//   ]
//   let {listening,transcript,browserSupportsSpeechRecognition}=useSpeechRecognition({commands})

//   if(!browserSupportsSpeechRecognition)
//   {
//     return "bye bye"
//   }
//   useEffect(()=>{
//     let speech=new SpeechSynthesisUtterance(message)
//     speechSynthesis.speak(speech)
//   })

//   return (
//     <div>
//       <h1>MicroPhone {listening?"on":"off"}</h1>
// <div id="box"> 
//   <h1>{message}</h1>
// </div>

//   <h1>{transcript}</h1>
//   <button onClick={SpeechRecognition.startListening}>TALK</button>
// </div>
      
    
//   )
// }

// export default App


// import React from 'react'
// import Rajajinagar, { ContextApi } from './ContextApi/ContextApi'
// import Dinga from './ContextApi/Dinga'

// const App = () => {
//   return (
//     <div>
//       <Rajajinagar>
//         <Dinga></Dinga>
//       </Rajajinagar>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Contianer from './ContextApi/Contianer'
import Theme, { ThemeContext } from './ContextApi/ThemeContext'
import './App.css'

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value={Theme}>
        <Contianer />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
