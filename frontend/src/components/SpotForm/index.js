
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSpotThunk, createImgThunk } from "../../store/spots";

import "./style.css"

const CreateSpot = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [prevImg, setPrevImg] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);


    useEffect(() => {
        const errors = [];

        if (address === "") {
            errors.address = "Address is required";
        }

        if (city === "") {
            errors.city = "City is required";
        }

        if (state === "") {
            errors.state = "State is required";
        }

        if (country === "") {
            errors.country = "Country is required";
        }

        if (name === "") {
            errors.name = "Name is required";
        }

        if (description.length < 30) {
            errors.description = "Description needs a minimum of 30 characters";
        }

        if (description.length > 500) {
            errors.description = "Description cannot exceed 500 characters";
        }

        if (price === "") {
            errors.price = "Price is required";
        }
        if (prevImg === "") {
            errors.prevImg = "Preview image is required";
        }

        if (!(prevImg.endsWith(".png") || prevImg.endsWith(".jpg") || prevImg.endsWith(".jpeg"))) {
            errors.prevImg = "Image URL must end in .png, .jpg, or .jpeg";
        }

        if (image1) {
            if (!(image1.endsWith(".png") || image1.endsWith(".jpg") || image1.endsWith(".jpeg"))) {
                errors.image1 = "Image URL must end in .png, .jpg, or .jpeg";
            }
        }

        if (image2) {
            if (!(image2.endsWith(".png") || image2.endsWith(".jpg") || image2.endsWith(".jpeg"))) {
                errors.image2 = "Image URL must end in .png, .jpg, or .jpeg";
            }
        }

        if (image3) {
            if (!(image3.endsWith(".png") || image3.endsWith(".jpg") || image3.endsWith(".jpeg"))) {
                errors.image3 = "Image URL must end in .png, .jpg, or .jpeg";
            }
        }

        if (image4) {
            if (!(image4.endsWith(".png") || image4.endsWith(".jpg") || image4.endsWith(".jpeg"))) {
                errors.image4 = "Image URL must end in .png, .jpg, or .jpeg";
            }
        }

        setErrors(errors);
    }, [address, city, state, country, name, description, price, prevImg, image1, image2, image3, image4]);


    const onSubmit = async (e) => {


        e.preventDefault();

        setHasSubmitted(true);


        const lat = 13;
        const lng = 4;

        const newSpot = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        };

        if (Object.keys(errors).length > 0) return;

        const url = prevImg;

        const createdSpot = await dispatch(createSpotThunk(newSpot))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })


        const previewImg = await dispatch(createImgThunk(createdSpot.id, url, true))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

        history.push(`/spots/${createdSpot.id}`);
    }
    return (
        <div className='spot-form-page'>
            <form onSubmit={onSubmit}>
                <div className='location-section'>
                    <h1>Create a new Spot</h1>
                    <h2>Where's your place located?</h2>
                    <h4>Guests will only get your exact address once they booked a reservation.</h4>

                    <div className='input-forms'>
                        <p>Country</p>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.country}</span>}
                        <input
                            type='text'
                            placeholder=' Country'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className='input-forms'>
                        <p>Address</p>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.address}</span>}
                        <input
                            type='text'
                            placeholder=' Address'
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
                                placeholder='City'
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
                                placeholder='State'
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
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.description}</span>}
                        <textarea
                            type='text'
                            placeholder='Please write at least 30 characters'
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
                            placeholder='Name of your spot'
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
                            placeholder='Price per night (USD)'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min={1}
                        />

                    </div>
                </div>

                <div className="image-section">
                    <h2>Liven up your spot with photos</h2>
                    <h4>Submit a link to at least one photo to publish your spot.</h4>

                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.prevImg}</span>}
                        <input
                            type='text'
                            placeholder='Preview Image URL'
                            value={prevImg}
                            onChange={(e) => setPrevImg(e.target.value)}
                        />
                    </div>

                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.image1}</span>}
                        <input
                            type='text'
                            placeholder='Image URL'
                            value={image1}
                            onChange={(e) => setImage1(e.target.value)}
                        />
                    </div>
                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.image2}</span>}
                        <input
                            type='text'
                            placeholder='Image URL'
                            value={image2}
                            onChange={(e) => setImage2(e.target.value)}
                        />
                    </div>
                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.image3}</span>}
                        <input
                            type='text'
                            placeholder='Image URL'
                            value={image3}
                            onChange={(e) => setImage3(e.target.value)}
                        />
                    </div>
                    <div className='input-forms'>
                        {<span className={hasSubmitted ? "error" : "hidden"}>{errors.image4}</span>}
                        <input
                            type='text'
                            placeholder='Image URL'
                            value={image4}
                            onChange={(e) => setImage4(e.target.value)}
                        />
                    </div>



                </div>

                <div className="spot-button-div">
                    <button className="createSpot-button form-text" type="submit">Create Spot</button>
                </div>
            </form>
        </div>
    )
}


export default CreateSpot


