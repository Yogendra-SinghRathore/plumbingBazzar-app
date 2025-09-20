import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about_section'>
      <div className="catagory_detail">
        <h1>ABOUT US</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/">
              Home
            </a> /
          </li>
          <li>
            <a className="text-decoration-none text-black" href="/about">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className='about_details mt-3 px-4 text-center'>
        <h3 className=' text-primary'>About Us</h3>
        <p>Welcome to Plumbing Bazzar, having GST <span>NO. 21AAKCG0445N1ZM(GRIHASTHI PIPE AND SANITARY PVT LTD)</span> your premier multi- brand e-commerce platform dedicated to all your sanitary ware and faucet needs. We believe that quality plumbing product should be accessible to everyone, which is why we’ve curated an extensive selection of top brands, ensuring you find exactly what you need for your home or project.</p>
        <p>At Plumbing Bazzar, we are passionate about providing exceptional service and expertise. Our team consists of plumbing professionals who understand the intricacies of our product and are committed to helping you make informed choices .Whether you are home owner, contractor or designer, our user friendly platform makes it easy to browse, compare and purchase high quality sanitary ware and faucet with just a few click.</p>
        <p>Our mission is simple; to provide our customer with the best selection of sanitary ware and faucets competitive prices. We understand that choosing the right product for your home or project is crucial, and that’s why our platform is designed to offer not only variety but also expert guidance and support.</p>
        <p>We prioritize customer satisfaction and strive to deliver not only superior products but also a seamless shopping experience. What sets Plumbing Bazzar apart is our commitment to quality and customer satisfaction. We’re passionate about Plumbing and committed to making your experience seamless and enjoyable.</p>
        <p>We’re more than just an online store; we’re your partners in creating beautiful, functional space. Join us on this journey ,and let PlumbingBazzar help you transform your plumbing projects in to reality.</p>
      </div>
    </div>
  )
}
export default About
