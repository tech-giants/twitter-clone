import React, { useEffect, useRef } from 'react';

export default function ConfirmPassword({ confirmPassword, handleFormInput, error }) {
  const confirmPasswordRef = useRef();
  useEffect(() => {
    if (error.confirmPassword.length > 0) {
      confirmPasswordRef.current.classList.replace('focus:border-indigo-500', 'focus:border-red-500');
      confirmPasswordRef.current.nextSibling.innerText = error.confirmPassword;
    } else {
      confirmPasswordRef.current.classList.replace('focus:border-red-500', 'focus:border-indigo-500');
      confirmPasswordRef.current.nextSibling.innerText = '';
    }
  });
  return (
    <div>
      <label htmlFor="confirmPassword" className="sr-only">
        Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        ref={confirmPasswordRef}
        type="password"
        value={confirmPassword}
        autoComplete="current-confirmPassword"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Confirm Password"
        onChange={(e) => handleFormInput(e)}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" />
    </div>
  );
}
