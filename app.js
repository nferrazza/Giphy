
//original list of animals, displays upon page load
var animals = ["Sloth", "Dog", "Cat", "Hamster", "Rat", "Kangaroo", "Shark", "Mole", "Raptor", "Pelican", "Chimps", "Zebra", "Elephant"];



function alertAnimalName() {

    var animalName = $(this).attr("data-name");

}

function displayAnimal() {
    
    
    
    $(".buttonDump").empty();

    for (var i = 0; i < animals.length; i++) {

        var a = $("<button>");

        a.addClass("animal");

        a.attr("data-name", animals[i]);

        a.text(animals[i]);

        $(".buttonDump").append(a, " ");
    }
}


$("#add-animal").on("click", function(event) {
    event.preventDefault();

    var newAnimal = $("#animal-input").val().trim();


    animals.push(newAnimal);
    console.log(newAnimal);

    displayAnimal();
    
});

$(document).on("click", ".animal", alertAnimalName);

displayAnimal();


$(".animal").on("click", function() {
    console.log(this);

   var animal = $(this).attr("data-name");

   var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=3";


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response){
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
            console.log(results.length);
            var gifDiv = $("<div class='item'>");

            var animals = results[i];

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            

            gifDiv.prepend(animalImage);

            $("#images").prepend(gifDiv);
    }
    });
});