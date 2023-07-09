

import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteSpotThunk } from "../../store/spots";
import { useModal } from "../../context/Modal";
import './style.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function DeleteSpotForm(spot) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    spot = spot.spot

    const [errors, setErrors] = useState([]);


    const submitDelete = async (e) => {
        e.preventDefault()

        try {
            await dispatch(deleteSpotThunk(spot.id));
            closeModal();
            history.push('/');
        } catch (error) {
            if (error && error.errors) setErrors(error.errors);
        }
    };

    const keepSpot = () => {
        closeModal();
    };
    return (


        <div className="delete-modal">
            <div className="delete-message">
                <h1>Confirm Delete</h1>
                <p>Are you sure you want to remove this spot from the listing?</p>
            </div>
            <button type="submit" className="delete-button-yes" onClick={submitDelete}>
                Yes, Delete My Spot!
            </button>
            <button type="submit" className="delete-button-no" onClick={keepSpot}>
                No, Keep My Spot!
            </button>
        </div>

    )

}