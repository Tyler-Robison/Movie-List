$('#movieButton').on('click', function (e) {
    e.preventDefault();
    const title = $('#movieTitle').val()
    const rating = $('#movieRating').val()    
    $('#movieList').append(`<li>Title: ${title}, Rating: ${rating}  <button class="deleteButton"> Delete</button></li>`)
    $('#movieTitle').val('')
    $('#movieRating').val('')
})

$('#movieList').on('click', '.deleteButton', function (e) {
        e.preventDefault();
        $(e.target).parent().remove()
})