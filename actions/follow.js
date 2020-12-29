import callApi from '../utils/apiCaller';

/**---------------------get StoriesFollow----------------**/
export const actGetStoriesFollowRequest = (user_id) => {
    return dispatch => {
        return callApi(`story/follow/${user_id}`, 'GET', null).then(res => {
            var dataStoriesFollow = res.data;
            dispatch(actGetStoriesFollow(dataStoriesFollow));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetStoriesFollow = (storiesFollow) => {
    return {
        type: 'GET_STORIES_FOLLOW',
        storiesFollow
    }
}

/**----------------------------------unfollow Story------------------------- **/
export const actDeleteStoryFollow = (user_id, story_id) => {
    return dispatch => {
        return callApi(`unfollow/user/${user_id}/story/${story_id}`, 'DELETE', null).then(res => {
            dispatch(actUnFollow(story_id));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actUnFollow = (story_id) => {
    return {
        type: 'UN_FOLLOW',
        story_id
    }
}

/**---------------------follow story-----------------------**/
export const actFollowRequest = (story) => {
    return dispatch => {
        return callApi('follow', 'POST', story).then(res => {
            // dispatch(actFollow(res.data));
        }).catch(err => {
            console.log(err)
        });
    };
}

// export const actFollow = (story) => {
//     return {
//         type: 'FOLLOW',
//         story
//     }
// }