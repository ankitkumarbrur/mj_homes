import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const VideoPopupTwo = ({ spaceBottomClass }) => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <div
      className={`video-popup-2 ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div
        className="video-popup-2__left bg-img"
        style={{
          backgroundImage: `url(${JSON.parse(localStorage.getItem("homepage")).leftImage})`,
        }}
      >
        <div className="video-popup-2__content">
          <h2 className="title mb-30">
            Furniture 2021 <br /> Collections
          </h2>
          <p className="text mb-30">
            Lorem ipsum dolor sit amet consectetur adipisici elit sed do eiusm.
          </p>
          <div className="link">
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Shop Now
            </Link>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={modalStatus}
          videoId={JSON.parse(localStorage.getItem("homepage")).videoLink}
          onClose={() => isOpen(false)}
        />
        <div className="video-popup-2__button">
          <button onClick={() => isOpen(true)}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icon-img/play.png"}
              alt=""
            />
          </button>
        </div>
      </div>
      <div
        className="video-popup-2__right bg-img"
        style={{
          backgroundImage: `url(${JSON.parse(localStorage.getItem("homepage")).rightImage})`,
        }}
      ></div>
    </div>
  );
};

export default VideoPopupTwo;
