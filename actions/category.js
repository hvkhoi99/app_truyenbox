import callApi from '../utils/apiCaller';

export const getListCategories = (story_id) => {
    return dispatch => {
        return callApi(`categories/story/${story_id}`, 'GET', null).then(res => {
            dispatch(actGetCategories(res.data));
        });
    };
}

export const actGetCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES',
        categories
    }
}