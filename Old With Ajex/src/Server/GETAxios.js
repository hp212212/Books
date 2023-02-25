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

// export const GetUsersData = () => {
//     let xyz = []
//     $.ajax({
//         url: 'http://localhost:5000/Users',
//         type: 'GET',
//         async: false,
//         success: function (aaa) {
//             xyz = aaa;
//         },
//         error: function (err) {
//         }
//     })
//     return xyz
// }

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

// export const GetAdminData = () => {
//     let xyz = []
//     $.ajax({
//         url: 'http://localhost:5000/AdminLogin',
//         type: 'GET',
//         async: false,
//         success: function (aaa) {
//             xyz = aaa;
//         },
//         error: function (err) {
//         }
//     })
//     return xyz
// }

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

// export const GetAdminPerson = () => {
//     let xyz = []
//     $.ajax({
//         url: 'http://localhost:5000/AdminPerson',
//         type: 'GET',
//         async: false,
//         success: function (aaa) {
//             xyz = aaa;
//         },
//         error: function (err) {
//         }
//     })
//     return xyz
// }

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

// export const GetBookTopics = () => {
//     let xyz = []
//     $.ajax({
//         url: 'http://localhost:5000/BookTopics',
//         type: 'GET',
//         async: false,
//         success: function (aaa) {
//             xyz = aaa;
//         },
//         error: function (err) {
//         }
//     })
//     return xyz
// }

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

// export const GetBookTitle = () => {
//     let xyz = []
//     $.ajax({
//         url: 'http://localhost:5000/BookTitle',
//         type: 'GET',
//         async: false,
//         success: function (aaa) {
//             xyz = aaa;
//         },
//         error: function (err) {
//         }
//     })
//     return xyz
// }