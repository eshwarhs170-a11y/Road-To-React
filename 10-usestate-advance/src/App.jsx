import React, { useState } from 'react'

const App = () => {
  // const [num, setnum] = useState(10)
  // const btnclicked=()=>{
  //   console.log(num)
  //   setnum(30)
  //   console.log(num)


  // const [num, setnum] = useState({user:'bro',age:20})
  // const btnclicked=()=>{
  //   const newNum={...num}
  //   newNum.user='sis';
  //   newNum.age='10';
  //   console.log(newNum);
  //   setnum(newNum)
  
  // }

  // const [num, setnum] = useState([10,20,30])

  // const btnclicked=()=>{
  //   const newnum=[...num];
  //   newnum.push(99)
  //   // console.log(newnum)
  //   setnum(newnum)
  // }

  const [num, setnum] = useState(10)
  const btnclicked=()=>{
    setnum(prev =>(prev+1))
    setnum(prev =>(prev+1))
    setnum(prev =>(prev+1))
  }

  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num }</h1>
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App
