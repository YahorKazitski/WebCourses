function visitPage(){
    inputText = prompt("Please enter your name", "You shall not pass");
    splitInputText = inputText.split(' ');
    searchInputText = splitInputText.join('+');
    if( searchInputText ){
        searchUrlString = "https://www.google.de/search?q=" + searchInputText;
    }
    else{
        searchUrlString = "https://www.google.de/search?q=one+ring+to+rule+them+all&oq=one+ring+to+rule+them+all";
    }
    window.location = searchUrlString;
}

function passThrowBridg(){
    document.getElementById("Text").innerText = "Passed";
}