import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.scss"

const Register = () => {
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
          <Link to="/login"><button>Log in</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input autoComplete="false" placeholder="Username" type="text" />
            <input  autoComplete="false" placeholder="Email" type="email" />
            <input  autoComplete="false" placeholder="Name" type="text" />
            <input  autoComplete="false" placeholder="Password" type="password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register