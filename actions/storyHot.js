import callApi from '../utils/apiCaller';

export const getTruyenHotRequest = (number) => {
    return dispatch => {
        return callApi(`story/many-view/${number}`, 'GET', null).then(res => {
            dispatch(actGetTruyenHot(res.data));
        }).catch(err =>{
            console.log(err.res)
        });
    };
}


export const actGetTruyenHot = (stories) => {
    return {
        type: 'GET_TRUYEN_HOT',
        stories
    }
}