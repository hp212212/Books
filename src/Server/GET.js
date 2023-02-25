import $ from 'jquery'

export const GetUsersData = () => {
    let xyz = []
    $.ajax({
        url: 'http://localhost:5000/Users',
        type: 'GET',
        async: false,
        success: function (aaa) {
            xyz = aaa;
        },
        error: function (err) {
        }
    })
    return xyz
}

export const GetAdminData = () => {
    let xyz = []
    $.ajax({
        url: 'http://localhost:5000/AdminLogin',
        type: 'GET',
        async: false,
        success: function (aaa) {
            xyz = aaa;
        },
        error: function (err) {
        }
    })
    return xyz
}

export const GetAdminPerson = () => {
    let xyz = []
    $.ajax({
        url: 'http://localhost:5000/AdminPerson',
        type: 'GET',
        async: false,
        success: function (aaa) {
            xyz = aaa;
        },
        error: function (err) {
        }
    })
    return xyz
}

export const GetBookTopics = () => {
    let xyz = []
    $.ajax({
        url: 'http://localhost:5000/BookTopics',
        type: 'GET',
        async: false,
        success: function (aaa) {
            xyz = aaa;
        },
        error: function (err) {
        }
    })
    return xyz
}

export const GetBookTitle = () => {
    let xyz = []
    $.ajax({
        url: 'http://localhost:5000/BookTitle',
        type: 'GET',
        async: false,
        success: function (aaa) {
            xyz = aaa;
        },
        error: function (err) {
        }
    })
    return xyz
}