const rankDayInitialState = []
const rankDay = (state = rankDayInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANKDAY':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default rankDay;