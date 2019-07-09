var topics = ["trees", "tigers", "traveling", "bananas", "texas", "succulents", "sunshine", "running", "paris", "sleep"];

$(document).ready(function() {
    createButtons();
    //Building buttons to loop through array
    function createButtons () {
        $('#buttonDisplay').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.attr('data-name', topics[i]);
            button.addClass('topic')
            button.addClass('btn btn-light')
            button.text(topics[i]);
            $('#buttonDisplay').append(button);
        }
    }

    //building click functionality
    $('#addTopic').on('click', function(event) {
        event.preventDefault();

        var addedTopic = $('#inputTopic').val().trim();
        console.log(addedTopic);

        topics.push(addedTopic);
        $('#inputTopic').val("");
        createButtons();
    })

    //call to GIPHY api
})
