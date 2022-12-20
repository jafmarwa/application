import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import clientReducer from './reducers/clientReducer';
import thunk from 'redux-thunk';
import {productListReducer } from './reducers/productReducer';
import {commandListReducer} from './reducers/commandReducer'
import {projectListReducer} from './reducers/projectReducer'
const rootReducer = combineReducers({client:clientReducer,
    productList:productListReducer,
    commandList:commandListReducer,
    projectList:projectListReducer
});
export default createStore(rootReducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));





