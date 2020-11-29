const dailyInitialState = []
const dailyTues = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_TUES':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailyTues;