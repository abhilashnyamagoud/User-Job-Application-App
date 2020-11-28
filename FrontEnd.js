import React,{useState,useEffect} from 'react'
import axios from 'axios'
const FrontEnd=(props)=>{
const{filtered}=props
const[singleData,setSingleData]=useState([])
// console.log(users)



const profile=(id)=>{
    // console.log(id)
    axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
    .then((responce)=>{
        const result=responce.data
        setSingleData(result)
        // console.log(result)

    })
    .catch((err)=>{
        alert(err.message)
    })
  
    
    alert( `Job Profile
     ContactNumber: ${singleData.phone}  
     Email: ${singleData.email}
     Skills: ${singleData.skills}
     Expirience: ${singleData.experience}
    `  )
}
    const updateShortList=(user)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${user._id}`,{
            status:'shortlisted'
        })
        .then((responce)=>{
            const value=responce.data
            console.log(value)
            
            
            
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    const updater=(user)=>{
        // console.log(user._id)
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${user._id}`,{
            status:'rejected'
        })
        .then((responce)=>{
            const value=responce.data
            console.log(value)

        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    return(
        <div className='mt-3'>
            <h1>Front-End Developers</h1>
            <p>list Of Candidates applied for Front-End Developers</p>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map((ele,i)=>{
                            return (
                                <tr key={i} >
                                   <td>{ele.name}</td> 
                                   <td>{ele.skills}</td>
                            <td>{ele.experience}</td>
                            <td>{ele.createdAt} </td>
                            <td><button onClick={()=>{
                                profile(ele._id) 
                            }} className='btn btn-primary'>ViewDetails</button> </td>
                            
                            <td> {ele.status==='applied' ?
                                    <div>
                                 <button  onClick={()=>{
                                    updateShortList(ele)
                                }} className='btn btn-success'>Shortlist</button><button onClick={()=>{
                                    updater(ele)}} className='btn btn-danger'>Reject</button>
                                 </div>
                                :ele.status==='shortlisted'?
                                <button className='btn btn-success mr-2'>ShortList</button>:
                                <button  className='btn btn-danger'>Reject</button>
                                }
                                 </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default FrontEnd