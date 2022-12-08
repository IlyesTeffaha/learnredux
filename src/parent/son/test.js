import React from 'react'
import { useSelector } from 'react-redux'

function Test() {

    const data = useSelector((state)=>state.user.value)

  return (
    <div>this is the email :
        <p>{data.email}</p>
    </div>
  )
}

export default Test