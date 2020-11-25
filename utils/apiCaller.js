import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `http://192.168.43.171:8000/api/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}