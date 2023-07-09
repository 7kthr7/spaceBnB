
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { updateSpotThunk, spotDetailThunk } from '../../store/spots';

//import './style.css'

export default function UpdateSpot() {
    const { spotId } = useParams();


    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch(spotDetailThunk(spotId));
    }, [dispatch, spotId]);

    const spot = useSelector(state => state.spots.singleSpotObj);

    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    useEffect(() => {

        dispatch(spotDetailThunk(spotId));
    }, [dispatch, spotId]);

    useEffect(() => {
        if (spot) {
            setAddress(spot.address);
            setCity(spot.city);
            setState(spot.state);
            setCountry(spot.country);
            setName(spot.name);
            setDescription(spot.description);
            setPrice(spot.price);
        }
    }, [spot]);

    const onSubmit = async (e) => {


        e.preventDefault();

        const errors = [];

        if (!address) {
            errors.address = "Address is required";
        }

        if (!city) {
            errors.city = "City is required";
        }

        if (!state) {
            errors.state = "State is required";
        }

        if (!country) {
            errors.country = "Country is required";
        }

        if (!name) {
            errors.name = "Name is required";
        }

        // if (description.length < 30) 
        //     errors.description = "Description needs a minimum of 30 characters";


        // if (description.length > 500)
        //     errors.description = "Description cannot exceed 500 characters";


        if (!price) {
            errors.price = "Price is required";
        }


        setErrors(errors);


        setHasSubmitted(true);

        if (Object.values(errors).length > 0) return;
        const updatedSpot = {
            address,
            city,
            state,
            country,
            name,
            description,
            price,
            lat: 100.00,
            lng: 20.00,
        };

        if (updatedSpot) {
            await dispatch(updateSpotThunk(updatedSpot, spotId));
            history.push(`/spots/${spotId}`);
        }
    };

    return (
        <div className='spot-form-page'>
            <form onSubmit={onSubmit}>
                <div className='location-section'>
                    <h1>Update Spot</h1>
                    <h2>Where's your place located?</h2>
                    <h4>Guests will only get your exact address once they booked a reservation.</h4>

                    <div className='input-forms'>
                        <p>Country</p>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.country}</span>}
                        <input
                            type='text'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className='input-forms'>
                        <p>Address</p>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.address}</span>}
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='input-forms-location'>
                        <div className='input-forms-city'>
                            <p>City</p>
                            {<span className={hasSubmitted ? "error" : "hidden"}>{errors.city}</span>}
                            <input
                                type='text'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <p className="city-state-comma">,</p>
                        <div className='input-forms-state'>
                            <p>State</p>
                            {<span className={hasSubmitted ? "error" : "hidden"}>{errors.state}</span>}
                            <input
                                type='text'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="description-section">
                    <h2>Describe your place to guests</h2>
                    <h4>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood</h4>

                    <div className='input-forms'>
                        {/* {<span className={hasSubmitted ? "error" : "hidden"}>{errors.description}</span>} */}
                        <textarea
                            type='text'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="title-section">
                    <h2>Create a title for your spot</h2>
                    <h4>Catch guests' attention with a spot title that highlights what makes your place special.</h4>

                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.name}</span>}
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="price-section">
                    <h2>Set a base price for your spot</h2>
                    <h4>Competitive pricing can help your listing stand out and rank higher in search results</h4>

                    <div className='input-forms-price'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.price}</span>}
                        <p className="price-sign">$</p>
                        <input
                            type='number'
                            placeholder={spot.price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min={1}
                        />

                    </div>


                </div>

                <div className="spot-button-div">
                    <button className="createSpot-button form-text" type="submit">Update Spot</button>
                </div>
            </form>
        </div>
    )
}