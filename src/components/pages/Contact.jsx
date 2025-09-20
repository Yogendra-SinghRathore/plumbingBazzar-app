import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_section">
      <div className="catagory_detail">
        <h1>CONTACT US</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/">
              Home
            </a>{" "}
            /
          </li>
          <li>
            <a className="text-decoration-none text-black" href="/about">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="contact_form my-3 px-4">
        <h3 className=" text-center">GET IN TOUCH</h3>
        <form>
          <div class="row g-3">
            <div class="col-xl-6">
              <label for="name" class="form-label">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="form-control border border-primary"
                placeholder="Enter Name"
                name="email"
              />
            </div>
            <div class="col-xl-6">
              <label for="email" class="form-label">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="form-control border border-primary"
                placeholder="Enter Email"
                name="email"
              />
            </div>
            <div class="col-xl-6">
              <label for="phone" class="form-label">
                Your Number:
              </label>
              <input
                id="phone"
                type="phone"
                className="form-control border border-primary"
                placeholder="Your Number"
                name="number"
              />
            </div>
            <div class="col-xl-6">
              <label for="phone" class="form-label">
                Your Website:
              </label>
              <input
                id="website"
                type="url"
                className="form-control border border-primary"
                placeholder="Your Website URL"
                name="website"
              />
            </div>
            <div class="col mt-3">
              <label for="comment">Comments:</label>
              <textarea
                class="form-control border border-primary"
                rows="5"
                id="comment"
                name="text"
              ></textarea>
            </div>
          </div>
          <button type="submit" className=" mt-3 m-auto btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
