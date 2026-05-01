// import React, { useState } from 'react'

// const App = () => {
// const [num, setNum] = useState(10)
// const [username, setusername] = useState('sam')
// // setNum is like a react
// function changeNum(){
//   setNum(30)
//   setusername('Man')
// }
//   return (
//     <div>
//       <h1>Value of num is {num} <br />Value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function Increasenum(){
    setnum(num+1)
  }
  function Decreasenum(){
    setnum(num-1)
  }
  function jump(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increasenum}>Increase</button>
      <button onClick={Decreasenum}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default App
