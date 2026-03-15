import { useState } from "react";
import "./style.css";
import axios from "axios";

const Login = () => {
    const [values,setValues]=useState({
        email:'',
        password:''
    })
    const handleSubmit=(event)=>{
       event.preventDefault()
       axios.post('http://localhost:3000/auth/adminlogin',values)
       .then (result=>console.log(result))
       .catch(err=>console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-4 rounded w-25 border loginForm">
        <h2 className="text-center">Login Page</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>
              <strong>Email:</strong>
            </label>

            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter email here"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label>
              <strong>Password:</strong>
            </label>

            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter password here"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              className="form-control"
            />
          </div>
          <button className="btn btn-success w-100">Log In</button>
          <div className="mb-3">
            <input type="checkbox" name="tick" id="tick" />
            <label htmlFor="">
              <strong>You are agree with terms and conditions?</strong>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
