import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To MJ Homes</h1>
          <p>
            Your number one source for all things in furniture. We're dedicated
            to giving you the very best of furniture, with a focus on Cut the
            retailers from your life.
          </p>
          <p>
            Founded in 2021 by group of friends who had only wish, that is to
            become famous not by selling furniture to people but giving them
            their dream home in the most luxurious way they can get.
          </p>
          <p>
            Mj Homes has come a long way from its beginnings in Bahadurgarh.
            When Manish, Himanshu and Yash first started out, their passion for
            furnishing beautiful homes- drove them to quit day job, do tons of
            researches. so that MJ Homes can offer you aesthetic value and
            remove the retailers from your life. Our plan for upcoming year is
            market penetration to completely capture our local market and also
            start market development and enter in those areas where MJ Homes can
            bring luxury in people life.
          </p>
          <p>
            We now serve customers all over India, and are thrilled that we're
            able to turn our passion into our own website. We hope you enjoy our
            products as much as we enjoy offering them to you. If you have any
            questions or comments, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
