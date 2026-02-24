import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";

function Navbar() {
  const [cartview, setcartview] = useState(false);
  let data = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Link className="navbar-brand fs-1 fst-italic" to="#">
        GoFood
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item ">
            <Link className="nav-link me active fs-5" to="/">
              Home{" "}
            </Link>
          </li>
          {localStorage.getItem("authToken") ? (
            <li>
              <Link className="nav-link me active fs-5" to="/myOrder">
                MyOrders{" "}
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      {!localStorage.getItem("authToken") ? (
        <div>
          <Link className="btn bg-white text-success mx-1" to="/login">
            Login
          </Link>
          <Link className="btn bg-white text-success mx-1" to="/Signup">
            SignUp
          </Link>
        </div>
      ) : (
        <div>
          <div
            className="btn bg-white text-success mx-1"
            onClick={() => {
              setcartview(true);
            }}
          >
            MyCart{" "}
            <Badge pill bg="danger">
              {data.length}
            </Badge>
          </div>
          <div
            className="btn bg-white text-danger mx-1"
            onClick={() => {
              localStorage.removeItem("authToken");
              window.location.reload();
            }}
          >
            Logout
          </div>
        </div>
      )}
      {cartview ? (
        <Modal onClose={() => setcartview(false)}>
          <Cart onClose={() => setcartview(false)} />
        </Modal>
      ) : null}
    </nav>
  );
}

export default Navbar;
