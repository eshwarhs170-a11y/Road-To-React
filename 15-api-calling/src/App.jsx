import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
//  async function getdata(){
//     // console.log('data came')
//    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')

//    console.log(response)
//    const data=await response.json()
//    console.log(data)
//   }
const [data, setdata] = useState([])

const getdata=async ()=>{

  // const response= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(response);
  // const {data}= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(data);
  const response=await axios.get('https://picsum.photos/v2/list');
setdata(response.data)

}

  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello,{elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App