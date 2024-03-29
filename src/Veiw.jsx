import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Veiw() {
    const [user,setUsers]=useState()
    const params = useParams()
    async function getData() {
        try {
            const details = await axios.get(`https://65ccba76dd519126b83f66c0.mockapi.io/datas/${params.id}`)
            setUsers(details.data)
        } catch (error) {
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
                {user?.Email}
            </li>
            <li>
                {user?.Designation}
            </li>
            <li>
                {user?.Salary}
            </li>
            <li>
                {user?.Location}
            </li>
         </ul>
        </>
    )
}

export default Veiw
