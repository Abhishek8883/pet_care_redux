import { createStore,combineReducers,applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import userReducer from './Reducers/userReducer'

const Reducers = combineReducers({
    user : userReducer
})

const middleware = [thunk]

const store = createStore(Reducers,composeWithDevTools(applyMiddleware(...middleware)))

export default store