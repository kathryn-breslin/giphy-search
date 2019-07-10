
$(document).ready(function () {

    var topics = ["trees", "tigers", "traveling", "bananas", "texas", "succulents", "sunshine", "running", "paris", "sleep"];    

    //Building buttons to loop through array
    function createButtons() {
        $('#buttonDisplay').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
            button.attr('data-name', topics[i]);
            button.val(topics[i]);
            button.addClass('topic')
            button.addClass('btn btn-light')
            button.text(topics[i]);
            $('#buttonDisplay').append(button);
        }
    }
    createButtons();
    //building click functionality
    $('#addTopic').on('click', function (event) {
        event.preventDefault();

        var addedTopic = $('#inputTopic').val().trim();
        // console.log(addedTopic);

        topics.push(addedTopic);
        $('#inputTopic').val("");
        createButtons();
    })

    //call to GIPHY api

    $('.topic').on('click', function () {
        var topic = $(this).val();
        $('#gifDisplay').empty();
        var apiKey = "HfzaLobXPlhuhwVrZxOCHvuJTyKDpo5m";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + topic + "&limit=10&rating=G&lang=en";


        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var gifs = response.data;

            //create gif cards for each that is returned, based on the search param
            for (var i = 0; i < gifs.length; i++) {
                var gifCard = $("<div class='card'>");
                var gifImage = $("<img>").attr("src", gifs[i].images.fixed_height_still.url);
                gifCard.append(gifImage);
                $('#gifDisplay').append(gifCard);
            }

        })
        console.log(queryUrl);
    })

});

