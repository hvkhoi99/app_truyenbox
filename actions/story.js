import callApi from '../utils/apiCaller';

export const getListStories = () => {
    return dispatch => {
        return callApi('stories', 'GET', null).then(res => {
            dispatch(actGetStories(res.data));
        });
    };
}

export const actGetStories = (stories) => {
    return {
        type: 'GET_STORIES',
        stories
    }
}

export const getChaptersByStoryId = (story_id) => {
    return dispatch => {
        return callApi(`story/${story_id}/chapters`, 'GET', null).then(res => {
            dispatch(actGetChapters(res.data));
        });
    };
}

export const actGetChapters = (chapters) => {
    return {
        type: 'GET_CHAPTERS',
        chapters
    }
}