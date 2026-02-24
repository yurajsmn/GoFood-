import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  let option = props.options;
  let priceOptions = Object.keys(option);
  let foodItems = props.foodItems;
  const priceref = useRef();
  let finalprice = qty * parseInt(option[size]);

  const handleaddtocart = async () => {
    let food = null;
    for (const item of data) {
      if (item.id === foodItems._id) {
        food = item;
        break;
      }
    }

    if (food) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: foodItems._id,
          price: finalprice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: foodItems._id,
          name: foodItems.name,
          price: finalprice,
          qty: qty,
          size: size,
          img: foodItems.img,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: foodItems._id,
      name: foodItems.name,
      price: finalprice,
      qty: qty,
      size: size,
      img: foodItems.img,
    });
    // console.log(data);
  };

  useEffect(() => {
    setsize(priceref.current.value);
  });
  return (
    <div>
      <div
        className="card mt-3"
        style={{ width: "18rem", maxHeight: "360px", objectFit: "fill" }}
      >
        <img
          src={foodItems.img}
          className="card-img-top"
          alt="..."
          width={200}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">{foodItems.name}</h5>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-success rounded"
              onChange={(e) => setqty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100  bg-success rounded "
              ref={priceref}
              onChange={(e) => setsize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">${finalprice}</div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleaddtocart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
