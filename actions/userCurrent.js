// import Axios from "axios";
import callApi from "../utils/apiCaller";

export const actEditUserRequest = (user_id, user) => {
    return dispatch => {
        return callApi(`user/${user_id}`, 'PUT', user).then(res => {
        }).catch(error => {
            console.log(error.res);
        });
    };
}



