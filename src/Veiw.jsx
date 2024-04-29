import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Veiw() {
    const [user,setUsers]=useState()
    const params = useParams()
    async function getData() {
        try {
            const details = await axios.get(`https://demo-1-ttrc.onrender.com/users/${params.id}`)
            setUsers(details.data)
            console.log(details.data)
        }
 catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <>
         <ul>
            <li>
                {user?.FirstName}
            </li>
            <li>
                {user?.LastName}
            </li>
            <li>
                {user?.RollNumber}
            </li>
            <li>
                {user?.Department}
            </li>
            <li>
                {user?.Year}
            </li>
            <li>
                {user?.Email}
            </li>
            <li>
                {user?.MobileNumber}
            </li>
            <li>
                {user?.ParentsName}
            </li>
            <li>
                {user?.DOB}
            </li>
            <li>
                {user?.BloodGroup}
            </li>
            <li>
                {user?.Address}
            </li>
         </ul>
        </>
    )
}

export default Veiw
