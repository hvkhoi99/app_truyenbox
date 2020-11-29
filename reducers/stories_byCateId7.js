
const InitialState = []
const storiesByCateId7 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID7':
            state = action.storiesByCateId;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId7;