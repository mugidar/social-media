import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setError(err.response.data)
      
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            amet corporis eum, illum facilis iusto, minima incidunt repellat
            pariatur id, soluta nobis laboriosam natus earum!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              name="username"
              onChange={handleChange}
              autoComplete="false"
              placeholder="Username"
              type="text"
            />
            <input
              name="email"
              onChange={handleChange}
              autoComplete="false"
              placeholder="Email"
              type="email"
            />
            <input
              name="password"
              onChange={handleChange}
              autoComplete="false"
              placeholder="Password"
              type="password"
            />
            <input
              name="name"
              onChange={handleChange}
              autoComplete="false"
              placeholder="Full name"
              type="text"
            />
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
