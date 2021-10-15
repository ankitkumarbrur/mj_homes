import React, { useState, useEffect } from "react";
import axios from "axios";

import Paginator from "react-hooks-paginator";
import { useToasts } from "react-toast-notifications";

import ReviewRating from "../review components/ReviewRating";
import AddReviewRating from "../review components/AddReviewRating";

const BASE_URL = "https://api.luxurymjhomes.com/";

const Review = ({ productID, productReview }) => {
  // For adding review
  const { addToast } = useToasts();
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);

  // For Pagination of review
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const pageLimit = 4;

  useEffect(() => {
    setCurrentData(productReview.slice(offset, offset + pageLimit));
  }, [offset, productReview]);

  // Handling submitting of review
  const userInfo = localStorage.getItem("userInfo");
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("reviewStar", rating);
      formData.append("reviewText", message);
      formData.append("product", productID);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `JWT ${localStorage.getItem("userInfo")}`,
        },
      };
      const { data } = await axios.post(`${BASE_URL}review/`, formData, config);
      addToast("Review Added", {
        appearance: "success",
        autoDismiss: true,
      });
      setMessage("");
      setRating(null);
    } catch (error) {
      addToast("Review Not Added", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="row">
      <div className="col-lg-7">
        <div className="review-wrapper">
          {/* REVIEW SECTION */}
          {currentData.map((review, index) => {
            return (
              <div key={index} className="single-review">
                <div className="review-content">
                  <div className="review-top-wrap">
                    <div className="review-left">
                      <div className="review-name">
                        <h4>{review.user}</h4>
                      </div>
                      <div className="review-rating">
                        <ReviewRating reviewRating={review.reviewStar} />
                      </div>
                    </div>
                  </div>
                  <div className="review-bottom">
                    <p>{review.reviewText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pro-pagination-style text-center mt-30">
          <Paginator
            totalRecords={productReview.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageContainerClass="mb-0 mt-0"
            pagePrevText="«"
            pageNextText="»"
          />
        </div>
      </div>

      {/* ADD A REVIEW */}
      {userInfo !== null ? (
        <div className="col-lg-5">
          <div className="ratting-form-wrapper pl-50">
            <h3>Add a Review</h3>
            <div className="ratting-form">
              <form action="" onSubmit={handleSubmit}>
                <div className="star-box">
                  <span>Your rating:</span>
                  <AddReviewRating rating={rating} setRating={setRating} />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="rating-form-style form-submit">
                      <textarea
                        name="Your Review"
                        placeholder="Message..."
                        value={message}
                        required
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <input type="submit" defaultValue="Submit" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Review;
