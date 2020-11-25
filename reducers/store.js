import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import stories from './stories';
import authors from './authors';
import categories from './categories';
import chapters from './chapters';
import images from './imgs';


const AppReducers = combineReducers({
    stories,
    authors,
    categories,
    chapters,
    images
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;