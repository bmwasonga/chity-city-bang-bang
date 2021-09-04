import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signInImage from '../assets/signup.jpg';

const cookies = new Cookies();

const initialState = {
  fullName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
};

const Auth: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    // console.log(form);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { fullName, userName, phoneNumber, avatarURL, password } = form;

    const URL = `http://localhost:5000/auth`;

    const {
      data: { token, userId, hashedPassword },
    } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'} `, {
      userName,
      password,
      fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set('token', token);
    cookies.set('userName', userName);
    cookies.set('fullName', fullName);
    cookies.set('userId', userId);

    if (isSignUp) {
      cookies.set('phoneNumber', phoneNumber);
      cookies.set('avatarURL', avatarURL);
      cookies.set('hashedPassword', hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields ">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? 'Sign Up' : 'Sign in'}</p>
          <form onSubmit={handleSubmit}>
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
                name="userName"
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

            <div className="auth__form-container_fields-content_button">
              <button>{isSignUp ? 'Sign Up' : 'Sign in'}</button>
            </div>
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
