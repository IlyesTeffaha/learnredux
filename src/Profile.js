import React from 'react'
import {useSelector} from 'react-redux'


function Profile() {

const data = useSelector((state)=>state.user.value)


  return (
    <div>
        <p>email :{data.email}</p>
        <p>name :{data.name}</p>
        <p>last name :{data.lastname}</p>
        <p>address :{data.address}</p>

    </div>
  )
}

export default Profile