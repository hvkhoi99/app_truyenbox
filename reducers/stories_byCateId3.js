
const InitialState = []
const storiesByCateId3 = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_BY_CATEGORY_ID3':
            state = action.storiesByCateId;
            return [...state];
        default:
            return state
    }
}

export default storiesByCateId3;