import React, { useEffect, useState } from "react";
import "./Chekout.css";
const Chekout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod,setPaymentMethod] = useState("cod");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  // 🟢 Razorpay Payment Function
  const handlePayment = () => {
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );

    const options = {
      key: "rzp_test_RJvFvxTiNtdU2C", // replace with your Razorpay Test Key
      amount: totalAmount * 100, // 🔹 in paise (₹1 = 100p)
      currency: "INR",
      name: "Plumbing Bazzar",
      description: "Order Payment",
      image: "/images/logo-f.png",
      handler: function (response) {
        alert(
          "✅ Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Yogendra",
        email: "demo@example.com",
        contact: "9981435014",
      },
      theme: {
        color: "#0d6efd",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePlaceOrder = () => {
    if(paymentMethod === "cod"){
      alert("✅ Order placed with Cash on Delivery!");
    }else if (paymentMethod === "razorpay"){
      handlePayment();
    } else {
      alert("⚠️ Please select a payment method.");
    }
  };

  return (
    <div className="chekout_section">
      <div className="catagory_detail">
        <h1>CHECKOUT</h1>
        <ul className=" list-unstyled d-flex gap-2">
          <li>
            <a className="text-decoration-none text-black" href="/">
              Home
            </a>{" "}
            /
          </li>
          <li>
            <a className="text-decoration-none text-black" href="/chekout">
              Checkout
            </a>
          </li>
        </ul>
      </div>
      <div className=" row my-3 mx-1">
        <div className=" col-xl-8">
          <div className="billing_details">
            <h2 className="title">Billing Details</h2>
            <div className="box box1">
              <div className=" d-flex justify-content-between">
                <h3>Shipping Address</h3>
                <i class=" text-primary ri-edit-box-line"></i>
              </div>
              <p>
                Yogendra <br /> Home,INDORE 19 , <br /> 451220, 9981435014
              </p>
            </div>
            <div className="box box1">
              <h3>Use wallet balance</h3>
              <p className="mb-0">
                <input
                  className=" me-2"
                  name="balanceOpt"
                  type="radio"
                  id="balance"
                />
                <label htmlFor="balance">Available balance : ₹ 0.00</label>
              </p>
              <p className="mb-0">
                <input
                  className=" me-2"
                  name="balanceOpt"
                  type="radio"
                  id="exchangeBalance"
                />
                <label htmlFor="exchangeBalance">
                  Available Exchange balance : ₹ 0.00
                </label>
              </p>
              <span className=" mt-2 text-danger">
                (Note : If You Use Wallet for Payment then COD / Promo Code
                Condition will be Removed.)
              </span>
            </div>
            <div className="box box1">
              <h3>Payment Method</h3>
              <hr />
              <p className=" mb-0">
                <input
                  className=" me-2"
                  name="paymentOpt"
                  type="radio"
                  id="cod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="cod">
                  {" "}
                  <img
                    src="https://plumbingbazzar.com/assets/front_end/classic/images/cod.png"
                    alt=""
                  />{" "}
                  Cash On Delivery
                </label>
              </p>
              <hr />
              <p className="mb-0">
                <input
                  className=" me-2"
                  name="paymentOpt"
                  type="radio"
                  id="razprpay"
                  value="razorpay"
                  checked={paymentMethod === "razorpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="razprpay">
                  {" "}
                  <img src="images/razorpayLogo.png" alt="" /> Razorpay Payment
                  Gateway
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className=" col-xl-4">
          <div className="order_summary">
            <h2 className="title">Order Summary</h2>
            <h3>{cartItems.length} Item(s) in Cart</h3>
            {cartItems.map((item, index) => (
              <div className="product_box " key={index}>
                <img src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <span>Qty: {item.quantity} </span>
                  <span className="price ms-4">
                    Rs. {item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
            <ul className="total_list list-unstyled">
              <li>
                <span>Subtotal</span>
                <span>
                  Rs.{" "}
                  {cartItems
                    .reduce(
                      (acc, item) =>
                        acc + Number(item.price) * Number(item.quantity),
                      0
                    )
                    .toLocaleString("en-IN")}
                </span>
              </li>
              <li>
                <span>Delivery Charge+ Insurance</span>
                <span>Rs. 0.00</span>
              </li>
              <li>
                <span>Wallet</span>
                <span>Rs. 0.00</span>
              </li>
              <li className="final_price">
                <span className="total_text">Total</span>
                <span className="total_price">
                  Rs.{" "}
                  {Math.round(
                    cartItems.reduce(
                      (acc, item) =>
                        acc + Number(item.price) * Number(item.quantity),
                      0
                    )
                  ).toLocaleString("en-IN")}
                </span>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={handlePlaceOrder} >Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chekout;
