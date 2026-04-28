import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users= [
    {
      img:'https://plus.unsplash.com/premium_photo-1661765213398-c51562d8ce3c?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'violet',
      intro:'',
      tag:'Satisfied'
    },
    {
     img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'blue',
      intro:'',
      tag:'Underserved' 
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661638483466-0f783a1ada40?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       color:'green',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661608842453-278464b581e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'red',
      intro:'',
      tag:'Average '
    }
  ]
  return (
    <div> 
      <Section1 users={users}/>
      <Section2 />
      
    </div>
  )
}

export default App
