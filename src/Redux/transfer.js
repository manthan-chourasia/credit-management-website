import * as ActionTypes from './ActionTypes';

export const Transfer = (state = { errMess: null, transfer:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TRANSFERS:
      return {...state, errMess: null, transfer: action.payload};

    case ActionTypes.TRANSFER_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_TRANSFER:
        var transfered = action.payload;
      
        return { ...state, transfer: state.transfer.concat(transfered)};

    default:
      return state;
  }
};