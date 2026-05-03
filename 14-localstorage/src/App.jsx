import React from 'react'

const App = () => {

//   localStorage.setItem('user','sarthak');
//   localStorage.setItem('age',18);
// console.log(user)
// const user= localStorage.getItem('user')
// const age=localStorage.getItem('age')
// console.log(age,user)
// localStorage.removeItem('user')

// const user={
//   username:'sarthak',
//   age:14,
//   city:'bhopal'
// }
// localStorage.setItem('user',JSON.stringify(user))

const user=JSON.parse(localStorage.getItem('user'))
console.log(user)

  return (
    <div>
      App
    </div>
  )
}

export default App
