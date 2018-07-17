$(document).ready(function() {
  var topics = ["duck", "cat", "dog", "goose"];

  //loops through each animal and creates  button for it
    topics.forEach(function(animal) {
      console.log(animal);
      var a = $("<button>");
      a.text(animal);
      $("#buttons-view").append(a);
    });
});
