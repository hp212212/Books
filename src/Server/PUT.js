import $ from 'jquery'

export const PutAdminPersonData = (Data) => {
    $.ajax({
        url: `http://localhost:5000/AdminPerson/${1}`,
        type: 'PUT',
        data: Data,
        success: function (aaa) { },
        error: function (err) { }
    })
}

export const PostNewBookTitleWithPages = (Data, index) => {
    $.ajax({
        url: `http://localhost:5000/BookTitle/${index}`,
        type: 'PUT',
        data: Data,
        success: function (aaa) { },
        error: function (err) { }
    })
}