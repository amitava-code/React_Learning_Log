import React, { useState } from 'react'

const App = () => {

  let [count, setCount]  = useState(0)

  console.log(count)

  let [Flag, setFlag] = useState(true)

  console.log(Flag)

  return (
    <div>
      <h1>Count is - {count} </h1>

      
      <button

      onClick={()=>{

        setCount(count+1)

      }}


  



      >

        increment 
      </button>


      <button

      onClick={()=>{
        setFlag(false)
      }}
      
      >
        boolean
      </button>


    
    </div>
  )
}

export default App