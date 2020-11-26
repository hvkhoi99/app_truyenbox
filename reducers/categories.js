
const categoriesInitialState = []
const categories = (state = categoriesInitialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_BY_STORY_ID':
            state = action.categories;
            return [...state]
        case 'GET_CATEGORIES':
            state = action.categories
        default:
            return state
    }
}

export default categories;