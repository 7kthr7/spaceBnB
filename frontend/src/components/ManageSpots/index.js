
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
            <h1 className="manage-page">Manage Spots</h1>

            <div className="get-spots">
                <div className="landing-page">

                    <div className="card-detail">
                        {!spots.length && (
                            <NavLink exact to="/spots/new">
                            <button className="new-spot-btn">Create a New Spot
                                
                            </button>
                            </NavLink>
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

                                        <button id="delete-button"> Delete

                                        <OpenModalButton  
                                        
                                        modalComponent={<DeleteSpot spot={spot} />} />
                                        </button>

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );

}