import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};
const middleware = [thunk];   //用数组装起来
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;