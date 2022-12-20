import { 
    PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILED,
    ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILED, 
    UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILED, 
    DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILED,
} from "../constants/productConstant";
import axios from 'axios';

 export const listProducts = () => async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/Product/getproduct')
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }
};

// addproduct
export const addProduct = (data) => {
    return async dispatch=>{
        dispatch({type:ADD_PRODUCT_REQUEST})
    try{
        const res = await axios.post('/api/Product/newproduct', data,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:ADD_PRODUCT_SUCCESS,
                payload:{createdProduct:res.data}
            })
        }
    } catch (error){
        dispatch({
            type: ADD_PRODUCT_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }} 
}

// updatproduct
export const updateProduct = (_id,data) => {
    return async dispatch=>{
        dispatch({type:UPDATE_PRODUCT_REQUEST})
    
    try{
        const res = await axios.post(`/api/Product/${_id}/updatproduct`, data,
        {headers:{token:localStorage.getItem('token')}})
        if (res.status===200){
            dispatch({
                type:UPDATE_PRODUCT_SUCCESS,
                payload:{msg:res.data}
            })
        }

    } catch (error){
        dispatch({
            type: UPDATE_PRODUCT_FAILED,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }} 
}

// deleteproduct
export const deleteProductAction = (_id)=>{

    return async dispatch =>{
        dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const res = await axios.get(`/api/Product/${_id}/deleteproduct`,
    {headers:{token:localStorage.getItem('token')}})
    if (res.status===200){
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:{msg:res.data}
        })
    }
            
  } catch (error) {
    dispatch({
        type: DELETE_PRODUCT_FAILED,
        payload:error.response && error.response.data.message 
        ? error.response.data.message
        : error.message,
    })
            
        }

    }
}