import { csrfFetch } from "./csrf";

const GET_SPOTS = 'spots/GET_SPOTS';
const GET_SPOT_ID = 'spots/GET_SPOT_ID'
const USER_SPOTS = 'spots/USER_SPOTS'
const CREATE_SPOT = 'spots/CREATE_SPOT'
const CREATE_IMG = "spots/ADD_IMG"
const UPDATE_SPOT = 'spots/UPDATE_SPOT'
const DELETE_SPOT = 'spots/DELETE_SPOT'

//---Action---//

export const getSpotsAction = (spots) => {
    return {

        type: GET_SPOTS,
        spots,
    }
};

export const getSpotAction = (spot) => {
    return {
        type: GET_SPOT_ID,
        spot,
    }
};

export const userSpotsAction = (spots) => {
    return {
        type: USER_SPOTS,
        spots
    }
};

export const createSpotAction = (spot) => {
    return {
        type: CREATE_SPOT,
        spot
    }
};

export const createImgAction = (spotId, url, preview) => {
    return {
        type: CREATE_IMG,
        spotId,
        url,
        preview
    }
};

export const updateSpotAction = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot

    }
};

export const deleteSpotAction = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
};



//---Thunk---//

export const getSpotsThunk = () => async (dispatch) => {
    const response = await csrfFetch("/api/spots");
    if (response.ok) {
        const data = await response.json();
        console.log("is this spots", data); // push action into thunk 
        dispatch(getSpotsAction(data.Spots));
        return data;
    }
};


export const spotDetailThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);
    if (response.ok) {
        const data = await response.json()
        dispatch(getSpotAction(data))
        console.log("BRB FETCHING SPOT", data)
        return data

    }
};


export const userSpotsThunk = () => async (dispatch) => {
    const res = await csrfFetch("/api/spots/current")
    if (res.ok) {
        const data = await res.json();
        dispatch(getSpotsAction(data.Spots));
        return data;
    }
};


export const createSpotThunk = (spot) => async (dispatch) => {
    const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    })
    if (response.ok) {
        const spot = await response.json();
        dispatch(createSpotAction(spot));
        return spot;
    }
};


export const createImgThunk = (spotId, url, preview) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url,
            preview
        })
    })
    if (response.ok) {
        const { spotId, url, preview } = await (response.json());
        dispatch(createImgAction(+spotId, url, preview))
        return spotId
    }
};


export const updateSpotThunk = (spot, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    });
    if (response.ok) {
        const spot = await response.json();
        dispatch(updateSpotAction(spotId));
        return spot;
    }
};


export const deleteSpotThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const data = await (response.json());
        dispatch(deleteSpotAction(spotId))
        return data
    }
};


//---Reducer---//

const initialState = {
    spotsObj: {},
    singleSpotObj: {}
};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SPOTS: {
            const newState = { ...state, spotsObj: {}, singleSpotObj: {} };
            console.log("this is the NEW STATE", newState);
            action.spots.forEach(spot =>
                newState.spotsObj[spot.id] = spot);
            return newState;
        };

        case GET_SPOT_ID: {
            const newState = { ...state, spotsObj: {}, singleSpotObj: {} };
            console.log("New SpotID state", newState)
            newState.singleSpotObj = action.spot;
            console.log("New SpotID state", newState)
            return newState;
        };

        case CREATE_SPOT: {
            const newState = { ...state, singleSpotObj: { ...state.singleSpotObj, ...action.spot } };
            return newState
        };

        case UPDATE_SPOT: {
            const newSpot = { ...state };
            const updatedSpot = action.spot;
            newSpot[updatedSpot.id] = updatedSpot;
            return {
                ...state,
                singleSpotObj: newSpot,
            };
        };

        case DELETE_SPOT: {
            const newState = { ...state }
            delete newState.spotsObj[action.spotId]
            return newState
        };

        default:
            return state
    };
};

export default spotsReducer

