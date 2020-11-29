import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import stories from './stories';
import authors from './authors';
import categories from './categories';
import chapters from './chapters';
import images from './imgs';
import storiesByCateId1 from './stories_byCateId1'
import storiesByCateId2 from './stories_byCateId2'
import storiesByCateId3 from './stories_byCateId3'
import storiesByCateId4 from './stories_byCateId4'
import storiesByCateId5 from './stories_byCateId5'
import storiesByCateId6 from './stories_byCateId6'
import storiesByCateId7 from './stories_byCateId7'
import storiesByCateId8 from './stories_byCateId8'
import storiesByCateId9 from './stories_byCateId9'
import daily from './daily'
import dailyThur from './stories_dailyThur'
import dailyWed from './stories_dailyWed'
import dailySun from './stories_dailySun'
import dailyFri from './stories_dailyFri'
import dailyTues from './stories_dailyTues'
import dailySat from './stories_dailySat'


const AppReducers = combineReducers({
    stories,
    authors,
    categories,
    chapters,
    images,
    storiesByCateId1,
    storiesByCateId2,
    storiesByCateId3,
    storiesByCateId4,
    storiesByCateId5,
    storiesByCateId6,
    storiesByCateId7,
    storiesByCateId8,
    storiesByCateId9,
    daily,
    dailyThur,
    dailyWed,
    dailyTues,
    dailyFri,
    dailySat,
    dailySun
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
}
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;