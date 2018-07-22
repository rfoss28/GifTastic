$(document).ready(function() {
  var topics = ["duck", "cat", "dog", "goose"];

  createButtons();

  function createButtons() {
    $("#buttons-view").empty();
    //loops through each animal and creates button for it

    topics.forEach(function(animal) {
      var a = $("<button>");
      a.addClass("animal-btn");
      a.attr("data-name", animal);
      a.text(animal);
      $("#buttons-view").append(a);
    });
  }

  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    // captures the animal entered in the text box
    var newAnimal = $("#animal-input").val();
    // adds the user entered animal to the array
    topics.push(newAnimal);
    createButtons();
    $("#animal-input").empty();
  });

  function displayAnimalGifs() {
    var animal = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&limit=10&rating=pg&api_key=TwSWUjJ8io0k15Zv1P60Jp1tNRJOH8rA";

    $("#pictures-view").empty();

    //Ajax call for the animal being clicked.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var animalDiv = $("<div class='animal'>");
      var i = 0;

      //loops through the response to display returned Gifs
      response.data.forEach(function(response) {
        imgURL = response.images.fixed_height_still.url;

        var image = $("<img>");
        var newDiv = $("<div>");

        image.addClass("animal-gif");
        image.addClass("img-responsive");
        newDiv.addClass("gifDiv");
        image.attr("src", imgURL);
        image.attr("data-pause", response.images.fixed_height_still.url);
        image
          .attr("data-play", response.images.fixed_height.url)
          .attr("data-state", "pause");
        animalDiv.append('<div class="labledGif">');
        newDiv.append("<p>Rating: " + response.rating + "</p>");
        newDiv.append(image);

        $("#pictures-view").append(newDiv);
      });
    });
  }
  //  Adds on click event for the images to update the url to the animated gif when clicked
  $(document).on("click", ".animal-gif", function() {
    var state = $(this).attr("data-state");

    if (state === "pause") {
      $(this).attr("src", $(this).attr("data-play"));
      $(this).attr("data-state", "play");
    } else {
      $(this).attr("src", $(this).attr("data-pause"));
      $(this).attr("data-state", "pause");
    }
  });

  $(document).on("click", ".animal-btn", displayAnimalGifs);
});
