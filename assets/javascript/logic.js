var topics = ["trees", "tigers", "traveling", "bananas", "texas", "succulents", "sunshine", "running", "paris", "sleep"];

function createButtons () {
    $('#buttonDisplay').empty();
    for (var i = 0; i < topics.length; i++) {
        var button = $('<button>');
        button.attr('data-name', topics[i]);
        button.addClass('topic')
        button.text(topics[i]);
        $('#buttonDisplay').append(button);
    }
}
createButtons();