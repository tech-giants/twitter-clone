import React, { useEffect, useRef } from 'react';

const Username = ({ username, handleFormInput, error }) => {
  const usernameRef = useRef();
  useEffect(() => {
    if (error.username.length > 0) {
      usernameRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
      usernameRef.current.nextSibling.innerText = error.username;
    } else {
      usernameRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
      usernameRef.current.nextSibling.innerText = '';
    }
  });
  return (
    <div>
      <label htmlFor="username-address" className="sr-only">
        Username address
      </label>
      <input
        id="username-address"
        ref={usernameRef}
        name="username"
        type="username"
        value={username}
        autoComplete="username"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Username"
        onChange={(e) => handleFormInput(e)}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
    </div>
  );
};
export default Username;
