import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signInImage from '../assets/signup.jpg';

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth__form-container">
      <div className="auth__form-container-fields">
        <div className="auth__form-container-fields-content">
          <p>{isSignUp ? 'Sign Up' : 'Sign in'}</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
