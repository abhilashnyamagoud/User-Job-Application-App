import React from 'react'
import Form from './Form'
import axios from 'axios'
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
const App=(props)=>{
  
  const formInput=(formData)=>{
    console.log(formData)
    axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
      .then((responce)=>{
        const result=responce.data
        console.log(result)
      })
  }

  return(
    <div className='container'>
      <h1 className='display-5 text-light' >Apply for Job</h1>
      <Form formInput={formInput} />
      <Dashboard />
    </div>
  )
}

export default App