import callApi from '../utils/apiCaller';

export const getListAuthor = (story_id) => {
    return dispatch => {
        return callApi(`author/story/${story_id}`, 'GET', null).then(res => {
            dispatch(actGetAuthor(res.data));
        });
    };
}

export const actGetAuthor = (author) => {
    return {
        type: 'GET_AUTHOR',
        author
    }
}