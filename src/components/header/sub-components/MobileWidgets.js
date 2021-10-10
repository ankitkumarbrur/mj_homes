import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://12452456012">(+91) 70275 40171 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@yourdomain.com">buildmjhomes@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a
          href="https://www.youtube.com/channel/UC_3wnfw_UhUKJFcOnriYZPQ"
          title="Youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/luxurymjhomes/"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/luxurymjhomes"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mj-homes-756020205/"
          title="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://in.pinterest.com/buildmjhomes/_saved/"
          title="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
