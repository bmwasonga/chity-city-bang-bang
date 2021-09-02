import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signInImage from '../assets/signup.jpg';

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleChange = () => {};

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields ">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? 'Sign Up' : 'Sign in'}</p>
          <form onSubmit={() => {}}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="full name">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="user name">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phone number">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatar url">Avatar URL</label>
                <input
                  type="text"
                  name="avatarURL"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="Password">Password</label>
              <input
                type="Password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirm Password">Confirm Password</label>
                <input
                  type="Password"
                  name="confirmPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>

          <div className="auth__form-container_fields-account ">
            <p>
              {isSignUp
                ? 'Already have an account? '
                : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignUp ? 'Sign in' : 'Sign Up'}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image ">
        <img src={signInImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
