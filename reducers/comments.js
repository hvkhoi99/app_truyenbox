const InitialState = []
const comments = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_COMMENTS':
            state = action.comments
            return [...state]

        case 'ADD_COMMENT':
            state.unshift(action.comment)
            return [...state]

        default:
            return state
    }
}

export default comments;