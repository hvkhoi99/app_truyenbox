
const InitialState = []
const storiesByCateId5 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID5':
            state = action.storiesByCateId;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId5;