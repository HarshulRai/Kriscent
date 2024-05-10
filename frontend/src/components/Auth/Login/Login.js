import React, { useState } from 'react';

import './Login.css';



const Login = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {

    e.preventDefault();

    // Implement login logic here

  };



  return (

    <section className="login" id="login">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="email">Email:</label>

          <input

            type="email"

            id="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            required

          />

        </div>

        <div className="form-group">

          <label htmlFor="password">Password:</label>

          <input

            type="password"

            id="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            required

          />

        </div>

        <button type="submit" className="btn btn-primary">Login</button>

      </form>

    </section>

  );

}



export default Login;
