
import SpotCard from "../SpotCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSpotsThunk } from "../../store/spots";
import DeleteSpot from "../DeleteSpot";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import "./style.css"

export default function UserSpot() {
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots.spotsObj);
    const spots = Object.values(spotsObj)

    useEffect(() => {
        dispatch(userSpotsThunk())
    }, [dispatch])

    return (
        <>
            <h1 className="manage-page">Manage Your Spot</h1>

            <div className="get-spots">
                <div className="landing-page">

                    <div className="card-detail">
                        {!spots.length && (
                            <button className="new-spot-btn">
                                <NavLink exact to="/spots/new">Create a New Spot</NavLink>
                            </button>
                        )}
                        {spots.length > 0 &&
                            spots.map((spot) => (
                                <div className="user-spot-detail" key={spot.id}>
                                    <SpotCard spot={spot} />

                                    <div manage-spots-buttons>
                                        <button className="update-button">
                                            <NavLink exact to={`/spots/${spot.id}/edit`} className="update-link">
                                                Update
                                            </NavLink>
                                        </button>

                                        <OpenModalButton className="del-but" buttonText="Delete" modalComponent={<DeleteSpot spot={spot} />} />

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );

}