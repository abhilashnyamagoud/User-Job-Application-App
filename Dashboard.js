import React,{useState,useEffect} from 'react'
import FrontEnd from './FrontEnd'
import axios from 'axios'
const App=(props)=>{
const[toggle,setToggle]=useState(false)
const[users,setUsers]=useState([])//all data from Server
const[filtered,setFiltered]=useState([]) //filtered as front-End developer
useEffect(()=>{
axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
    .then((responce)=>{
      const result=responce.data
      setUsers(result)
    })
    .catch((err)=>{
      alert(err.message)
    })
},[])

const handleClick=()=>{
  setToggle(!toggle)
  const result=users.filter((ele)=>{
    return ele.jobTitle='Front-End Developer'
  })
  setFiltered(result)
}

// const editItem=(task)=>{
//   const result=users.map((tsk)=>{
//     if(tsk._id===task._id){
//       return {...tsk,...task}
//     }else{
//       return {...tsk}
//     } 
//   })
//   setUsers(result)

// }

  return(
    <div className='container mt-3'>
      <h1>Admin Dashboard</h1>
      <button className='btn btn-primary mr-3'  onClick={handleClick} >Front-End Developers</button>
      <button className='btn btn-secondary mr-3'>Node Js Developers</button>
      <button className='btn btn-secondary mr-3' >Mean-Stack Developers</button>
      <button className='btn btn-secondary mr-3'>Full-Stack Developers</button>
        {
          toggle && <FrontEnd filtered={filtered}  />
        }
    </div>
  )
}

export default App