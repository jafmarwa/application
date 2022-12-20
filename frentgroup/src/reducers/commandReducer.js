import { COMMAND_LIST_REQUEST, COMMAND_LIST_SUCCESS, COMMAND_LIST_FAILED,
         ADD_COMMAND_REQUEST, ADD_COMMAND_SUCCESS, ADD_COMMAND_FAILED, UPDATE_COMMAND_REQUEST, UPDATE_COMMAND_SUCCESS, UPDATE_COMMAND_FAILED, DELETE_COMMAND_REQUEST, DELETE_COMMAND_SUCCESS, DELETE_COMMAND_FAILED,
       } from './../constants/commandConstants';


const initialStateCommand= {
    commands:[],
    error:null,
    createcmd:{}
};


export const commandListReducer = (state=initialStateCommand, action)=>{
    switch(action.type){
// getProduct
        case COMMAND_LIST_REQUEST:
            return{
                ...state
            }
        case COMMAND_LIST_SUCCESS:
            return{
                ...state,
                commands: action.payload.commands
            }
        case COMMAND_LIST_FAILED:
            return{
                ...state,
                error:action.payload.error
            }
// addProduct
            case ADD_COMMAND_REQUEST:
                return{
                    ...state,
                }
            case ADD_COMMAND_SUCCESS:
                return{
                    ...state,
                    createcmd:action.payload.createdCommand
                }
            case ADD_COMMAND_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                 // updatecommand
                 case UPDATE_COMMAND_REQUEST:
                    return{
                        ...state,
                    }
                case UPDATE_COMMAND_SUCCESS:
                    return{
                        ...state,
                        msg:action.payload.msg
                    }
                case UPDATE_COMMAND_FAILED:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }
                    // deleteproduct
                case DELETE_COMMAND_REQUEST:
                    return{
                        ...state,
                    }
                case DELETE_COMMAND_SUCCESS:
                    return{
                        ...state,
                        msg:action.payload.msg
                    }
                case DELETE_COMMAND_FAILED:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload
                    }


            default :
            return state
    }
}
