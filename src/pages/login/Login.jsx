import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const {login} = useContext(AuthContext)

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
          <Link to="/register"><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input autoComplete="false" placeholder="Username" type="text" />
            <input  autoComplete="false" placeholder="Password" type="password" />
            <button onClick={(e) => {
              e.preventDefault()
              login()
            }}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
