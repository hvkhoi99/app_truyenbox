const InitialState = []
var findIndex = (list, id) => {
    var result = -1;
    list.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    })
    return result;
}

const history = (state = InitialState, action) => {
    var index = -1;
    switch (action.type) {
        case 'GET_HISTORY':
            state = action.stories;
            return [...state]
        case 'DELETE_HISTORY':
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        
        default:
            return state
    }
}

export default history;