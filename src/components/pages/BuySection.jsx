import React, { useState } from "react";
import { useParams } from "react-router-dom";
import sections from "../../data/sections.json";
import { useAuth } from "../../context/AuthContext";
import "./BuySection.css";
const BuySection = () => {
  const { user } = useAuth();
  const [count, setCount] = useState(1);
  const { productName } = useParams();
  const product = sections
    .flatMap((section) => section.products || [])
    .find((p) => p.name === decodeURIComponent(productName));

  const addToCart = (product, count = 1) => {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  // clean the price string and convert to number
  const cleanedPrice = parseFloat(
    String(product.price).replace(/,/g, "").trim()
  );

  // find if item already exists
  const itemIndex = existingCart.findIndex((item) => item.name === product.name);

  if (itemIndex === -1) {
    // item does not exist → add new one
    existingCart.push({
      ...product,
      price: cleanedPrice, // ensure number
      quantity: count || 1,
    });
  } else {
    // item already exists → update quantity
    existingCart[itemIndex].quantity += count || 1;

    // also ensure price is stored as number
    existingCart[itemIndex].price = cleanedPrice;
  }

  // update localStorage
  localStorage.setItem("cart", JSON.stringify(existingCart));
};

  return (
    <div className="buy_section">
      <div className="catagory_detail">
        <h1>{product.name}</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/products">
              Products
            </a>
          </li>
        </ul>
      </div>
      <div className="row product_details m-2 py-2 border border-primary ">
        <div className=" col-xl-6">
          <div className="img_box">
            <img className=" img-fluid" src={product.img} alt={product.name} />
          </div>
          <div className="product_description mt-3">
            <h3 className=" ms-2 mb-0">Description</h3>
            <ul>
              <li>Brand : Hindware</li>
              <li>One piece closets Commode</li>
              <li>Cat.no.: 20122 | 20125 | 20107 | 20123 |</li>
              <li>Trap : S trap </li>
              <li>Colour : White</li>
              <li>Warranty* : 10 Years</li>
              <li>Installation : Free standing</li>
            </ul>
          </div>
        </div>
        <div className=" col-xl-6">
          <div className="details_box">
            <h2> {product.name} </h2>
            <span className="discription">
              One piece closets Commode | Aspiro | Fabio | Flora | Tozzo | 20122
              | 20125 | 20107 | 20123 | S trap
            </span>
            <p className="ratings">0 Ratings </p>
            <div className="mb-2 d-flex align-items-center gap-3">
              <span className="price"> Offer: {product.price}</span>
              <span className="prevprice">MRP: {product.prevprice}</span>
            </div>
            <p className="save">Save27%</p>
            <div className="trust_box">
              <div>
                <i class="ri-medal-line"></i>
                <p className=" mb-0">Top Brand</p>
              </div>
              <div>
                <i class="ri-exchange-2-line"></i>
                <p className=" mb-0">Exchange Policy</p>
              </div>
            </div>
            <div className="offer_box mt-3">
              <p>
                Flat 2% OFF Amount Greater Than 10000 (Cod and Prepaid Both) -
                Use code <span>pbazzar002</span>
              </p>
              <p className="mb-0">
                Flat 3% OFF on Amount Greater Than 10000 (Prepaid Only) - Use
                code <span>pbazzar003</span>
              </p>
            </div>
            <div className="deliveryTime mt-3">
              <span className="me-2">
                <i class="ri-truck-line text-primary"></i>
              </span>
              <span>Expected delivery in 5 to 10 days.</span>
            </div>
            <div className="quantity_box border border-primary mt-3">
              <button
                onClick={() =>
                  count > 1
                    ? setCount(count - 1)
                    : alert("Please Select Min 1 Quantity")
                }
              >
                -
              </button>
              <span> {count} </span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className="buttons mt-3">
              <button
                onClick={() => {
                  if (user) {
                    addToCart(product, count);
                  } else {
                    alert("Please Login To add items in Cart");
                  }
                }}
              >
                Add To Cart
              </button>
              <button>Add to Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySection;
