

import React, { useEffect, useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { createReviewsThunk, getReviewsThunk } from "../../../store/reviews";
import { spotDetailThunk } from "../../../store/spots";
import "./style.css";

export default function CreateReviewModal({ spot }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [reviewText, setReviewText] = useState("");
  const [ratingStars, setRatingStars] = useState(0);
  const [isEmptyField, setIsEmptyField] = useState(true);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const starArray = [1, 2, 3, 4, 5];

  useEffect(() => {
    const validationErrors = [];

    if (reviewText.length < 10 || ratingStars < 1) {
      setIsEmptyField(true);
    } else {
      setIsEmptyField(false);
    }

    if (reviewText.length < 10) validationErrors.push("Review must be more than 10 characters");
    if (ratingStars < 1) validationErrors.push("Rating must be 1-5 stars");

    setErrors(validationErrors);
  }, [reviewText, ratingStars]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (errors.length > 0) {
      return;
    }

    const newReview = {
      review: reviewText,
      stars: ratingStars,
    };

    await dispatch(createReviewsThunk(spot.id, newReview)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    dispatch(getReviewsThunk(spot.id));
    closeModal();
    dispatch(spotDetailThunk(spot.id))
  };

  return (
    <div className="create-review-modal">
      <form className="review-form" onSubmit={onSubmit}>
        <h1 className="form-title">How was your stay?</h1>
        <ul className="validation-errors">
          {hasSubmitted &&
            errors.map((error, idx) => (
              <li key={`error${idx}`} className="error">
                {error}
              </li>
            ))}
        </ul>
        <textarea
          className="review-text"
          placeholder="Leave your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="rating-container">
          {starArray.map((star, index) => {
            index++;
            return (
              <button
                className="star-button"
                key={`index${index}`}
                onClick={() => {
                  setRatingStars(index);
                   setHoveredStar(index);
                }}
                onMouseEnter={() => setHoveredStar(index)}
                onMouseLeave={() => setHoveredStar(ratingStars)}
              >
                <div className="star-rating">
                  <i
                    className={
                      index <= (hoveredStar || ratingStars) ? "fa fa-star gold" : "fa fa-star"
                    }
                  ></i>
                </div>
              </button>
            );
          })}
          
            <b className="stars-text">Stars</b>
       
        </div>
        <button
          className={isEmptyField ? "submit-button disabled" : "submit-button enabled"}
          disabled={Boolean(isEmptyField)}
          type="submit"
        >
          Submit Your Review
        </button>
      </form>
    </div>
  );
}

