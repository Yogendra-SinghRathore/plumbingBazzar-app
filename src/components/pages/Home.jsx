import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import sections from "../../data/sections.json";
import testimonialData from "../../data/testimonialdata.json";
import blogData from "../../data/blog.json";

const Home = () => {
  return (
    <div className="main_container">
      <div className="home_video px-4 mt-5">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          style={{ width: "100%" }}
          src="https://plumbingbazzar.com/uploads/media/2025/WhatsApp_Video_2025-02-28_at_12_42_30_PM.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {sections.map((section) => (
        <div
          className=" px-4 sanitaryware_section mt-4 d-flex flex-column align-items-center"
          key={section.title}
        >
          <div className="d-flex align-items-center w-100 my-1">
            <span className="flex-grow-1 border-top border-dark"></span>
            <h1 className="px-3 m-0 section_title">{section.title}</h1>
            <span className="flex-grow-1 border-top border-dark"></span>
          </div>
          <div className="brands_row d-flex  w-100">
            <div className="brand_static_box me-2">
              <p className="mb-0">27% OFF</p>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              loop={section.brands.length > 4} // loop only if enough slides
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 25 },
              }}
            >
              {section.brands.map((brand, i) => (
                <SwiperSlide key={i}>
                  <NavLink className="text-decoration-none" to={"/brandcatag"}>
                    <div className="brand_box d-flex flex-column align-items-center justify-content-between">
                      <img
                        className="brand_image img-fluid"
                        src={brand.img}
                        alt={brand.name}
                        style={{ maxWidth: "300px", objectFit: "contain" }}
                      />
                      <p className="brand_offer mt-3 mb-0">{brand.offer}</p>
                    </div>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className=" mt-5 most_selling_products">
            <h2 className="catagory_title">Most Selling Product</h2>
            <div className="row catagory_row mt-4">
              {section.categories.map((catagory) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
                  key={catagory.name}
                >
                  <NavLink
                    className="text-decoration-none text-black"
                    to={"/products"}
                  >
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
          <div className=" mt-5 most_liked_products">
            <h2 className="text-center products_title">MOST LIKED PRODUCTS</h2>
            <div className="row g-3 product_row mt-3">
              {section.products.map((product, i) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                  <NavLink
                    className="text-decoration-none text-black"
                    to={`/buysection/${encodeURIComponent(product.name)}`}
                  >
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
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="testimonial_section">
        <div className=" testimonial_section_content py-5 px-5">
          <h1 className=" text-center ">Our Testimonial</h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonialData.map((data) => (
              <SwiperSlide>
                <div className="testimonial_box pb-3 shadow" key={data.name}>
                  <div className="top_box">
                    <i className="ri-double-quotes-l"></i>
                    <p className=" mb-0"> {data.text} </p>
                    <i className="ri-double-quotes-r"></i>
                  </div>
                  <img className=" img-fluid" src={data.img} alt="" />
                  <div className="bottom_box">
                    <span>{data.star}</span>
                    <h3 className="mb-0">{data.name}</h3>
                    <p>{data.reviwe}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="blog_section">
        <div className=" blog_section_content px-5">
          <h1 className=" text-center">Our Blogs</h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={70}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {blogData.map((data) => (
              <SwiperSlide>
                <div className="blog_box pb-3" key={data.name}>
                  <img className=" img-fluid" src={data.img} alt="" />
                  <h3 className="mb-0 text-primary">{data.name}</h3>
                  <p className="mb-0">{data.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="home_last_image mt-5">
        <div className="left_box">
          <img
            className="plumber_image img-fluid"
            src="https://plumbingbazzar.com/assets/front_end/classic/demo/avtars/4861083.jpg"
            alt=""
          />
        </div>
        <div className="right_box d-flex flex-xl-column align-items-center text-center">
          <h1>Plumbing Bazzar</h1>
          <h2>Affordable Ecommerce Platform For Your All Sanitary Needs</h2>
          <p>
            Welcome to Plumbing Bazzar, where we redefine cleanliness & elegance
            in every space with a passion for quality, innovation &
            authenticity. We strive to revolutionize sanitaryware industry one
            fixture at a time.
          </p>
          <div>
            <img
              className="store_image img-fluid me-3"
              src="https://plumbingbazzar.com/assets/front_end/classic/demo/app-store/app-store.png"
              alt=""
            />
            <img
              className="store_image img-fluid"
              src="https://plumbingbazzar.com/assets/front_end/classic/demo/app-store/google-play-store.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
