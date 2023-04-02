import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState(null);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       await login(inputs);
       if(currentUser) {
        navigate("/")
       }
     
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            amet corporis eum, illum facilis iusto, minima incidunt repellat
            pariatur id, soluta nobis laboriosam natus earum!
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              name="username"
              autoComplete="false"
              placeholder="Username"
              type="text"
              onChange={handleChange}
            />
            <input
              name="password"
              autoComplete="false"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
            {error && <p>{error}</p>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
