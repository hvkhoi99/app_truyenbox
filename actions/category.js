import callApi from '../utils/apiCaller';

export const getListCategoriesByStoryId = (story_id) => {
    return dispatch => {
        return callApi(`categories/story/${story_id}`, 'GET', null).then(res => {
            dispatch(actGetCategories(res.data));
        });
    };
}

export const getListCategories = () => {
    return dispatch => {
        return callApi('categories', 'GET', null).then(res => {
            dispatch(actGetCategories(res.data));
        });
    };
}

export const actGetCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES_BY_STORY_ID',
        categories
    }
}