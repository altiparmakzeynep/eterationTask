import persistReducer from 'redux-persist/es/persistReducer';
import storageSession from 'redux-persist/es/storage/session'
import { 
    FETCH_PRODUCTS, 
    SET_MODAL_VISIBLE, 
    SET_FILTERED_DATA 
} from '../actions/homeAction';

const INITIAL_STATE = {
    products: [],
    modalVisible: false,
    filteredData: [],
    myPage:1,
    eachPage: 12
}
const persistConfig = {
    key: 'home',
    storage: storageSession, //normally Asyncstorage
}
const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: state.products.concat(action.payload),
                myPage: action.page
            }
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload
            }
        case SET_FILTERED_DATA:
            return {
                ...state,
                filteredData: action.payload
            }
        default:
            return state;
    }
}
export default persistReducer(persistConfig, homeReducer);