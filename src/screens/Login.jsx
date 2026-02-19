import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function Login() {
    let navigate=useNavigate()
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
    if (!json.success) {
      alert("Enter valid credential");
    }
  };
  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return <><div
        style={{
          backgroundColor: "gray",
          minHeight: "100vh",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          overflowY: "auto",
        }}
      >
        <div className="container" style={{ paddingTop: "20px" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{ color: "white" }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" style={{ color: "white" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={onChange}
              />
            </div>
              <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/login" className="m-3 btn btn-danger">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>;
}

export default Login;
