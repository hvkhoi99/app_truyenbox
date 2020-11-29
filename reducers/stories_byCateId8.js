
const InitialState = []
const storiesByCateId8 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID8':
            state = action.storiesByCateId8;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId8;