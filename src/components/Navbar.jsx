import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";
import { Modal, Button, Form } from "react-bootstrap";

const Navbar = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cleanedCart = storedCart.map((item) => ({
      ...item,
      price: parseFloat(String(item.price).replace(/,/g, "").trim()) || 0,
      quantity: item.quantity || 1,
    }));
    setCartItems(cleanedCart);
  }, []);

  const handleItemRemove = (productName) => {
    const updatedCart = cartItems.filter((item) => item.name !== productName);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (productName, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.name === productName
        ? { ...item, quantity: parseInt(newQuantity) || 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setShowLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="navbar_compo">
      <nav className="navbar border border-1 navbar-expand-xl fixed-top bg-body-tertiary">
        <div className="container-fluid container_box">
          <NavLink to="/" className="navbar-brand me-4">
            <img src="/images/logo-f.png" alt="" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 d-flex">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {showSearch && (
            <form className="d-flex search_bar me-1" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}

          <div className="navbar_buttons">
            {!user && (
              <button
                className="btn btn-primary login_btn"
                onClick={() => setShowLogin(true)}
              >
                Join Us / Log In
              </button>
            )}

            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="search_btn icon_btn"
            >
              <i className="ri-search-line"></i>
            </button>
            <button className="icon_btn">
              <i className="ri-heart-line"></i>
            </button>
            <button className="icon_btn">
              <i className="ri-notification-2-fill"></i>
            </button>

            <button className="icon_btn" onClick={handleProfileClick}>
              <i className="ri-user-3-line"></i>
            </button>

            <button
              className="icon_btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#demo"
            >
              <i className="ri-shopping-cart-2-line"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 React-Bootstrap Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Cart */}
      <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">SHOPPING CART</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="cart_section">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <section className="cart_section">
                {cartItems.map((item, index) => (
                  <div
                    className="item_box d-flex flex-column border-bottom pb-3 mb-4"
                    key={index}
                  >
                    <img src={item.img} alt={item.name} width={80} />
                    <h3>{item.name}</h3>
                    <div className="d-flex align-items-center gap-3">
                      <p className="mb-0">Price: {item.price}</p>
                      <input
                        className=" ps-1 border border-primary"
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.name, e.target.value)
                        }
                      />
                      <button
                        onClick={() => handleItemRemove(item.name)}
                        className="btn btn-danger py-0 px-2"
                      >
                        X
                      </button>
                      <p className="mb-0">
                        Total: {+item.price * +item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
                <NavLink to={"/chekout"}>
                  <button data-bs-dismiss="offcanvas" className="btn btn-primary mt-2" type="button">
                    Checkout
                  </button>
                </NavLink>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
