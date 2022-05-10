import { getUser } from '@api/user'
import { getCookie } from '@cookie/'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isLogin } from 'services/isLogin'
import { setUser } from 'store/actions'

// version  {  1 : 일반 사용자  2 : 관리자 }
export const AuthRoute = ({ version,children}) => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const setUserData = async () => {
      if(isLogin()){
        dispatch(setUser(getUser(getCookie('token'))))
      }
    }
    setUserData()
  },[dispatch])
  
  if(isLogin())
    return children;
  else{
    return <Navigate to="/login" replace></Navigate>
    // if(version === 1){
    // }else if(version === 2){
    // }
  }
  
}
