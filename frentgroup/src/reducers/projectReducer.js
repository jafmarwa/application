import { 
    PROJECT_LIST_REQUEST,PROJECT_LIST_SUCCESS, PROJECT_LIST_FAILED,
    ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILED,
    DELETE_PROJECT_REQUEST,DELETE_PROJECT_SUCCESS,DELETE_PROJECT_FAILED, UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILED,  
       } from "../constants/projectConstant";

const initialStateProject= {
    
    projects:[],
    errors:null,
    projectInfo:{}
};


export const projectListReducer = (state=initialStateProject, action)=>{
    switch(action.type){
        // getProduct
        case PROJECT_LIST_REQUEST:
            return{
                ...state,
                projects:[]
            }
        case PROJECT_LIST_SUCCESS:
            return{
                ...state,
                projects: action.payload

            }
        case PROJECT_LIST_FAILED:
            return{
                ...state,
                error:action.payload
            }
            // addProduct
            case ADD_PROJECT_REQUEST:
                return{
                    ...state,
                }
            case ADD_PROJECT_SUCCESS:
                return{
                    ...state,
                    projectInfo:action.payload.createdProject
                }
            case ADD_PROJECT_FAILED:
                return{
                    ...state,
                    error:action.payload
                }
                // deleteproduct
                case DELETE_PROJECT_REQUEST:
                    return{
                        ...state,
                    }
                case DELETE_PROJECT_SUCCESS:
                    return{
                        ...state,
                        msg:action.payload.msg
                    }
                case DELETE_PROJECT_FAILED:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                     //     // updateproject
                case UPDATE_PROJECT_REQUEST:
                return{
                    ...state,
                }
            case UPDATE_PROJECT_SUCCESS:
                return{
                    ...state,
                    msg:action.payload.msg
                    // projectInfo:action.payload.updatedProject

                }
            case UPDATE_PROJECT_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }



            default :
            return state
    }
}