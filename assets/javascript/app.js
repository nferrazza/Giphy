$(document).ready(function(){


//original list of animals, displays upon page load
var animals = ["Sloth", "Dog", "Cat", "Hamster",  "Chimps", "Zebra", "Elephant"];

displayAnimalButtons();
addNewButton();

$(document).on("click", ".animal", displayGifs);

function displayAnimalButtons() {
    
    
    $("#buttonDump").empty();

    for (var i = 0; i < animals.length; i++) {

        var animalButton = $("<button>");

        animalButton.addClass("animal", "btn-primary");

        animalButton.attr("data-name", animals[i]);
 
        animalButton.text(animals[i]);

        $("#buttonDump").append(animalButton );
        
    }

    console.log("Display Buttons Running")
}




function addNewButton(){
    $("#add-animal").on("click", function(event) {
        event.preventDefault();
    
        var animal = $("#animal-input").val().trim();
        
        animals.push(animal);
        console.log(animal);
    
        displayAnimalButtons();
        
        
    });
}




function displayGifs () {


   var animal = $(this).attr("data-name");

   var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=3";


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
            $("#images").empty();
            console.log(results.length);
            

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            

            $("#images").prepend(animalImage);
    }
});




}});
