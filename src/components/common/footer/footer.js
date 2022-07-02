import React from "react";
import Img2 from "../../../images/Screenshot (611).png";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className="row justify-content-center" style={{ backgroundColor: "#F8F8F8" }}>
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
                <p style={{ paddingLeft: "50px", paddingRight: "50px" }}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;