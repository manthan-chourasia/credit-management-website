
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseurl';


export const addTransfer = (transfer) => ({
    type: ActionTypes.ADD_TRANSFER,
    payload: {
        transfer:transfer
    }
});
export const postTransfer = (Fromname, Toname, Amount) => (dispatch) => {

    const newTransfer = {
        fromname: Fromname,
        toname: Toname,
        amount: Amount
    };
    
    
    return fetch(baseUrl + 'transfer', {
        method: "POST",
        body: JSON.stringify(newTransfer),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addTransfer(response)))
    .catch(error =>  { console.log('post Transfer', error.message); alert('Your Transfer could not be posted\nError: '+error.message); });
};












export const fetchTransfer = () => (dispatch) => {    
    return fetch(baseUrl + 'transfer')
    .then(response => response.json())
    .then(res => dispatch(addTransfers(res)));
};

export const TransferFailed = (errmess) => ({
    type: ActionTypes.TRANSFER_FAILED,
    payload: errmess
});

export const addTransfers = (transfer) => ({
    type: ActionTypes.ADD_TRANSFERS,
    payload: transfer
});

export const fetchDetail = () => (dispatch) => {    
    return fetch(baseUrl + 'view')
    .then(response => response.json())
    .then(res => dispatch(adddetail(res)));
};

export const detailLoading = () => ({
    type: ActionTypes.DETAIL_LOADING
});

export const detailFailed = (errmess) => ({
    type: ActionTypes.DETAIL_FAILED,
    payload: errmess
});

export const adddetail = (detail) => ({
    type: ActionTypes.ADD_DETAIL,
    payload: detail
});