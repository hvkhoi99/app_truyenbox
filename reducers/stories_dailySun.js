const dailyInitialState = []
const dailySun = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_SUN':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailySun;