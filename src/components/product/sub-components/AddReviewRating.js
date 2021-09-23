import React, { useState } from "react";

const AddReviewRating = ({ setRating, rating }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="ratting-star">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              required
              onClick={() => setRating(ratingValue)}
            />
            <i
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
              className="fa fa-star"
              style={{
                color: `${
                  ratingValue <= (hover || rating) ? "#ffa900" : "#5f5d5d"
                }`,
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default AddReviewRating;
