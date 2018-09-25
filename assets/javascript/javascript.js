// create array of movies//
var movies = ["Apocalypse Now", "The Shining", "Thelma and Louise", "25th Hour", "Kill Bill"];



function buttonMaker() {

	//empties div and allows new button to be added to array//
	$("#movie-buttons").empty();

	for (var i = 0; i < movies.length; i++) {
		$("#movie-buttons").append("<button type=button class='movie-button btn btn-primary'>" + movies[i] + "</button>");
	};


};


buttonMaker();




//use onclick event to create new button//
$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#movie-input").val().trim();

	//create conditional to prevent blank button from being made//
	if (!userInput == " ") {
		movies.push(userInput);
		buttonMaker();
		console.log(movies); 
		userInput = $("#movie-input").val(" ");
	}
});




$(document).on("click", ".movie-button", function() {
	$("#movie-gif").empty(); 

	var apiKey = "XvLemMoujhxLbq0tVHa7WMUd17cMgFkH";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		

		
		var results = response.data;

		
		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#movie-gif").append(newImage);

			
		}
		

		
		var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); 
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); 
				isMoving0 = false;
			}

		});

		
		var isMoving1 = false;
		$(document).on("click", "#new-gif1" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url); 
				isMoving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url); 
				isMoving1 = false;
			}

		});

		
		var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); 
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); 
				isMoving2 = false;
			}

		});

		
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); 
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url);
				isMoving3 = false;
			}

		});


		
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); 
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); 
				isMoving4 = false;
			}

		});


	});



})