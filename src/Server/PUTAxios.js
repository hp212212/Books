import http from './http-clint-axios.js';

export function PutAdminPersonData(Data) {
    return http.put(`AdminPerson/${1}`, Data).then((response) => {
        return response
    }).catch((error) => {
        return error;
    });
}

// export const PutAdminPersonData = (Data) => {
//     $.ajax({
//         url: `http://localhost:5000/AdminPerson/${1}`,
//         type: 'PUT',
//         data: Data,
//         success: function (aaa) { },
//         error: function (err) { }
//     })
// }

export function PutNewBookTitleWithPages(Data, index) {
    return http.put(`BookTitle/${index}`, Data).then((response) => {
        return response
    }).catch((error) => {
        return error;
    });
}

// export const PostNewBookTitleWithPages = (Data, index) => {
//     $.ajax({
//         url: `http://localhost:5000/BookTitle/${index}`,
//         type: 'PUT',
//         data: Data,
//         success: function (aaa) { },
//         error: function (err) { }
//     })
// }