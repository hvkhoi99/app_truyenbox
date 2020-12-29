import callApi from '../utils/apiCaller';

export const actSearchStoriesRequest = (name) => {
    return dispatch => {
        return callApi(`story/search/${name}`, 'GET', null).then(res => {
            dispatch(actSearchStories(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actSearchStories = (stories) => {
    return {
        type: 'SEARCH_STORIES',
        stories
    }
}