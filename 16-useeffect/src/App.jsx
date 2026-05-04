// import React, { useEffect, useState } from 'react'

// const App = () => {
  

// const [num, setnum] = useState(0)
// const [num2, setnum2] = useState(100)

// useEffect(function(){
//   console.log('its running')
// }, [num] )



//   return (
//     <div>
//        <h1>value of num is {num}</h1>
//        <h1>value of num2 is {num2}</h1>
//        <button onMouseEnter={()=>{
//         setnum(num+1)
//        }}
//        onMouseLeave={()=>{
//         setnum2(num2+10)
//        }}
//        >Click</button>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react'

const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  function achanging(){
  console.log('A is changed')
}
function bchanging(){
  console.log('B is changed')
}

useEffect(function(){
  achanging()
  console.log('use effect')
},[a])

useEffect(function(){
  bchanging()
  console.log('use effect')
},[b])
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        seta(a+1);

      }}>Change A</button>
      <button onClick={()=>{
        setb(b-1);
      }}>Change B</button>
    </div>
  )
}

export default App

