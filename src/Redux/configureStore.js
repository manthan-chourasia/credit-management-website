import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Detail} from './detail';
import {Transfer} from './transfer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
           detail:Detail,
           transfer:Transfer
       }),applyMiddleware(thunk, logger)
    );

    return store;
}