import React from "react";
import { NavLink } from "react-router-dom";
import "./BrandCatagories.css";
import sections from "../../data/sections.json";
const BrandCatagories = () => {
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
          </li>
        </ul>
      </div>
      <div className=" px-3 catagory_section">
        <div className="row catagory_row mt-4">
          {sanitaryware.categories.map((catagory) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
              key={catagory.name}
            >
              <NavLink  className="text-decoration-none text-black" to={"/products"}>
                <div className="catagory_box">
                  <img
                    className="brand_image img-fluid"
                    src={catagory.img}
                    alt=""
                  />
                  <p className="brand_offer mt-2"> {catagory.name} </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCatagories;
