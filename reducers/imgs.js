const imagesInitialState = []
const images = (state = imagesInitialState, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            state = action.images;
            return [...state];
        default:
            return state
    }
}

export default images;