import React from 'react'
import { useSelector } from 'react-redux'
import { Login } from '../pages/Loginpage/Login'

export const PrivateCompo = ({children}) => {
  
    const isAuth = useSelector((store) => store.registerReducer.isAuth)

    console.log(isAuth)

  return (
    <div>
        {isAuth ? children : <Login /> }
    </div>
  )
}
