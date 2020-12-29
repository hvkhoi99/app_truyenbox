
const userCurrenttttInitialState = {}
const userCurrentttt = (state = userCurrenttttInitialState, action) => {
    switch (action.type) {
        case 'GET_USER_CURRENT':
            state = action.user;
            return {...state};
        case 'ADD_USER_CURRENT':
            state = Object.assign(state, action.user)
            return {...state};
        default:
            return state
    }
}

export default userCurrentttt;