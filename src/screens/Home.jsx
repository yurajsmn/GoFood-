import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Crouser from "../Components/Crouser";
export default function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [fooditaem, setfooditeam] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setfooditeam(response[0]);
    setfoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Crouser />
      </div>
      <div className="container ">
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {fooditaem.length > 0 ? (
                  fooditaem.map((item) => {
                    return <Card key={item._id} />;
                  })
                ) : (
                  <div>No Such Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
