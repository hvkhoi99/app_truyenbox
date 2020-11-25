const chaptersInitialState = []
const chapters = (state = chaptersInitialState, action) => {
    switch (action.type) {
        case 'GET_CHAPTERS':
            state = action.chapters;
            return [...state];
        // case 'GET_CHAPTER_ID':
        //     state = action.chapters;
        //     return [...state];
        default:
            return state
    }
}

export default chapters;