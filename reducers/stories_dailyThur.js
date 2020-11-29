const dailyInitialState = []
const dailyThur = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_THUR':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailyThur;