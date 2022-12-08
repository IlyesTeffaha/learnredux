import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from './Features/user'

export default function Login() {

const dispatch = useDispatch();

  return (
    <div>

      <button onClick={()=>dispatch(
        login({
          email:"ilyes@gmail.com" ,name:"ilyes", lastname: "teffaha", address:"tunis"
          })
          )
          }
          >
            Connect</button>
            
      <button onClick={()=>dispatch(
        logout()
          )
          }
          >
            Logout</button>
      </div>
  )
}

 