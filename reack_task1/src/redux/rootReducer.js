import { combineReducers } from "redux";
import buyReducer from './buy/buy-reducer';
const rootReducer=combineReducers({
    buy:buyReducer
});
export default rootReducer;