
const authorsInitialState = {}
const authors = (state = authorsInitialState, action) => {
    switch (action.type) {
        case 'GET_AUTHOR':
            state = action.author;
            return { ...state }

        default:
            return state
    }
}

export default authors;