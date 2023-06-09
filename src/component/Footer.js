import React from "react";
import "../styles/footer.css";
import Logo from "../Assets/white-logo.png"
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerAddress">
          <img alt="startup-logo" src={Logo} />
          <p>101, Relcon Enclave, NH-48</p>
          <p>Surat, Gujarat</p>
          <p>India - 394325</p>
        </div>
        <div className="footerSection">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li>Community Guidelines</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Cancellation & Refund</li>
            <li>Shipping & Exchange</li>
            <li>FAQs</li>
            <li>Startup FAQs</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>FAQs</h3>
          <ul>
            <li>Startup FAQs</li>
          </ul>
        </div>
      </div>
      <div className="bottomNav">
        <div className="socialMedia">
          <p><AiOutlineInstagram /></p>
          <p><AiFillFacebook /></p>
          <p><AiOutlineTwitter /></p>
        </div>
        <div className="footerCopyRight">
          <p>
            © 2023 <b>StartupzWorld,</b> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
