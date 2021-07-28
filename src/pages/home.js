import React from 'react';
import { useHistory } from 'react-router-dom';
import { Logout } from '../services/authService';
// import AccessControl from '../services/hocFunctions/accessControl';

function Home() {
  const history = useHistory();
  const handleClick = () => {
    Logout();
    history.push('/login');
  };
  return (
    <>
      <button className="bg-green-500 m-3" type="button" onClick={handleClick}>Logout</button>
    </>
  );
}

export default Home;
