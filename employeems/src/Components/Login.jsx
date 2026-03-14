import "./style.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-4 rounded w-25 border loginForm">
        <h2 className="text-center">Login Page</h2>

        <form>
          <div className="mb-3">
            <label>
              <strong>Email:</strong>
            </label>

            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter email here"
              className="form-control"
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
              className="form-control"
            />
          </div>

          <button className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
