var topics = ["trees", "tigers", "traveling", "bananas", "texas", "succulents", "sunshine", "running", "paris", "sleep"];
var topic = $('#topic').val();


    createButtons();
    //Building buttons to loop through array
    function createButtons () {
        $('#buttonDisplay').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.attr('data-name', topics[i]);
            button.attr('id', 'topic')
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

    function giphyCall () {
        var apiKey = "HfzaLobXPlhuhwVrZxOCHvuJTyKDpo5m";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + topic + "&limit=10&rating=G&lang=en";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            //create gifs for each that is returned, based on the search params

        })
        console.log(queryUrl);
    }
    
    $(document).on('click', '#topic', giphyCall);
    // $('.topic').on('click', giphyCall());

