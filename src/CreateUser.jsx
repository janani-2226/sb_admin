import React from 'react'
import { Formik, useFormik } from 'formik'
import axios from 'axios'


function CreateUser() {
   const formik = useFormik({
      initialValues: {
         FirstName: "",
         LastName: "",
         RollNumber: "",
         Department: " ",
         Year: "",
         Email: "",
         MobileNumber: "",
         ParentsName: "",
         DOB: "",
         BloodGroup: "",
         Address: "",
      },
      // validate: (values) => {
      //    let errors = {};
      //    if (values.FirstName == "") {
      //       errors.FirstName = "Enter your value"
      //    }
      //    if (values.LastName == "") {
      //       errors.LastName = "Enter your value"
      //    }

      //    if (values.RollNumber == "") {
      //       errors.RollNumber = "Enter your RollNumber"
      //    }
      //    if (values.Department == "") {
      //       errors.Department = "Enter your Department"
      //    }

      //    if (values.Year == "") {
      //       errors.Year = "Enter your Year"
      //    }
      //    if (values.Email == "") {
      //       errors.Email = "Enter your Email"
      //    }

      //    if (values.MobileNumber == "") {
      //       errors.MobileNumber = "Enter your MobileNumber"
      //    }

      //    if (values.ParentsName == "") {
      //       errors.ParentsName = "Enter your ParentsName"
      //    }
      //    if (values.DOB == "") {
      //       errors.DOB = "Enter your DOB"
      //    }
      //    if (values.BloodGroup == "") {
      //       errors.BloodGroup = "Enter your BloodGroup "
      //    }
      //    if (values.Address == "") {
      //       errors.Address = "Enter your Address"
      //    }
      //    return errors;
      // },
      onSubmit: async (data, formik) => {
         try {
           await axios.post("https://demo-1-ttrc.onrender.com/users", data)
           alert("data posted")
            formik.resetForm()
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
                     <span style={{ color:" red" }}>{formik.errors.FirstName}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>LastName</label>
                     <input type="text" className='form-control'
                        name='LastName'
                        value={formik.values.LastName}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.LastName}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>RollNumber</label>
                     <input type="text" className='form-control'
                        name='RollNumber'
                        value={formik.values.RollNumber}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.RollNumber}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Department</label>
                     <input type="text" className='form-control'
                        name='Department'
                        value={formik.values.Department}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.Department}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Year</label>
                     <input type="text" className='form-control'
                        name='Year'
                        value={formik.values.Year}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.Year}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Email</label>
                     <input type="text" className='form-control'
                        name='Email'
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.Email}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>MobileNumber</label>
                     <input type="text" className='form-control'
                        name='MobileNumber'
                        value={formik.values.MobileNumber}
                        onChange={formik.handleChange} />
                     <span style={{ color:" red" }}>{formik.errors.MobileNumber}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>ParentsName</label>
                     <input type="text" className='form-control'
                        name='ParentsName'
                        value={formik.values.ParentsName}
                        onChange={formik.handleChange} />
                     <span style={{ color:" red" }}>{formik.errors.ParentsName}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>DOB</label>
                     <input type="date" className='form-control'
                        name='DOB'
                        value={formik.values.DOB}
                        onChange={formik.handleChange} />
                     <span style={{ color:" red" }}>{formik.errors.DOB}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>BloodGroup</label>
                     <input type="text" className='form-control'
                        name='BloodGroup'
                        value={formik.values.BloodGroup}
                        onChange={formik.handleChange} />
                     <span style={{ color:" red" }}>{formik.errors.BloodGroup}</span>
                  </div>

                  <div className='col-lg-12'>
                     <label typeof="text" className='form-label'>Address</label>
                     <input type="text" className='form-control'
                        name='Address'
                        value={formik.values.Address}
                        onChange={formik.handleChange} />
                     <span style={{ color:" red" }}>{formik.errors.Address}</span>
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
