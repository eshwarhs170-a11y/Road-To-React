import React, { useState } from 'react'


const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault()
  // console.log(title);
  // console.log(details);
const copyTask =[...task]
copyTask.push({title,details})
settask(copyTask)
console.log(task)

  settitle('')
  setdetails('')
}

const Deletenote=(idx)=>{
  // console.log('note delete')
  const copyTask=[...task];
  // console.log(copyTask[idx])
  copyTask.splice(idx,1)

  settask(copyTask)
}

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start  p-10 '>

       <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input 
        type="text"
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
        placeholder='Enter notes heading' 
        value={title}
        onChange={(e)=>[
          settitle(e.target.value)
         
        ]}
        />

        <textarea 
        type="text"
        placeholder='Write Details here'
        className='px-5 w-full font-medium flex items-start flex-row py-2 h-32 border-2 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        />

         <button className='bg-white active:bg-gray-400 w-full font-medium outline-none text-black  px-5 py-2 rounded'>Add Notes</button>

      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>

      <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex h-[90%] items-start justify-start flex-wrap gap-5 mt-5 overflow-auto'>
        {task.map(function(elem,idx){

          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black bg-cover pb-5 pt-9 px-4 py-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/688/small/sticky-note-paper-background-free-png.png')]">
           
           
            <div> 
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-4 text-sm leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              Deletenote(idx)
            }} className='w-full py-1 text-xs rounded font-bold bg-red-500 cursor-pointer active:scale-95 text-white'>Delete </button>
          </div>
        })}
        
        </div>
      </div>
    </div>
  )
}

export default App
