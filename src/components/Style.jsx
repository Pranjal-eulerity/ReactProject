import React from 'react' // double quotes vs single quotes? Style.
import { useEffect, useState } from "react"

const stylisticAndBuggy = (props) => { 
  const   [count , setCount  ]= useState(0)   
  const name = props.name ? props.name : 'Anonymous'  

  
  useEffect(()=>{
      console.log("Mounted or updated", name)
  })

  const handleClick =  (id)=>{
    console.log('Clicked', id)
  } 

  const items=props.items; 

  return <div> 
    <div> {/* ❌ nesting hell */}
    <div>
      {/* ❌ img with no alt text */}
      <img src="https://placekitten.com/100/100" />

      
      <p onClick="handleClick()">Click here maybe</p> 

      <ul>
        {
          items.map((item)=>(
            <li>{item.label}</li> // ❌ no key prop
          ))
        }
      </ul>

      <button onClick={()=>{console.log('count is', count)}}> {/* ❌ inline function */}
        Count is { count }
      </button>
    </div>
    </div>
  </div>
}

stylisticAndBuggy.propTypes = {
  name: "string", // ❌ invalid PropType
  items: "array" // ❌ same here
}

export default stylisticAndBuggy
