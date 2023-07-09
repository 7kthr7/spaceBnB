
import { useHistory } from "react-router-dom";


const SpotCard = ({ spot }) => {

    const history = useHistory();
    const onClick = () => {
        history.push(`/spots/${spot.id}`);

    }
    const rating = (rating) => {

        if (!rating || rating < 1) {
            return "new"
        }

        if (!(typeof rating === NaN)) {
            return rating;
        }
    }

    return (
        <div
            className="landing-page"
            onClick={onClick}
        >

            <div className="card-details">
                <img src={spot.previewImg} className="card-image" />
                <div className="card-location-rating">
                    <p className="card-location">{spot.city}, {spot.state}</p>
                    <p className="card-rating"><i className="fa fa-star gold"></i> {rating(spot.avgStarRating)} </p>
                </div>
                <p className="card-price">${spot.price} night</p>
            </div>
        </div>
    )
}

export default SpotCard;