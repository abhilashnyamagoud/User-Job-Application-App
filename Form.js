import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import validator from 'validator';

const Form=(props)=>{
    const{formInput}=props
    const[id,setId]=useState(uuidv4())
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[contact,setContact]=useState('')
    const[job,setJob]=useState('')
    const[skills,setSkills]=useState('')    
    const[experience,setExperience]=useState('')
    
    const[formErrors,setFormErrors]=useState({})
    const errors={}

    // const jobs=[Front-EndDeveloper,]

    const handleChange=(e)=>{
        setName(e.target.value)
        console.log(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handleContact=(e)=>{
        setContact(e.target.value)
        console.log(e.target.value)
    }
    const handleJobChange=(e)=>{
        setJob(e.target.value)
        console.log(e.target.value)
    }
    const handleSkills=(e)=>{
        setSkills(e.target.value)
    }
     const handleExp=(e)=>{ setExperience(e.target.value)}
    
     const runValidation=()=>{
        //name
        if(name.trim().length===0){
            errors.name='name cannot be blank'
        }
        //email
        if(email.trim().length===0){
            errors.email='email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email='invalid Email'
        }
        //phone
        if(contact.trim().length===0){
            errors.contact='Please Enter Phone Number'
        }
        //JobTitle
        if(job.length===0){
            errors.job='Please Select Field '
        }
        //experience
        if(experience.trim().length===0){
            errors.experience='Add Your Experience'
        }
        //skills
        if(skills.trim().length===0){
            errors.skills='Field Should Not Be Empty'
        }
     }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length===0){
            setFormErrors({})
            const formData={
                id:id,
                name:name,
                email:email,
                phone:contact,
                jobTitle:job,
                experience:experience,
                skills:skills
            }
           formInput(formData)  
           setId(uuidv4())
           setName('')
           setEmail('')
           setContact('')
           setJob('')
           setSkills('')
           setExperience('')
        }else{
            setFormErrors(errors)
        }

        
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label>Fullname</label>
                <input className='form-control' placeholder='Enter Name' type='text' value={name} onChange={handleChange} />
                {
                    formErrors.name && <span className='text-danger'>{formErrors.name}</span>
                }
                </div><hr/>
                <div className='form-group'>
                <label>Emailaddress</label>
                <input className='form-control' placeholder='example@email.com' type='text' value={email} onChange={handleEmail}/>
                {
                    formErrors.email && <span className='text-danger'>{formErrors.email}</span>
                }
                </div>
                <div className='form-group'>
                <label>Contact Number</label>
                <input className='form-control' placeholder='+91' type='number' value={contact} onChange={handleContact} />
                {
                    formErrors.contact && <span className='text-danger'>{formErrors.contact} </span>
                }
                </div><hr/>
                <div className='form-group' >
                <label>Applying for Job</label>
                <select className='form-control' value={job} onChange={handleJobChange} >
                <option value=''>select</option>
                <option value='Front-End Developer'>Front-End Developer</option>
                <option value='Node.js Developer'>Node-Js Developer</option>
                <option value='MEAN Stack Developer'>MEAN-Stack Developer</option>
                <option value='FULL Stack Developer' >Full-Stack Developer</option>
                </select>
                {
                    formErrors.job && <span className='text-danger'>{formErrors.job} </span>
                }
                </div>
                <div className='form-group'>
                    <label>Experience</label>
                    <input className='form-control' type='text' placeholder='Add Years'  value={experience} onChange={handleExp} />
                    {
                        formErrors.experience && <span className='text-danger'>{formErrors.experience} </span>
                    }
                </div>
               <div className='form-group'>
               <label>Technical Skills</label>
                <textarea className='form-control' value={skills} onChange={handleSkills} placeholder="Technical Skills"></textarea><br/>
                {
                    formErrors.skills && <span className='text-danger'>{formErrors.skills} </span>
                }
               </div>
                <input className='btn btn-primary' type='submit' value='Send Application' />
            </form>
        </div>
    )

}

export default Form


