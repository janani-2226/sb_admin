import React from 'react'
import { Formik, useFormik } from 'formik'
import axios from 'axios'


function CreateUser() {
   const formik = useFormik({
    initialValues:{
        FirstName:"",
        LastName:"",
        Email:"",
        Salary:"",
        Designation:"",
        Location:"",
    },
    onSubmit:async (data)=>{
        try {
            await axios.post("http://localhost:3003/users",data)
            alert("data posted")
        }
         catch (error) {
            console.log(error)
        } 
        
     }
   })
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>FirstName</label>
               <input type="text" className='form-control'
               name='FirstName'
               value={formik.values.FirstName}
               onChange={formik.handleChange}
               />
            </div>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>LastName</label>
               <input type="text" className='form-control'
               name='LastName'
               value={formik.values.LastNametName}
               onChange={formik.handleChange}
               />
            </div>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>Email</label>
               <input type="text" className='form-control'
               name='Email'
               value={formik.values.Email}
               onChange={formik.handleChange}
               />
            </div>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>Designation</label>
               <input type="text" className='form-control'
               name='Designation'
               value={formik.values.Designation}
               onChange={formik.handleChange}
               />
            </div>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>Salary</label>
               <input type="text" className='form-control'
               name='Salary'
               value={formik.values.Salary}
               onChange={formik.handleChange}
               />
            </div>
            <div className='col-lg-6'>
               <label typeof="text" className='form-label'>Location</label>
               <input type="text" className='form-control'
               name='Location'
               value={formik.values.Location}
               onChange={formik.handleChange}/>
            </div>
            <div className='col-lg-6 mt-4'>
               <button className='btn btn-primary'>Submit</button>
            </div>
        </div>
      </div>
      </form>
      
    </>
  )
}

export default CreateUser
