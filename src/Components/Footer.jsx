import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const SocialItem = ({ icon, label }) => (
    <li key={label}>
      <a href="#">
        {" "}
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );

  const FooterLinks = ({ label, linkName, url }) => {
    return (
      <li key={label}>
        <a href={url}>{linkName}</a>
      </li>
    );
  };

  return (
    <section>
      <div className="footer--container">
        <div className="footer--socials">
          <h3>LLM Comp</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <ul>
            <SocialItem icon={faTwitter} label="Twitter" />
            <SocialItem icon={faFacebookF} label="Facebook" />
            <SocialItem icon={faInstagram} label="Instagram" />
            <SocialItem icon={faGithub} label="Github" />
          </ul>
        </div>
        <div className="footer--company-info">
          <h4 className="footer--subheading">Company</h4>
          <ul>
            <FooterLinks label="about" linkName="About" url="/about" />
            <FooterLinks label="features" linkName="Features" url="/features" />
            <FooterLinks label="works" linkName="Works" url="/works" />
            <FooterLinks label="carrer" linkName="Carrer" url="/carrer" />
          </ul>
        </div>
        <div className="footer-help">
          <h4 className="footer--subheading">Help</h4>
          <ul className="footer--help">
            <FooterLinks
              label="customersupport"
              linkName="Customer Support"
              url="/customersupport"
            />
            <FooterLinks
              label="deliverydetails"
              linkName="Delivery Details"
              url="/deliverydetails"
            />
            <FooterLinks
              label="terms"
              linkName="Terms & Condition"
              url="/terms"
            />
            <FooterLinks label="about" linkName="About" url="/privacy" />
          </ul>
        </div>
        <div className="footer--newsletter">
          <h4 className="footer--subheading">Subscribe to newsletter</h4>
          <form action="#" method="POST">
            <label htmlFor=""></label>
            <input type="text" placeholder="Enter email adress" />
          </form>
          {/* check email validility */}
          <a href="#">Subscribe</a>
        </div>
      </div>
      <hr />
      <p className="footer--copyright">
        © Copyright 2024, All Rights Reserved by Burak Yüksel
      </p>
    </section>
  );
}
