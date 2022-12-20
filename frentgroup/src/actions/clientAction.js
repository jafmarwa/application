import axios from "axios";
import { CLIENT_REGISTER_LOADING, CLIENT_REGISTER_SUCCESS, CLIENT_REGISTER_FAILED} from "../constants/clientConstant";
import { CLIENT_LOGIN_LOADING,CLIENT_LOGIN_SUCCESS,CLIENT_LOGIN_FAILED,CLIENT_LOGOUT } from './../constants/clientConstant';

export const registerNewClient =(clientInfo,navigate)=> async(dispatch)=>{
    try {
        dispatch({type:CLIENT_REGISTER_LOADING})
        const res = await axios.post('/api/Client/register',clientInfo)
        dispatch({type:CLIENT_REGISTER_SUCCESS,payload:res.data})
        navigate('/login')
    } catch (error) {
        dispatch({type:CLIENT_REGISTER_FAILED,payload:error.response.data.errors}) 
    }
};

export const loginClient = (clientInfo,navigate) => async (dispatch) =>{
    try {
        dispatch({type:CLIENT_LOGIN_LOADING});
        const res = await axios.post('/api/Client/login', clientInfo);
        dispatch({type:CLIENT_LOGIN_SUCCESS, payload: res.data});
        navigate('/ProfileAdmin');
    } catch (error) {
        dispatch({type:CLIENT_LOGIN_FAILED, payload:error})
    }
};

export const logoutAction = ()=>{
    return {
        type: CLIENT_LOGOUT
    }
};