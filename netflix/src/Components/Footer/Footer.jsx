import React from "react";
import "./footer.css";
import insta from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";
import twitter from "../../assets/twitter_icon.png";
import youtube from "../../assets/youtube_icon.png";
const Footer = () => {
  return (
    <>
      <div className="footer_outer_container">
        <div className="accounts">
          <ul>
            <li>
              <img src={insta} alt="" width={20} />
            </li>
            <li>
              <img src={facebook} alt="" width={20} />
            </li>
            <li>
              <img src={twitter} alt="" width={20} />
            </li>
            <li>
              <img src={youtube} alt="" width={20} />
            </li>
          </ul>
        </div>
        <div className="footer_container">
          <div className="first_footer">
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notice</li>
              <li>Sevice code</li>
              <li>c1997-2024 Netflix Inc.</li>
            </ul>
          </div>
          <div className="second_footer">
            <ul>
              <li>Jobs</li>
              <li>Invester Relations</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="third_footer">
            <ul>
              <li>Gift Cards</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="fouth_footer">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
