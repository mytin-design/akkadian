function openTab(evt, tabId) {
    var i, tabcontents, tabBtns;

    tabcontents = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontents.length;i++){
        tabcontents[i].style.display = "none";
    }

    tabBtns = document.getElementsByClassName("tabBtn");
    for(i=0;i<tabBtns.length;i++) {
        tabBtns[i].className = tabBtns[i].className.replace("active", " ");
    }

    
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget += "active";
    //evt.currentTarget.style.fontWeight = 600;

}

document.getElementById("defaultOpen").click();


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("pcard");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); //Change image every 2 seconds;

    let inds = document.getElementsByClassName("ind");

    for(i = 0; i < inds.length;i++) {
        inds[i].className = inds[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    inds[slideIndex-1].className += " active";
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Testimonial section --


