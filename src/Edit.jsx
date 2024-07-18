import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { useFormik } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Edit() {
  const params = useParams()
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      RollNumber: "",
      Department: "",
      Email: "",
    },
    onSubmit: async (values) => {
      try {
       let data = await axios.put(`https://demo-1-ttrc.onrender.com/users/${params.id}`, values)
        alert("UPDATED")
      } catch (error) {
        console.log(error)
        alert("Something went wrong")
      }
    }
  })
  async function getData() {
    try {
      const data1 = await axios.get(`https://demo-1-ttrc.onrender.com/users/${params.id}`)
      delete data1.data._id
      formik.setValues(data1.data)

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    getData()
  }, [])
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
                value={formik.values.LastName}
                onChange={formik.handleChange}
              /> 
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>RollNumber</label>
              <input type="text" className='form-control'
                name='RollNumber'
                value={formik.values.RollNumber}
                onChange={formik.handleChange}
              />
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>Department</label>
              <input type="text" className='form-control'
                name='Department'
                value={formik.values.Department}
                onChange={formik.handleChange}
              />
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>MobileNumber</label>
              <input type="text" className='form-control'
                name='MobileNumber'
                value={formik.values.MobileNumber}
                onChange={formik.handleChange}
              />
          </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>Email</label>
              <input type="text" className='form-control'
                name='Email'
                value={formik.values.Email}
                onChange={formik.handleChange} />
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>MobileNumber</label>
              <input type="text" className='form-control'
                name='MobileNumber'
                value={formik.values.MobileNumber}
                onChange={formik.handleChange} />
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>ParentsName</label>
              <input type="text" className='form-control'
                name='ParentsName'
                value={formik.values.ParentsName}
                onChange={formik.handleChange} />
            </div>
            <div className='col-lg-6'>
              <label typeof="text" className='form-label'>DOB</label>
              <input type="text" className='form-control'
                name='DOB'
                value={formik.values.DOB}
                onChange={formik.handleChange} />
            </div><div className='col-lg-6'>
              <label typeof="text" className='form-label'>BloodGroup</label>
              <input type="text" className='form-control'
                name='BloodGroup'
                value={formik.values.BloodGroup}
                onChange={formik.handleChange} />
            </div><div className='col-lg-6'>
              <label typeof="text" className='form-label'>Address</label>
              <input type="text" className='form-control'
                name='Address'
                value={formik.values.Address}
                onChange={formik.handleChange} />
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

export default Edit
