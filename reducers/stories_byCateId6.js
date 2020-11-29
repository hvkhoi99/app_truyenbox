
const InitialState = []
const storiesByCateId6 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID6':
            state = action.storiesByCateId;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId6;