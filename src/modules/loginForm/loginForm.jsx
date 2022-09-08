import React from 'react'
import { GoogleLogin} from '@react-oauth/google'

const LoginForm = () => {
  return (
    <div>
      <GoogleLogin
    onSuccess={credentialResponse => {localStorage.setItem(
      'key', JSON.stringify(credentialResponse));
      window.location.reload()}}
    onError={() => {console.log('Login Failed');}}/>
    </div>
  )
}

export default LoginForm
