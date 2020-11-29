const dailyInitialState = []
const dailyWed = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_WED':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailyWed;