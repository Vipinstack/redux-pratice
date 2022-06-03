import {combineReducers} from 'redux';
import { productReducers } from './productReducers';

const reducer = combineReducers({
    AllProducts:productReducers
})

export default reducer