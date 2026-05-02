import React from 'react'

const App = () => {
const submithandler=(e)=>{
  e.preventDefault()
  console.log('submitted');
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
