const rankWeekInitialState = []
const rankWeek = (state = rankWeekInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_RANKWEEK':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default rankWeek;