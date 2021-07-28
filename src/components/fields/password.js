import React, { useEffect, useRef } from 'react';

export default function Password({ password, handleFormInput, error }) {
  const passwordRef = useRef();
  useEffect(() => {
    if (error.password.length > 0) {
      passwordRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
      passwordRef.current.nextSibling.innerText = error.password;
    } else {
      passwordRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
      passwordRef.current.nextSibling.innerText = '';
    }
  });
  return (
    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        id="password"
        name="password"
        ref={passwordRef}
        type="password"
        value={password}
        autoComplete="current-password"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Password"
        onChange={(e) => handleFormInput(e)}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
    </div>
  );
}
