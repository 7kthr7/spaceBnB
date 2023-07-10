import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteReviewThunk } from "../../../store/reviews";
import { spotDetailThunk } from "../../../store/spots";

import "./style.css"

export default function DeleteReviewModal(review) {
    review = review.review
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [errors, setErrors] = useState([]);

    const submitDelete = async (e) => {
        e.preventDefault()
       await dispatch(deleteReviewThunk(review.id))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
        dispatch(spotDetailThunk(review.spotId))
        closeModal();
    }

    const keepReview = () => {

        closeModal();
    }

    return (
        <div className="delete-modal">
          <h1 className="delete-message">Are you sure you want to delete this review?</h1>
          <ul className="validation-errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <form className="delete-review-form">
            <button type="submit" className="delete-rev-button-yes" onClick={submitDelete}>
              Yes, Delete This Review!
            </button>
            <button type="submit" className="delete-rev-button-no" onClick={keepReview}>
              No, Keep My Review!
            </button>
          </form>
        </div>
      );
      
}