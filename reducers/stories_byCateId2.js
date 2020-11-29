
const InitialState = []
const storiesByCateId2 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID2':
            state = action.storiesByCateId;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId2;