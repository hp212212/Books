import $ from 'jquery'

export const PostUsersData = (Data) => {
    $.ajax({
        url: 'http://localhost:5000/Users',
        type: 'POST',
        data: Data,
        success: function (aaa) { },
        error: function (err) { }
    })
}

export const PostNewBookTopic = (Data) => {
    $.ajax({
        url: 'http://localhost:5000/BookTopics',
        type: 'POST',
        data: Data,
        success: function (aaa) { },
        error: function (err) { }
    })
}

export const PostNewBookTitle = (Data) => {
    $.ajax({
        url: 'http://localhost:5000/BookTitle',
        type: 'POST',
        data: Data,
        success: function (aaa) { },
        error: function (err) { }
    })
}
