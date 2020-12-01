
const storiesDeXuatInitialState = []
const storiesDeXuat = (state = storiesDeXuatInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DE_XUAT':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default storiesDeXuat;