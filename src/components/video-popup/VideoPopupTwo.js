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
          backgroundImage: `url(${"https://images.unsplash.com/photo-1616627988031-f912e383aebb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})`,
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
          videoId="M6xmcvkf6Cw"
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
          backgroundImage: `url(${"https://media.istockphoto.com/photos/loft-interior-with-leather-sofa-and-furnitures-picture-id1299845842?b=1&k=20&m=1299845842&s=170667a&w=0&h=Qsz0EmzJJB1MugGIQTtJyNUFaVBdFFuXPJ8RKLNikQw="})`,
        }}
      ></div>
    </div>
  );
};

export default VideoPopupTwo;
