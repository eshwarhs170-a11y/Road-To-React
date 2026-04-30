import React, { useState } from 'react'

const App = () => {
const [num, setNum] = useState(10)
const [username, setusername] = useState('sam')
// setNum is like a react
function changeNum(){
  setNum(30)
  setusername('Man')
}
  return (
    <div>
      <h1>Value of num is {num} <br />Value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
