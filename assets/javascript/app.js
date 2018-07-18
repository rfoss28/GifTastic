$(document).ready(function() {
  var topics = ["duck", "cat", "dog", "goose"];

  createButtons();


  function createButtons(){

  $("#buttons-view").empty();
    //loops through each animal and creates button for it
    
  topics.forEach(function(animal) {
      console.log(animal);
      var a = $("<button>");
      a.text(animal);
      $("#buttons-view").append(a);
    });
  }

  $("#add-animal").on("click", function(event){
   event.preventDefault();
// captures the animal entered in the text box
    var newAnimal = $("#animal-input").val();
    console.log(newAnimal);
    // adds the user entered animal to the array
    topics.push(newAnimal);
    createButtons();

  });

});
