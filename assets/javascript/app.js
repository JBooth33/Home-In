// document ready function
$(document).ready(function () {
   
    var uptownWalkScore = ['2885%20Knox%20Ave%20S%20APT%20403%20Minneapolis%20MN%2055408&lat=44.949983&lon=-93.304498', '4816%20Chowen%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.915674&lon=-93.325529', '2400%20Girard%20Ave%20S%20APT%202%20Minneapolis%20MN%2055405&lat=44.959062&lon=-93.297329', '2520%20Colfax%20Ave%20S%20Minneapolis%20MN%2055405&lat=44.926232&lon=-93.291101', '4220%20Bryant%20Ave%20S%20Minneapolis%20MN%2055409&lat=44.900329&lon=-93.336496'];
    var uptownZillow = ['2885+Knox+Ave+S&citystatezip=55416', '4816+Chowen+Ave+S&citystatezip=55410', '2400+Girard+Ave+S+APT+2&citystatezip=55405', '2520+Colfax+Ave+S&citystatezip=55405', '4220+Bryant+Ave+S&citystatezip=55409'];

    var downtownWalkScore = ['212%20N%201st%20St%20APT%20501%20Minneapolis%20MN%2055401&lat=44.986114&lon=-93.269303', '247%2010th%20Ave%20S%20Minneapolis%20MN%2055415&lat=44.975311&lon=-93.254784', '1201%20Yale%20Pl%20S%20Apt%20511%20Minneapolis%20MN%2055403&lat=44.972407&lon=-93.278993', '1813%203rd%20Ave%20S%20Minneapolis%20MN%2055404&lat=44.964824&lon=-93.272494', '1818%2013th%20Ave%20S%20Minneapolis%20MN%2055404&lat=44.964495&lon=-93.257174'];
    var downtownZillow = ['212+N+1st+St+APT+501&citystatezip=55401', '247+10th+Ave+S&citystatezip=55415', '1201+Yale+Pl+APT+511&citystatezip=55403', '1813+3rd+Ave+S&citystatezip=55404', '1818+13th+Ave+S&citystatezip=55404'];

    var northeastWalkScore = ['2915%20Lincoln%20St%20NE%20Minneapolis%20MN%2055418&lat=45.021121&lon=-93.237962', '3100%20Stinson%20St%20NE%20Minneapolis%20MN%2055418&lat=45.019969&lon=-93.238064', '2387%20Lincoln%20St%20NE%20Minneapolis%20MN%2055418&lat=45.019969&lon=-93.238064', '1708%20University%20Ave%20NE%20Minneapolis%20MN%2055413&lat=45.005639&lon=-93.263399', '2622%20Ulysses%20St%20NE%20Minneapolis%20MN%2055418&lat=45.015753&lon=-93.236225'];
    var northeastZillow = ['915+Lincoln+St+NE&citystatezip=55418', '3100+Stinson+Blvd&citystatezip=55418', '2837+Lincoln+St+NE&citystatezip=55418', '1708+University+Ave+NE&citystatezip=55413', '622+Ulysses+St+NE&citystatezip=55418'];

    var southMinneapolisWalkScore = ['3832+43rd+Ave+S&citystatezip=55406', '4160+Burton+Ln&citystatezip=55406', '4718+38th+Ave+S&citystatezip=55406', '813+E+22nd+St&citystatezip=55404', '3420+24th+Ave+S&citystatezip=55406'];
    var southMinneapolisZillow = ['3832+43rd+Ave+S&citystatezip=55406', '4160+Burton+Ln&citystatezip=55406', '4718+38th+Ave+S&citystatezip=55406', '813+E+22nd+St&citystatezip=55404', '3420+24th+Ave+S&citystatezip=55406'];

    var lindenHillsWalkScore =['3530%20W%2046th%20St%20Minneapolis%20MN%2055410&lat=44.919926&lon=-93.325208', '4533%20Zenith%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.920528&lon=-93.321147', '4432%20York%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.922307&lon=-93.320487', '4329%20Zenith%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.924226&lon=-93.321116', '3904%20Vincent%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.932067&lon=-93.316709'];
    var lindenHillsZillow = ['3530+W+46th+St&citystatezip=55410', '4533+Zenith+Ave+S&citystatezip=55410', '4432+York+Ave+S&citystatezip=55410', '4329+Zenith+Ave+S&citystatezip=55410', '3904+Vincent+Ave+S&citystatezip=55410'];

    function lookUpWalkScores (neighborhoodAddresses) {
        neighborhoodAddresses.forEach(function(addressString){
            var queryUrl = "http://api.walkscore.com/score?format=json&address=" + addressString +"&transit=1&bike=1&wsapikey=85e52a6723d3afe0406526039173d471"; 
         
            $.ajax({
                url : queryUrl,
                method: 'GET'
            }).then(function(response){
                console.log(response)
            });
        });

    }

    function lookUpZillow (neighborhoodAddresses) {
        neighborhoodAddresses.forEach(function (addressString){
            $.ajax({
                url: 'https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1gdhzffzvgr_3o1g1&address=' + addressString,
                method: 'GET'
            }).then(function(response) {
                var json = xmlToJson(response);
            
                console.log(json);
            });
        });
    }

    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    
    function xmlToJson(xml) {
            
        // Create the return object
        var obj = {};
    
        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }
    
        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
        return obj;
    }
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

    }

    function searchButton() {
        //Hides search form
        $("#email-Form").hide();
        $("#search-Form").hide();

        //Unhides search form
        $("#listings-Results").show();

    }

    // on click function on the username field to display submit button
    $("#submit-Btn").click(function(event) {
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
   
    $("#search-Btn").click(function(event){
    //grab the value of selected neighborhood
        userChoice = $("#neighborhood-Input").val().trim();
        event.preventDefault();
        console.log(userChoice);
        console.log("test");
    // logic to store seach reuslts
        searchButton();
        lookUpWalkScores(uptownWalkScore);

    

    // add search results to the user's object

    

    // variables for the addresses (array)
    
    //Zillow Ajax
        
        
        
        
        
        lookUpZillow(uptownZillow);


    // for-loop to loop through address array

    
    

    
    


    // transition for the Listing page




    });

     });

//http://api.walkscore.com/score?format=json&address=4420%20Bryant%20Ave%20S%20Minneapolis%20MN%2055409&lat=44.900329&lon=-93.336496&transit=1&bike=1&wsapikey=85e52a6723d3afe0406526039173d471

//https://api.walkscore.com/score?format=json&address=44816%20Chowen%20Ave%20S%20Minneapolis%20MN%2055410&lat=44.915674&lon=-93.325529&transit=1&bike=1&wsapikey=85e52a6723d3afe0406526039173d471
