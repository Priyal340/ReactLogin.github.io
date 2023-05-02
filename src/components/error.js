import React from 'react';
import { useNavigate } from "react-router-dom"


const Error = () => {

  const history = useNavigate();

  return (
    <>
      <div className="container">
        <h1>404 ERROR ! Page Not Found !!</h1>
        <button className='btn btn-primary' onClick={() => history("/")}>Redirect To Login Page</button>
      </div>
    </>
  );
}

export default Error;
