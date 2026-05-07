import React from 'react'

const Navbar = (props) => {
    // console.log(props)
    function changetheme(){
        props.settheme('dark')
    }
  return (
    <div>
        
      <button onClick={changetheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
