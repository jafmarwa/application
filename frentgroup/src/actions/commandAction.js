import axios from "axios"
import { COMMAND_LIST_REQUEST, COMMAND_LIST_SUCCESS, COMMAND_LIST_FAILED,
         ADD_COMMAND_REQUEST,ADD_COMMAND_SUCCESS, ADD_COMMAND_FAILED,
         UPDATE_COMMAND_REQUEST, UPDATE_COMMAND_SUCCESS, UPDATE_COMMAND_FAILED,
         DELETE_COMMAND_REQUEST, DELETE_COMMAND_SUCCESS, DELETE_COMMAND_FAILED, 
       } from './../constants/commandConstants';


export const listCommands = () => {

    return async dispatch => {
        dispatch({type:COMMAND_LIST_REQUEST})
   
    try{
        const res = await axios.get('/api/Command/getcommand',
        {headers:{token:localStorage.getItem('token')}})
        if(res.status === 200){
            dispatch({
                 type:COMMAND_LIST_SUCCESS,
                 payload: {commands:res.data}
            }) }
    } catch (error){
        dispatch({
            type: COMMAND_LIST_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
}}
// addcommand
export const addCommand = (data) => {
    return async dispatch=>{
        dispatch({type:ADD_COMMAND_REQUEST})
    
    try{
        const res = await axios.post('/api/Command/newcommand', data,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:ADD_COMMAND_SUCCESS,
                payload:{createdCommand:res.data}
                
            })
        }

    } catch (error){
        dispatch({
            type: ADD_COMMAND_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
    }} 
// updatproduct
export const updateCommand = (_id,data) => {
    return async dispatch=>{
        dispatch({type:UPDATE_COMMAND_REQUEST})
    
    try{
        const res = await axios.post(`/api/Command/${_id}/updcommand`, data,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:UPDATE_COMMAND_SUCCESS,
                payload:{msg:res.data}
            })
        }

    } catch (error){
        dispatch({
            type: UPDATE_COMMAND_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }} 
}
// deleteproduct
export const deleteCommandAction = (_id)=>{

    return async dispatch =>{
        dispatch({type:DELETE_COMMAND_REQUEST})
    try {
        const res = await axios.get(`/api/Command/${_id}/delcommand`,
    {headers:{token:localStorage.getItem('token')}})
    if (res.status===200){
        dispatch({
            type:DELETE_COMMAND_SUCCESS,
            payload:{msg:res.data}
        })
    }
            
  } catch (error) {
    dispatch({
        type: DELETE_COMMAND_FAILED,
        payload:error.response && error.response.data.message 
        ? error.response.data.message
        : error.message,
    })
            
        }

    }
}