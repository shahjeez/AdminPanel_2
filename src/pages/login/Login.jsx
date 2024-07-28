import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      // Simulate login API call
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      // Assuming the API returns a JSON object with user data
      const data = await response.json();
      console.log("Logged in user:", data);

      // Redirect to the dashboard or home page on successful login
      history.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='loginContainer'>
      <div className='loginBox'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className='error'>{error}</div>}
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
