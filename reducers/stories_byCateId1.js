
const InitialState = []
const storiesByCateId1 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID1':
            state = action.storiesByCateId1;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId1;