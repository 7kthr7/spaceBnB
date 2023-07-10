import { csrfFetch } from "./csrf";


const GET_REVIEWS = 'reviews/GET_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEWS';
const DELETE_REVIEW = 'reviews/DELETE_REVIEWS'

//---Action---///

export const getReviewsAction = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
};

export const createReviewAction = (review, spotId) => {
    return {
        type: CREATE_REVIEW,
        spotId,
        review
    }
};

export const deleteReviewAction = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
};

//---Thunk---//

export const getReviewsThunk = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getReviewsAction(data.reviews))
        console.log("BRB FETCHING SOME REVIEWS", data)
    }
};


export const createReviewsThunk = (spotId, review) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(createReviewAction(spotId, data));
    }
};


export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(deleteReviewAction(reviewId));
        return data;
    }
};


//---Reduce---//


const initialState = {
    rev: {},
    user: {}
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_REVIEWS: {
            const newState = { ...state, rev: {}, user: {} };
            console.log("New Review State", newState);
            action.reviews.forEach((review) => (newState.rev[review.id] = review));
            return newState;
        };

        case CREATE_REVIEW: {
            const newState = { ...state };
            newState.rev = {
                ...state.rev,
                [action.review.id]: action.review,
            };
            newState.user = {
                ...state.user,
                [action.review.id]: action.review,
            };
            return newState;
        };

        case DELETE_REVIEW: {
            const newState = { ...state };
            delete newState.rev[action.reviewId];
            delete newState.user[action.reviewId];
            return newState;
        };
        default:
            return state;
    }
};

export default reviewsReducer






