//Manual slideshow

let slideCounter = 1;
displayTiles(slideCounter);

function addSlide(y) {
    displayTiles(slideCounter += y);
}

function currentPage(y) {
    displayTiles(slideCounter = y);
}

function displayTiles(y) {
    let x;
    let tiles = document.getElementsByClassName("tile");
    let inds = document.getElementsByClassName("ind");

    if(y > tiles.length) {
        slideCounter = 1; //If the value of y exceeds that of available tiles, return to first tile;
    }

    if(y < 1) {
        slideCounter = tiles.length; //If the value of y reaches 0, return to tile number 3;
    }

    for(x = 0;x < tiles.length;x++) {
        tiles[x].style.display = "none";//take all elements with class .tile and hide them;
    }

    for(x = 0; x < inds.length;x++) {
        inds[x].className = inds[x].className.replace("active", ""); //lop through all the indicators, and for each, replace the className with "active";
        //this is used by CSS to show current indicator;
    }

    tiles[slideCounter-1].style.display = "block";
    inds[slideCounter-1].className += "active";
}