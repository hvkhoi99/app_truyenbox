const rankMonthInitialState = []
const rankMonth = (state = rankMonthInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANKMONTH':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default rankMonth;