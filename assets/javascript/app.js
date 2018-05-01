// document ready function
$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAWyixL7RlAkQetcPQ0oLmRY00JBARV1L8",
        authDomain: "home-in-1ed12.firebaseapp.com",
        databaseURL: "https://home-in-1ed12.firebaseio.com",
        projectId: "home-in-1ed12",
        storageBucket: "home-in-1ed12.appspot.com",
        messagingSenderId: "623192366995"
    };
    firebase.initializeApp(config);

    //  variable to reference firebase 
    var database = firebase.database();

    //Hides content until called
    $("#search-Form").hide();
    $("#listings-Results").hide();

    // variable to reference Firebase
    var username = "";
    var neighborhood = "";
    var street = "";
    var zip = "";


    ///////////////////////Functions////////////////////////

    function submitButton() {
        //Hides email form
        $("#email-Form").hide();

        //Unhides search form
        $("#search-Form").show();

    };

    function searchButton() {
        //Hides email and listing search form
        $("#email-Form").hide();
        $("#listings-Results").hide();

        //Unhides search form
        $("#search-Form").show();

    };

    // function for clicking the search icon
    function searchIcon(){
        
        //Hides search and listing form
        $("#email-Form").hide();
        $("#listings-Form").hide();

        //Unhides search form
        $("#search-Results").show();

    }

    // function for reset button on the search page
    function reset(){
        $('#city-Option1').val(0);
        $('#neighborhood-Option1').val(0);
  
    }

    // function for saving data in database after user clicking right arrow

        // logic to store seach reuslts
        city = $("city-Option").val();
        neighborhood = $("neighborhood-Input").val();

        // add search results to user's object
        var newUser = {
            username: username,
            city: city,
            neighborhood: neighborhood
        }

        // add search results to the user's object (child_added)



    // function for moving to the next listing (for-loop)

        // variables for the addresses (array)



        // for-loop to loop through address array



    ///////////////////////END OF Functions////////////////////////



    // on click function on the username field to display submit button
    $("body").on("click", "#submit-Btn", function () {
        event.preventDefault();

        // logic to store username
        username = $("#email-Input").val().trim();
        console.log(username);

        // create new object for new user (with username only)
        var newUser = {
            username: username,
        }

        // use .on (push) the data to the table above
        database.ref().push(newUser);

        // empty the form everytime after user click submit
        $("#email-Input").val("");

        // transition for next page (div) - Seach page ----- .show and .replace functions
        submitButton();

    });

    // on click function for the submit button on search page
    $("body").on("click", "#search-Btn", function (event) {
        event.preventDefault();
        console.log(event);

        // Capture the neigborhood user chose

        

        // transition for the Listing page
        searchButton();

    });
    
    ///////////////Functions for Listing page///////////////

        // append results from API to html
    
        // if statement for clicking right arrow - save to Favorite page and move on to the next listing
        
        // call the firebase function from the "function" section to save data

        // else statement for clicking left arrow - move to the next listing


});
