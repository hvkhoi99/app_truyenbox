const getCategoryInitialState = []
var findIndex = (list, id) => {
    var result = -1;
    list.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    })
    return result;
}
const getStoriesFollow = (state = getCategoryInitialState, action) => {
    var index = -1;
    switch (action.type) {
        case 'GET_STORIES_FOLLOW':
            state = action.storiesFollow
            return [...state]

        case 'UN_FOLLOW':
            index = findIndex(state, action.story_id);
            state.splice(index, 1);
            return [...state]
        default:
            return [...state]
    }
}

export default getStoriesFollow;