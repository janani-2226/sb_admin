import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {
    
    const [details, setDetails] = useState([])
    async function getData() {
        try {
            var data1 = await axios.get("https://demo-1-ttrc.onrender.com/users",);
            setDetails([...data1.data])
            console.log(details)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    let  handleDelete=async(id)=> {
try {
    await axios.delete(`https://demo-1-ttrc.onrender.com/users/${id}`)
    alert("User Deleted")
    getData()
} catch (error) {
    console.log(error)
}
    }
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/createusers" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Product Data Table</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Project Image</th>
                                    <th>Original Price</th>
                                    <th>Selling Price</th>
                                    <th>Description</th>
                                    {/* <th>Email</th> */}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details.map((e) => {
                                        return (<tr>
                                            <td>{e.Title}</td>
                                            {/* <td><img src={e.ProjectImage} alt={e.Title} width="100" /></td> */}
                                            <img
                                                    src={e.ProjectImage}
                                                    alt={e.Title}
                                                    width="100"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleImageClick(e.ProjectImage)}
                                                />
                                            <td>{e.OriginalPrice}</td>
                                            <td>{e.SellingPrice}</td>
                                            <td>{e.Description}</td>
                                            {/* <td>{e.Email}</td> */}
                                            <td><Link className='btn btn-primary ml-2' to={`/veiw/${e._id}`}> view </Link>
                                                <Link className='btn btn-secondary ml-2' to={`/edit/${e._id}`}>edit</Link>
                                                <button className='btn btn-danger  ml-2' onClick={() => {
                                                    handleDelete(e._id)
                                                }}>delete</button></td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
