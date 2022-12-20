
import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILED,
         ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILED,
         UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAILED,
         DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILED}
  from "../constants/productConstant";


const initialStateProduct= {
    loading:false,
    products:[],
    errors:null,
    createdP:{}
};


export const productListReducer = (state=initialStateProduct, action)=>{
    switch(action.type){
        // getProduct
        case PRODUCT_LIST_REQUEST:
            return{
                ...state,
                loading:true,
                products:[]
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                products: action.payload
            }
        case PRODUCT_LIST_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
            // addProduct
            case ADD_PRODUCT_REQUEST:
                return{
                    ...state,
                }
            case ADD_PRODUCT_SUCCESS:
                return{
                    ...state,
                    createdP:action.payload.createdProduct
                }
            case ADD_PRODUCT_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                // updateproduct
                case UPDATE_PRODUCT_REQUEST:
                return{
                    ...state,
                }
            case UPDATE_PRODUCT_SUCCESS:
                return{
                    ...state,
                    msg:action.payload.msg
                }
            case UPDATE_PRODUCT_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                // deleteproduct
                case DELETE_PRODUCT_REQUEST:
                    return{
                        ...state,
                    }
                case DELETE_PRODUCT_SUCCESS:
                    return{
                        ...state,
                        msg:action.payload.msg
                    }
                case DELETE_PRODUCT_FAILED:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }



            default :
            return state
    }
}

  