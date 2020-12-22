import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { imagesReducer} from "./reducers/imagesReducers";


// const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const initialState = {
  
};
const store = createStore(
  combineReducers({
    images: imagesReducer,
    
      }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;