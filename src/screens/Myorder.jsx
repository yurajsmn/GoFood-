import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Myorder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      let userEmail = localStorage.getItem("userEmail");
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.orderData) {
        setOrderData(data.orderData.order_data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData.length > 0 ? (
            orderData.slice(0).reverse().map((item) => {
              return item.map((arrayData, index) => {
                return (
                  <div key={index}>
                    {arrayData.Order_date ? (
                      <div className="m-auto mt-5">
                        <h3>{arrayData.Order_date}</h3>
                        <hr />
                      </div>
                    ) : (
                      <div className="col-12 col-md-6 col-lg-3">
                        <div
                          className="card mt-3"
                          style={{ width: "16rem", maxHeight: "360px" }}
                        >
                          <img
                            src={arrayData.img}
                            className="card-img-top"
                            alt="..."
                            style={{ height: "120px", objectFit: "fill" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{arrayData.name}</h5>
                            <div
                              className="container w-100 p-0"
                              style={{ height: "38px" }}
                            >
                              <span className="m-1">Qty: {arrayData.qty}</span>
                              <span className="m-1">Size: {arrayData.size}</span>
                              <div className="d-inline ms-2 h-100 w-20 fs-5">
                                ₹{arrayData.price}/-
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              });
            })
          ) : (
            <div className="m-5 w-100 text-center fs-3">No Orders Yet!</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
