import React, { useEffect, useRef, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useHistory } from 'react-router-dom';
import Username from '../fields/username';
import Password from '../fields/password';
import FormValidation from '../utils/formValidator';
import { Login } from '../../services/authService';

export default function LoginForm() {
  const [loginError, setLoginError] = useState('');
  const formRef = useRef();
  const history = useHistory();
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    formRef.current.innerText = loginError;
  });

  const handleFormInput = (e) => {
    const [returnForm, returnError] = FormValidation(e, formInput, error);
    setError((prevError) => (
      {
        ...prevError,
        username: returnError.username,
        password: returnError.password,
      }
    ));
    setFormInput((prevFormInput) => (
      {
        ...prevFormInput,
        username: returnForm.username,
        password: returnForm.password,
      }
    ));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Login(formInput)
      .then(() => {
        setLoginError('');
        history.push('/');
      })
      .catch((responseError) => {
        setLoginError(responseError.response.data.detail);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <Username
              username={formInput.username}
              handleFormInput={handleFormInput}
              error={error}
            />
            <Password
              password={formInput.password}
              handleFormInput={handleFormInput}
              error={error}
            />
          </div>
          <div className="flex items-center justify-between">
            <span ref={formRef} className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
            <div className="text-sm">
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                If you do not have account then sign up!
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
