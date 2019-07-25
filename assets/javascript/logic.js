
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
    $(document).on('click', '.topic', function () {
        var gif = $(this).attr('data-name');
        var apiKey = "HfzaLobXPlhuhwVrZxOCHvuJTyKDpo5m";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + gif + "&limit=10&rating=G&lang=en";


        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            gif = response.data;
            $('#gifDisplay').empty();

            //create gif cards for each that is returned, based on the search param
            for (var i = 0; i < gif.length; i++) {
                var gifCard = $('<div>');
                gifCard.addClass('individual-gif-container');
                gifCard.addClass('card');

                var newGifImage = $("<img src = '" + gif[i].images.fixed_height_still.url + " '>");
                newGifImage.addClass('gif-image', 'card-image-top');
                newGifImage.attr("state", "still");
                newGifImage.attr("still-data", gif[i].images.fixed_height_still.url);
                newGifImage.attr("animated-data", gif[i].images.fixed_height.url);

                var newDivContents = $('<div>');
                newDivContents.addClass('card-body');

                var newDivContentsPara = $('<p>')
                newDivContentsPara.addClass('card-text');
                newDivContentsPara.append("<p>" + gif[i].title + "</p>");
                newDivContentsPara.append("<p>Rating: " + gif[i].rating + "</p>");

                gifCard.append(newGifImage);
                gifCard.append(newDivContentsPara);
                gifCard.append(newDivContents);
                $('#gifDisplay').append(gifCard);

            }
            $('.gif-image').on({
                mouseenter: function () {
                    $(this).attr("state", "animated");
                    $(this).attr("src", $(this).attr("animated-data"));
                },
                mouseleave: function () {
                    $(this).attr("state", "still");
                    $(this).attr("src", $(this).attr("still-data"))
                }
            })
        })
    })

    createButtons();

});
