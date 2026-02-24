import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  useEffect(() => {
    // Get user's location automatically when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Use reverse geocoding API to get address from coordinates
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
            );
            const data = await response.json();
            const address = `${data.locality}, ${data.city}, ${data.principalSubdivision}`;
            setcredentials((prev) => ({
              ...prev,
              location: address,
            }));
          } catch (error) {
            console.error("Error getting address:", error);
            setcredentials((prev) => ({
              ...prev,
              location: `${latitude}, ${longitude}`,
            }));
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/login");
    } else {
      alert("Enter valid credential");
    }
  };
  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div
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
              <label htmlFor="Name" style={{ color: "white" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>
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

            <div className="form-group">
              <label
                htmlFor="exampleInputGeolocation"
                style={{ color: "white" }}
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                value={credentials.location}
                className="form-control"
                id="exampleInputGeolocation"
                placeholder="Detecting location..."
                onChange={onChange}
                readOnly
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/login" className="m-3 btn btn-danger">
                Already User
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
