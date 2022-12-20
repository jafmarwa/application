import {
    CLIENT_REGISTER_LOADING, CLIENT_REGISTER_SUCCESS,CLIENT_REGISTER_FAILED, 
    CLIENT_LOGIN_SUCCESS,CLIENT_LOGIN_FAILED,CLIENT_LOGIN_LOADING,
    CLIENT_LOGOUT, 
    } from '../constants/clientConstant'

const initialState= {
    token: localStorage.getItem('token') || null,
    clientInfo: JSON.parse(localStorage.getItem('clientInfo')) || {},
    loading:false,
    isAuth: Boolean(localStorage.getItem('isAuth')) || false,
    errors:null,
};
const clientReducer = (state=initialState,action)=>{
    switch (action.type) {
        case CLIENT_REGISTER_LOADING:
            return {
                ...state,
                loading:true
            }
        case CLIENT_REGISTER_SUCCESS:
            return {
                ...state,
                loading:false,
                token:action.payload.token,
                clientInfo:action.payload.Client,
                errors:null
            }
        case CLIENT_REGISTER_FAILED:
            return {
                ...state,
                loading:false,
                errors:action.payload
            };
            
        case CLIENT_LOGIN_LOADING:
            return {...state, loading:true};
        case CLIENT_LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('isAuth', true);
            localStorage.setItem('clientInfo', JSON.stringify(action.payload.Client));
            return{
                ...state,
                loading:false,
                token:action.payload.token,
                clientInfo:action.payload.Client,
                isAuth:true,
                errors:null
            };
        case CLIENT_LOGIN_FAILED:
            return {
                ...state,
                loading:false,
                errors:action.payload
            };
        case CLIENT_LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('clientInfo');
            localStorage.removeItem('isAuth');
            return {
                ...state, 
                loading:false, 
                errors:null, 
                clientInfo:{},
                token:null,
                isAuth:false
            };

        default:
            return state
    }
}
export default clientReducer;