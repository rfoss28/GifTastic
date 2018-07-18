$(document).ready(function() {
  var topics = ["duck", "cat", "dog", "goose"];

  createButtons();


  function createButtons(){

  $("#buttons-view").empty();
    //loops through each animal and creates button for it
    
  topics.forEach(function(animal) {
      console.log(animal);
      var a = $("<button>");
      a.addClass("animal-btn")
      console.log(this +"for each animal");
      a.attr("data-name", animal);
      a.text(animal);
      $("#buttons-view").append(a);
    });
  }

  $("#add-animal").on("click", function(event){
   event.preventDefault();
// captures the animal entered in the text box
    var newAnimal=$("#animal-input").val();
    console.log(newAnimal);
    // adds the user entered animal to the array
    topics.push(newAnimal);
    createButtons();
    $("#animal-input").empty();

  });

  function displayAnimalGifs(){


    var animal= $(this).attr("data-name");
    var queryURL="https://api.giphy.com/v1/gifs/search?q="+ animal +"&limit=10&rating=pg&api_key=TwSWUjJ8io0k15Zv1P60Jp1tNRJOH8rA";
    
    //Ajax call for the animal being clicked.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      var animalDiv = $("<div class='animal'>");

      var imgURL=response.data[0].images.original.url;
      console.log(imgURL);
      var image=$("<img>").attr("src",imgURL);
      animalDiv.append(image);

      $("#pictures-view").append(animalDiv);
    
    })

  }
    $(document).on("click",".animal-btn",displayAnimalGifs)
    console.log("this button is working?");
 
 

});
