import http from './http-clint-axios.js';

export function GetUsersData() {
    return http.get(`Users`).then((response) => {
        // console.log(response)
        if (response.status === 200 && response != null) {
            return response.data
        } else {
            return response.statusText;
        }
    }).catch((error) => {
        return error;
    });
}
export function GetAdminData() {
    return http.get(`AdminLogin`).then((response) => {
        // console.log(response)
        if (response.status === 200 && response != null) {
            return response.data;
        } else {
            return response.statusText;
        }
    }).catch((error) => {
        return error;
    });
}
export function GetAdminPerson() {
    return http.get(`AdminPerson`).then((response) => {
        // console.log(response)
        if (response.status === 200 && response != null) {
            return response.data;
        } else {
            return response.statusText;
        }
    }).catch((error) => {
        return error;
    });
}
export function GetBookTopics() {
    return http.get(`BookTopics`).then((response) => {
        // console.log(response)
        if (response.status === 200 && response != null) {
            return response.data;
        } else {
            return response.statusText;
        }
    }).catch((error) => {
        return error;
    });
}
export function GetBookTitle() {
    return http.get(`BookTitle`).then((response) => {
        // console.log(response)
        if (response.status === 200 && response != null) {
            return response.data;
        } else {
            return response.statusText;
        }
    }).catch((error) => {
        return error;
    });
}
