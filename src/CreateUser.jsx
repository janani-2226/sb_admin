import React from 'react'
import { useState } from 'react';
import { Formik, useFormik } from 'formik'
import axios from 'axios'


function CreateUser() {
   const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
   const formik = useFormik({
      initialValues: {
         // FirstName: "",
         // LastName: "",
         // RollNumber: "",
         // Department: " ",
         // Year: "",
         // Email: "",
         // MobileNumber: "",
         // ParentsName: "",
         // DOB: "",
         // BloodGroup: "",
         // Address: "",
         Title:"",
         ProjectImage:"",
         OriginalPrice:"",
         OfferPrice:"",
         SellingPrice:"",
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
                     <label typeof="text" className='form-label'>Title</label>
                     <input type="text" className='form-control'
                        name='Title'
                        value={formik.values.Title}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.Title}</span>
                  </div>
                  <div className='col-lg-6'>
                            <label className='form-label'>Project Image</label>
                            <input type="file" className='form-control' onChange={handleChange} />
                            {fileUrl && <img src={fileUrl} alt="Preview" width="100" />}
                        </div>
                  {/* <div className="col-lg-6">
                  <p>Project Image:</p>
                  <input type="file" onChange={handleChange} />
                   <img src={file} />
                  </div> */}
                  {/* <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Project Image</label>
                     <input type="text" className='form-control'
                        name='ProjectImage'
                        value={formik.values.ProjectImage}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.ProjectImage}</span>
                  </div> */}
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Original Price</label>
                     <input type="text" className='form-control'
                        name='OriginalPrice'
                        value={formik.values.OriginalPrice}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.OriginalPrice}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Selling Price</label>
                     <input type="text" className='form-control'
                        name='SellingPrice'
                        value={formik.values.SellingPrice}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.SellingPrice}</span>
                  </div>
                  <div className='col-lg-6'>
                     <label typeof="text" className='form-label'>Description</label>
                     <input type="text" className='form-control'
                        name='Description'
                        value={formik.values.Description}
                        onChange={formik.handleChange}
                     />
                     <span style={{ color:" red" }}>{formik.errors.Description}</span>
                  </div>
                  {/* <div className='col-lg-6'>
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
                  </div> */}
                  <div className='col-lg-12 mt-4'>
                     <button className='btn btn-primary'>Submit</button>
                  </div>
               </div>
            </div>
         </form>

      </>
   )
}

export default CreateUser
