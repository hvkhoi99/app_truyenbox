const dailyInitialState = []
const daily = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default daily;