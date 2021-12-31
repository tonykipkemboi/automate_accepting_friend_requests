function confirmFBFriendRequests () {
    // variable to keep track of number of friend requests confirmed by script
    var counter=0, htmlCode, ipos;
    // variable to store all "confirm" buttons on the page 
    var spans = document.getElementsByTagName("span");

    // loop to inspect all spans on the page
    for (i = 0; i < spans.length; i++){
        // make lowercase for ease of checking values in html code
        htmlCode = spans[i].outerHTML.toLowerCase();
        // if span tag has word "confirm" then this is our target
        // ipos stores the position where "confirm" appears in the html code 
        ipos = htmlCode.indexOf("confirm");
        // if ipos has a number >-1 then "confirm" was found
        if(ipos > -1){
            // clicks to confirm or accept friend request
            spans[i].click();
            // keeps track of number of accepted friend requests
            counter++;
        }
    }

    // message after script runs to show how many friends were accepted
    alert("You have auto-confirmed these many friends: " + counter);
}