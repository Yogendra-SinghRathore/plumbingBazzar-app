import React from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";
import sections from "../../data/sections.json";
const Products = () => {
  const sanitaryware = sections.find(
    (section) => section.title === "SANITARYWARE"
  );
  return (
    <div className="brand_catag">
      <div className="catagory_detail">
        <h1>HINDWARE SANITARYWARE</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/">
              Home{" "}
            </a>
            /
          </li>
          <li>
            <a className="text-decoration-none text-black" href="/brandcatag">
              Catagory{" "}
            </a>
            /
          </li>
          <li>
            <a className="text-decoration-none text-black" href="/products">
              Product
            </a>
          </li>
        </ul>
      </div>
      <div className=" px-3 products_section">
        <div className="row g-3 product_row mt-3 mb-3">
          {sanitaryware.products.map((product, i) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
              <NavLink className="text-decoration-none text-black" to={`/buysection/${encodeURIComponent(product.name)}`}>
                <div className="product_box">
                  <div className="product_top_box">
                    <img
                      className="brand_image img-fluid"
                      src={product.img}
                      alt=""
                    />
                    <span className="badge badge1">30%</span>
                    <span className="badge badge2">
                      <i className="ri-heart-line"></i>
                    </span>
                  </div>
                  <div className="d-flex flex-column p-3">
                    <h3>{product.name}</h3>
                    <p>⭐⭐⭐⭐⭐</p>
                    <div className="mb-2 d-flex align-items-center gap-3">
                      <span className="price">{product.price}</span>
                      <span className="prevprice">{product.prevprice}</span>
                    </div>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
