import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Img1 from "../../images/Screenshot (610).png";
import Img2 from "../../images/Screenshot (611).png";
import Img3 from "../../images/Screenshot (613).png";
import Img4 from "../../images/Screenshot (615).png";
import Img5 from "../../images/istockphoto-104704117-170667a.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row box1">
          <div
            className="col"
            style={{ textAlign: "center", padding: "0px 0px" }}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to="/">Add Restaurent</Link>
              </li>
            </ul>
            <img
              className="img-fluid mt-5"
              src={Img1}
              alt="Please reload the page"
            ></img>
            <h1 className="mt-4" style={{ color: "white", margin: "0px 0px" }}>
              Discover the best food and drinks in Bangalore
            </h1>
            <input
              className="box4 mt-5 mb-5"
              type="search"
              placeholder="Search for restaurent,cuisine or a dish"
            ></input>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Log in
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body mb-5">
                <div className="col-10 mx-auto">
                  <input
                    className="mb-4"
                    style={{ width: "100%", height: "40px" }}
                    type="text"
                  ></input>
                  <button
                    className="btn"
                    style={{
                      width: "100%",
                      backgroundColor: "#EF4F5F",
                      color: "white",
                    }}
                  >
                    Send OTP
                  </button>
                  <hr></hr>
                  <button
                    className="btn mt-3 mb-4 box10"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    Continue with Email
                  </button>
                  <button
                    className="btn box10 mb-4"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    <span style={{ padding: "0px 10px" }}>
                      <i className="fa-brands fa-google"></i>
                    </span>
                    Continue with Google
                  </button>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    New to Zomato?{" "}
                    <span style={{ color: "#EF4F5F" }}>Create Account</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Sign up
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body mb-5">
                <div className="col-10 mx-auto">
                  <input
                    className="mb-4"
                    style={{
                      width: "100%",
                      height: "40px",
                      paddingLeft: "30px",
                    }}
                    type="text"
                    placeholder="Full Name"
                  ></input>
                  <input
                    className="mb-4"
                    style={{
                      width: "100%",
                      height: "40px",
                      paddingLeft: "30px",
                    }}
                    type="text"
                    placeholder="Email"
                  ></input>
                  <button
                    className="btn box10"
                    style={{
                      width: "100%",
                      backgroundColor: "#EF4F5F",
                      color: "white",
                    }}
                  >
                    Create Account
                  </button>
                  <hr></hr>
                  <button
                    className="btn box10 mb-4"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    <span style={{ padding: "0px 10px" }}>
                      <i className="fa-brands fa-google"></i>
                    </span>
                    Continue with Google
                  </button>
                  <Link
                    style={{ textDecorationLine: "none" }}
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Already have an account?{" "}
                    <span style={{ color: "#EF4F5F" }}>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-sm-6">
            <Link to="/order" className="box8">
              <div className="card box9">
                <img src={Img5} className="card-img-top" alt="Please reload Page" />
                <div className="card-body">
                  <h2>Order Online</h2>
                  <p className="card-text">
                    Stay at home and order to your Doorstep
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center mb-5 box5">
          <h1 className=" mt-4 mb-5" style={{ textAlign: "center" }}>
            Popular localities in and around Bangalore
          </h1>
          <div className="col-3">
            <h4 className="box3">KK Nagar</h4>
            <h4 className="box3">Sathamangalam</h4>
            <h4 className="box3">lyre Bunglow</h4>
            <h4 className="box3">Pasumai</h4>
            <h4 className="box3">Balarengapuram</h4>
            <h4 className="box3">Southern Colony</h4>
            <h4 className="box3">Avaniyapuram</h4>
          </div>
          <div className="col-3">
            <h4 className="box3">KK Nagar</h4>
            <h4 className="box3">Sathamangalam</h4>
            <h4 className="box3">lyre Bunglow</h4>
            <h4 className="box3">Pasumai</h4>
            <h4 className="box3">Balarengapuram</h4>
            <h4 className="box3">Southern Colony</h4>
            <h4 className="box3">Avaniyapuram</h4>
          </div>
          <div className="col-3">
            <h4 className="box3">KK Nagar</h4>
            <h4 className="box3">Sathamangalam</h4>
            <h4 className="box3">lyre Bunglow</h4>
            <h4 className="box3">Pasumai</h4>
            <h4 className="box3">Balarengapuram</h4>
            <h4 className="box3">Southern Colony</h4>
            <h4 className="box3">Avaniyapuram</h4>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#FFFBF7" }}
        >
          <div className="box5 col-3 mt-5">
            <img src={Img3} alt="Please Reload the Page"></img>
          </div>
          <div className="col-lg-5 col-md-8 col-sm-6 mt-5 box7 justify-content-center">
            <div className="col">
              <h1 style={{ textAlign: "center" }}>Get the Zomato App</h1>
              <p className="mt-4">
                We will send you a link, open it on your phone to download the
                app
              </p>
            </div>
            <div className="col">
              <div style={{ display: "flex" }}>
                <div className="form-check" style={{ marginRight: "20px" }}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Email
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Phone
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control mt-4"
                  placeholder="Email"
                  width="50px"
                ></input>
                <button
                  className="btn mt-4"
                  style={{ backgroundColor: "#E03546", color: "white" }}
                >
                  Share App Link
                </button>
              </div>
            </div>
            <div className="col mt-3 mb-5">
              <img
                className="img-fluid"
                src={Img4}
                alt="Please Reload the Page"
              ></img>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <h3 className="mb-5 mt-5" style={{ textAlign: "center" }}>
            Cities We Deliver To
          </h3>
          <div className="box6 col-lg-2 col-md-5 mb-sm-4">
            <p>Delhi NCR</p>
            <p>Hyderabad</p>
            <p>Ahemdabad</p>
            <p>Ooty</p>
            <p>kanpur</p>
            <p>Visakhpatnam</p>
            <p>Nagpur</p>
            <p>Surat</p>
            <p>Neemrana</p>
            <p>Pushkar</p>
            <p>Thissur</p>
            <p>Ajmer</p>
            <p>Manali</p>
          </div>
          <div className="box6 col-lg-2 col-md-5 mb-sm-4">
            <p>Kolkata</p>
            <p>Chennai</p>
            <p>Shimla</p>
            <p>Allahabad</p>
            <p>Bhubaneswar</p>
            <p>Agra</p>
            <p>Varanasi</p>
            <p>Cuttack</p>
            <p>Rajkot</p>
            <p>Manipal</p>
            <p>Mussoori</p>
            <p>Dharamshala</p>
            <p>Manipur</p>
          </div>
          <div className="box6 col-lg-2 col-md-5 mb-sm-4">
            <p>Mumbai</p>
            <p>Lucknow</p>
            <p>Goa</p>
            <p>Ludiyana</p>
            <p>Aurangabad</p>
            <p>Coimbatore</p>
            <p>Dehardun</p>
            <p>Patna</p>
            <p>Trivandrum</p>
            <p>Madurai</p>
            <p>Vijayawada</p>
            <p>Rishikesh</p>
            <p>Raipur</p>
          </div>
          <div className="box6 col-lg-2 col-md-5 mb-sm-4">
            <p>Benguluru</p>
            <p>Kochi</p>
            <p>Indore</p>
            <p>Guwahati</p>
            <p>Bopal</p>
            <p>Mangalore</p>
            <p>Mysore</p>
            <p>Udaipur</p>
            <p>Haridwar</p>
            <p>Kozhikode</p>
            <p>Jodhpur</p>
            <p>Ajmer</p>
            <p>Jalandhar</p>
          </div>
          <div className="box6 col-lg-2 col-md-5 mb-sm-4">
            <p>Pune</p>
            <p>Jaipur</p>
            <p>Nashik</p>
            <p>Ooty</p>
            <p>Amritsar</p>
            <p>Ranchi</p>
            <p>Varodara</p>
            <p>Puducherry</p>
            <p>khajuraho</p>
            <p>Leh</p>
            <p>Alappuzha</p>
            <p>Kota</p>
            <p>Jammu</p>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <img src={Img2} alt="Please Reload the Page"></img>
          <div className="box6 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">ABOUT ZOMATO</h5>
            <p>Who We Are</p>
            <p>Blog</p>
            <p>Work with Us</p>
            <p>Report Fraud</p>
          </div>
          <div className="box6 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">ZOMAVERSE</h5>
            <p>Zomato</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
            <p></p>
          </div>
          <div className="box6 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">FOR RESTAURENTS</h5>
            <p>Partner With us</p>
            <p>Apps for Us</p>
            <p>Zomato For Work</p>
          </div>
          <div className="box6 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">LEARN MORE</h5>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div className="box6 col-md-2 col-sm-5 mt-5">
            <h5 className="mb-4">SOCIAL LINKS</h5>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
          <hr></hr>
          <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2022 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
