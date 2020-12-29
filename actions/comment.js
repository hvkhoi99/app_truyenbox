import callApi from '../utils/apiCaller';

export const actGetCommentsRequest = (id) => {
    return dispatch => {
        return callApi(`comment/get/${id}`, 'GET', null).then(res => {
            dispatch(actGetComments(res.data));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actGetComments = (comments) => {
    return {
        type: 'GET_COMMENTS',
        comments
    }
}
export const actAddCommentRequest = (comment) => {
    return dispatch => {
        return callApi('comment/add', 'POST', comment).then(res => {
            var newComment = {
                content: res.data.content,
                created_at: res.data.created_at,
                name: JSON.parse(localStorage.getItem('userLogin')).name,
            }
            dispatch(actGetComments(newComment));
        }).catch(err => {
            console.log(err.res)
        });
    };
}

export const actAddComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}