import React from 'react'

const App = () => {
  
  function MouseEnter(){
    console.log('mouse broo')
  }
  function inputChanging(elem){
    console.log(elem.target.value)
  }
  const pagescrolling=(elem)=>{
    if(elem>0){
      console.log('seedha scrolling ')
    }
    else{
      console.log('ulta scrolling')
    }
  }
  return (
    <div>
      <h1>Hello Ram</h1>
      <button onMouseEnter={MouseEnter} onClick={function(){
      console.log('hello guys hi')
      }}>Change user</button>
      <input onChange={inputChanging} type="text" placeholder='Enter your name'  />
      <div onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} className='box'></div>
      <div onWheel={(elem)=>{
        pagescrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </div>
  )
}

export default App
