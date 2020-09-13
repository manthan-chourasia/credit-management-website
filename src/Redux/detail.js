import * as ActionTypes from './ActionTypes';

export const Detail = (state = { isLoading: true,
    errMess: null,
    detail:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DETAIL:
            return {...state, isLoading: false, errMess: null, detail: action.payload};

        case ActionTypes.DETAIL_LOADING:
            return {...state, isLoading: true, errMess: null, detail: []}

        case ActionTypes.DETAIL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};