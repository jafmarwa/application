import axios from 'axios';
import { PROJECT_LIST_REQUEST,PROJECT_LIST_FAILED,  PROJECT_LIST_SUCCESS,
         ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILED, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILED, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILED,
       } from './../constants/projectConstant';

export const listProjects = () => async (dispatch)=>{
    
    try{
        dispatch({type:PROJECT_LIST_REQUEST})
        const {data} = await axios.get('/api/Project/getproject')
        dispatch({
            type:PROJECT_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: PROJECT_LIST_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
};
// addcommand
export const addProject = (info) => {
    return async dispatch=>{
        dispatch({type:ADD_PROJECT_REQUEST})
    console.log(info)
    const formData = new FormData();
    formData.append('uploads',info.file)
    formData.append('info',JSON.stringify(info.projectInfo))
    try{
        const res = await axios.post('/api/Project/newproject', formData,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:ADD_PROJECT_SUCCESS,
                payload:{createdProject:res.data}
                
            })
        }

    } catch (error){
        dispatch({
            type: ADD_PROJECT_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
    }} 
    // deleteproduct
export const deleteProjectAction = (_id)=>{

    return async dispatch =>{
        dispatch({type:DELETE_PROJECT_REQUEST})
    try {
        const res = await axios.get(`/api/Project/${_id}/deleteproject`,
    {headers:{token:localStorage.getItem('token')}})
    if (res.status===200){
        dispatch({
            type:DELETE_PROJECT_SUCCESS,
            payload:{msg:res.data}
        })
    }
            
  } catch (error) {
    dispatch({
        type: DELETE_PROJECT_FAILED,
        payload:error.response && error.response.data.message 
        ? error.response.data.message
        : error.message,
    })
            
        }

    }
}
// updatproduct
export const updateProject = (_id,info,projectInfo) => {
    return async dispatch=>{
        dispatch({type:UPDATE_PROJECT_REQUEST})
        console.log(info)
        const formData = new FormData();
        formData.append('uploads',info.file)
        formData.append('info',JSON.stringify(info.projectInfo))
  
    try{
        const res = await axios.put(`/api/Project/${_id}/updatproject`,formData,projectInfo,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:UPDATE_PROJECT_SUCCESS,
                payload:{msg:res.data}
            })
        }

    } catch (error){
        dispatch({
            type: UPDATE_PROJECT_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }} 
}