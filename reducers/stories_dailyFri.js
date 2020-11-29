const dailyInitialState = []
const dailyFri = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_FRI':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailyFri;