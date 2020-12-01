import callApi from '../utils/apiCaller';

export const getListImgs = (chapter_id) => {
    return dispatch => {
        return callApi(`images/chapter/${chapter_id}`, 'GET', null).then(res => {
            dispatch(actGetImg(res.data));
        }).catch(err=>{
            console.log(err.res)
        });
    };
}

export const actGetImg = (images) => {
    return {
        type: 'GET_IMAGES',
        images
    }
}