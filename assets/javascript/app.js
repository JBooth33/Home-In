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

    // variable to reference Firebase
    var username = "";
    var neighborhood = "";
    var street = "";
    var zip = "";

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

    });
    
    // on click function for the submit button on search page
    $(".body").on("click", "#search-Btn", function(){

    // logic to store seach reuslts



    // add search results to the user's object



    // variables for the addresses (array)



    // for-loop to loop through address array



    // transition for the Listing page




    });

});
