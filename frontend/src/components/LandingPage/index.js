

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsThunk } from "../../store/spots";
import SpotCard from "../SpotCard"
import "./style.css"

export default function GetSpots() {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spots.spotsObj));

    useEffect(() => {
        dispatch(getSpotsThunk())
    }, [dispatch])

    return (

        <div className="get-spots">
            {spots.length > 0 && spots.map(spot => (
                <SpotCard key={spot.id} spot={spot} />
            ))}
        </div>
    )

}