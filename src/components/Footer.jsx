import React from "react";
import "./Footer.css";
const Footer = () => {
  const footerData = [
    { title: "Useful Links", links: ["Home", "About Us", "Contact Us"] },
    { title: "Quick Links", links: ["Login", "Register"] },
    {
      title: "Contact",
      icon: ["ri-map-pin-2-fill", "ri-phone-fill", "ri-mail-fill"],
      links: ["BARGARH,odisha ", "18002023352", "plumbingbazzar@gmail.com"],
    },
  ];
  return (
    <div className="footer_section">
      <div className=" container-fluid footer_section_content">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="box_1 d-flex flex-column gap-4">
              <img
                className="footer_logo"
                src="https://plumbingbazzar.com/uploads/media/2023/logo-f.png"
                alt=""
              />
              <p className=" mb-0">
                We are in the business of sanitary providers and all types of
                plumbing products. Check out our best-selling brands.
              </p>
              <div>
                <label htmlFor="email" className="form-label">
                  Subscribe to Newsletter
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                  <button class="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
                <span>We'll never share your email with anyone else.</span>
              </div>
              <div className="follow_us_box">
                <h3>Follow Us</h3>
                <div className=" d-flex align-center gap-3">
                  <img src="./images/facebook.png" alt="" />
                  <img src="./images/instagram.png" alt="" />
                  <img src="./images/youtube.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {footerData.map((data) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={data.title}>
              <div className="box_2">
                <h3>{data.title}</h3>
                <p className="bar mt-3 mb-4"></p>
                {data.links.map((link, i) => (
                  <div key={i} className=" mt-4">
                    {data.icon && (
                      <i className={`link_icon ${data.icon[i]} me-3`}></i>
                    )}
                    <a className=" text-decoration-none text-white" href="">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
