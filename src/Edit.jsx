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
      Email: "",
      Salary: "",
      Designation: "",
      Location: "",
    },
    onSubmit: async (values) => {
      try {
       let data = await axios.put(`http://localhost:3005/users/${params.id}`, values)
        alert("UPDATED")
      } catch (error) {
        console.log(error)
        alert("Something went wrong")
      }
    }
  })
  async function getData() {
    try {
      const data1 = await axios.get(`http://localhost:3005/users/${params.id}`)
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
