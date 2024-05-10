import React, { useState } from 'react';

import './Signup.css';



const Signup = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = (e) => {

    e.preventDefault();

    // Implement signup logic here

  };



  return (

    <section className="signup" id="signup">

      <h2>Signup</h2>

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

        <div className="form-group">

          <label htmlFor="confirmPassword">Confirm Password:</label>

          <input

            type="password"

            id="confirmPassword"

            value={confirmPassword}

            onChange={(e) => setConfirmPassword(e.target.value)}

            required

          />

        </div>

        <button type="submit" className="btn btn-primary">Signup</button>

      </form>

    </section>

  );

}



export default Signup;
