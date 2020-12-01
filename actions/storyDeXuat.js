
import callApi from '../utils/apiCaller';

/**------------Stories de xuat --------------- */
export const getListStoriesDeXuat = (number) => {
    return dispatch => {
        return callApi(`story/many-view/${number}`, 'GET', null).then(res => {
            dispatch(actGetStoriesDeXuat(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetStoriesDeXuat = (stories) => {
    return {
        type: 'GET_STORIES_DE_XUAT',
        stories
    }
}