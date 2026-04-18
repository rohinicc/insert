import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { FaToggleOff } from "react-icons/fa"
import { FaToggleOn } from "react-icons/fa"

const Contianer = () => {
    const { dark, light } = useContext(ThemeContext)
    const [isDark, setIsDark] = useState(true)
    

    const handleTheme = () => {
        setIsDark((prev) => !prev)
    }

  return (
    
    <div>
        <div id='box' style={isDark ? dark : light}>
            <h1 style={{color: isDark ? "black" : "white"}}>Theme of TEXT</h1>
            <button onClick={handleTheme}>
                {isDark ? <FaToggleOff /> : <FaToggleOn />}
            </button>
        </div>
      
    </div>
  )
}


export default Contianer
