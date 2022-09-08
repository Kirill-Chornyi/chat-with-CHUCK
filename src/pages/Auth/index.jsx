import React from 'react';

import './Auth.scss';
import {ShadowBox} from '../../components';
import {LoginForm} from '../../modules';

const Auth = () => {
  return (
    <section className='auth'>
      <div className="auth_content">
        <ShadowBox>
        Login with Google
          <LoginForm/>
        </ShadowBox>
        </div> 
    </section>
  )
}

export default Auth
