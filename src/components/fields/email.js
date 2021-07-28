import React, { useEffect, useRef } from 'react';

const Email = ({ email, handleFormInput, error }) => {
  const emailRef = useRef();
  useEffect(() => {
    if (error.email.length > 0) {
      emailRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
      emailRef.current.nextSibling.innerText = error.email;
    } else {
      emailRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
      emailRef.current.nextSibling.innerText = '';
    }
  });
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        ref={emailRef}
        name="email"
        type="email"
        value={email}
        autoComplete="email"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Email address"
        onChange={(e) => handleFormInput(e)}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
    </div>
  );
};
export default Email;
