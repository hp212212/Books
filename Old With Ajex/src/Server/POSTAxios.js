import http from './http-clint-axios.js';

export const PostUsersData = (Data) => {
    return http.post('Users', Data).then((response) => {
        return response
    }).catch((err) => {
        return err;
    });
}

// export const PostUsersData = (Data) => {
//     $.ajax({
//         url: 'http://localhost:5000/Users',
//         type: 'POST',
//         data: Data,
//         success: function (aaa) { },
//         error: function (err) { }
//     })
// }

export const PostNewBookTopic = (Data) => {
    return http.post('BookTopics', Data).then((response) => {
        return response
    }).catch((err) => {
        return err;
    });
}

// export const PostNewBookTopic = (Data) => {
//     $.ajax({
//         url: 'http://localhost:5000/BookTopics',
//         type: 'POST',
//         data: Data,
//         success: function (aaa) { },
//         error: function (err) { }
//     })
// }

export const PostNewBookTitle = (Data) => {
    return http.post('BookTitle', Data).then((response) => {
        return response
    }).catch((err) => {
        return err;
    });
}

// export const PostNewBookTitle = (Data) => {
//     $.ajax({
//         url: 'http://localhost:5000/BookTitle',
//         type: 'POST',
//         data: Data,
//         success: function (aaa) { },
//         error: function (err) { }
//     })
// }
