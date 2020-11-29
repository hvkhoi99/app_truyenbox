
const InitialState = []
const storiesByCateId9 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID9':
            state = action.storiesByCateId9;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId9;