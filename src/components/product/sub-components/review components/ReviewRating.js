import React, { Fragment } from "react";

const ReviewRating = ({ reviewRating }) => {
  let rating = [];
  for (let i = 0; i < 5; i++) {
    rating.push(<i className="fa fa-star" key={i}></i>);
  }
  if (reviewRating && reviewRating > 0) {
    [...Array(reviewRating)].map(() => {
      for (let i = 0; i <= reviewRating - 1; i++) {
        rating[i] = <i className="fa fa-star yellow" key={i}></i>;
      }
    });
  }

  return <Fragment>{rating}</Fragment>;
};

export default ReviewRating;
