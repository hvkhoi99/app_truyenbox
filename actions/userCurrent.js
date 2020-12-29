// import Axios from "axios";
import callApi from "../utils/apiCaller";

export const actEditUserRequest = (user_id, user) => {
    return dispatch => {
        return callApi(`user/${user_id}`, 'PUT', user).then(res => {
        }).catch(error => {
            console.log(error);
        });
    };
}
export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`user/${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data));
        }).catch(error => {
            console.log(error)
        });
    };
}

export const actGetUser = (user) => {
    return {
        type: 'GET_USER_CURRENT',
        user
    }
}


