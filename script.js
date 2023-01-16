
//@ts-nocheck

function openPanel() {
    document.getElementById("sideNav").style.width = "15pc";
}

function closePanel() {
    document.getElementById("sideNav").style.width = "0";

}

//document.lastModified;

//Ideally there should be one theme button to change all page styles - 
//currently this function is not supported
//all pages have a unique button for the above objective
//change theme
let sheet = document.querySelector(".akkSheet");

//for service page
let serveBstyles = document.querySelector(".serve-bstyles");
let serveMstyles = document.querySelector(".serve-mstyles");
let serveSstyles = document.querySelector(".serve-sstyles");

//for products
let proBstyles = document.querySelector(".pro-bstyles");
let proMstyles = document.querySelector(".pro-mstyles");
let proSstyles = document.querySelector(".pro-sstyles");


//for team
let tmsheet = document.querySelector(".tmsheet");
let ttsheet = document.querySelector(".ttsheet");


//for careers
let cmsheet = document.querySelector(".cmsheet");
let ctsheet = document.querySelector(".ctsheet");



//a conflict was making the btn for @media <=500 not to work, so id for the sidepanel theme btn has been changed and accessed on its own

//id for theme btn for >=996px 
let themer = document.getElementById("themeId");

let theme = document.getElementById("themerId");
let stheme = document.getElementById("sthemerId");
let ptheme = document.getElementById("pthemerId");

//for blog

let bbsheet = document.querySelector(".bbsheet");
let bmsheet = document.querySelector(".bmsheet");

//for about us page

let abmsheet = document.querySelector(".abmsheet");
let abasheet = document.querySelector(".abasheet");

//for faq

let fbsheet = document.querySelector(".fbsheet");
let fmsheet = document.querySelector(".fmsheet");
let ffsheet = document.querySelector(".ffsheet");

//for privacy policy

let ppmsheet = document.querySelector(".ppmsheet");
let pppsheet = document.querySelector(".pppsheet");

//for lost - 404 page
let lomsheet = document.querySelector(".lomsheet");
let lo4sheet = document.querySelector(".lo4sheet");


//change button styles

function turnLight() {
    sheet.setAttribute("href", "styles-light.css");


//for media width >=996
themer.setAttribute("onclick", "turnDark()");
theme.setAttribute("onclick", "turnDark()");

//for media width <=500

}

function turnDark() {
sheet.setAttribute("href", "styles-dark.css");
//serveBstyles.setAttribute("href", "blog-dark.css");
//serveMstyles.setAttribute("href", "styles-dark.css");
//serveSstyles.setAttribute("href", "services-dark.css");
//for media width >=996
themer.setAttribute("onclick", "turnLight()");
theme.setAttribute("onclick", "turnLight()");

}

//services theme change

function turnsLight() {
serveBstyles.setAttribute("href", "blog-light.css");
serveMstyles.setAttribute("href", "styles-light.css");
serveSstyles.setAttribute("href", "services-light.css");
stheme.setAttribute("onclick", "turnsDark()");

}

//
function turnsDark() {
    serveBstyles.setAttribute("href", "blog-dark.css");
    serveMstyles.setAttribute("href", "styles-dark.css");
    serveSstyles.setAttribute("href", "services-dark.css");
    stheme.setAttribute("onclick", "turnsLight()");

}


//products theme change

function turnpLight() {
proBstyles.setAttribute("href", "blog-light.css");
proMstyles.setAttribute("href", "styles-light.css");
proSstyles.setAttribute("href", "products-light.css");
ptheme.setAttribute("onclick", "turnpDark()");

}

//
function turnpDark() {
    proBstyles.setAttribute("href", "blog-dark.css");
    proMstyles.setAttribute("href", "styles-dark.css");
    proSstyles.setAttribute("href", "products-dark.css");
    ptheme.setAttribute("onclick", "turnpLight()");

}


//for team
function turntLight() {
    tmsheet.setAttribute("href", "styles-light.css");
    ttsheet.setAttribute("href", "team-light.css");
    document.getElementById("tthemeId").setAttribute("onclick", "turntDark()");
}


function turntDark() {
    tmsheet.setAttribute("href", "styles-dark.css");
    ttsheet.setAttribute("href", "team-dark.css");
    document.getElementById("tthemeId").setAttribute("onclick", "turntLight()");
}

//for careers
function turncLight() {
    cmsheet.setAttribute("href", "styles-light.css");
    ctsheet.setAttribute("href", "careers-light.css");
    document.getElementById("cthemeId").setAttribute("onclick", "turncDark()");
    document.getElementById("cthemerId").setAttribute("onclick", "turncDark()");

}


function turncDark() {
    cmsheet.setAttribute("href", "styles-dark.css");
    ctsheet.setAttribute("href", "careers-dark.css");
    document.getElementById("cthemeId").setAttribute("onclick", "turncLight()");
    document.getElementById("cthemerId").setAttribute("onclick", "turncLight()");

}


//for blog 

function turnbLight() {
    bbsheet.setAttribute("href", "blog-light.css");
    bmsheet.setAttribute("href", "styles-light.css");
    document.getElementById("bthemerId").setAttribute("onclick", "turnbDark()");
}

function turnbDark() {
    bbsheet.setAttribute("href", "blog-dark.css");
    bmsheet.setAttribute("href", "styles-dark.css");
    document.getElementById("bthemerId").setAttribute("onclick", "turnbLight()");
}


//for about us

function turnabLight() {
    abmsheet.setAttribute("href", "styles-light.css");
    abasheet.setAttribute("href", "aboutus-light.css");
    document.getElementById("abthemeId").setAttribute("onclick", "turnabDark()");
    document.getElementById("abthemerId").setAttribute("onclick", "turnabDark()");

}

function turnabDark() {
    abmsheet.setAttribute("href", "styles-dark.css");
    abasheet.setAttribute("href", "aboutus-dark.css");
    document.getElementById("abthemeId").setAttribute("onclick", "turnabLight()");
    document.getElementById("abthemerId").setAttribute("onclick", "turnabLight()");
}


//for faq 
function turnfLight() {
    fbsheet.setAttribute("href", "blog-light.css");
    fmsheet.setAttribute("href", "styles-light.css");
    ffsheet.setAttribute("href", "faq-light.css");
    document.getElementById("fthemerId").setAttribute("onclick", "turnfDark()");

}


function turnfDark() {
    fbsheet.setAttribute("href", "blog-dark.css");
    fmsheet.setAttribute("href", "styles-dark.css");
    ffsheet.setAttribute("href", "faq-dark.css");
    document.getElementById("fthemerId").setAttribute("onclick", "turnfLight()");

}

//for privacy policy

function turnppLight() {
    ppmsheet.setAttribute("href", "styles-light.css");
    pppsheet.setAttribute("href", "policy-light.css");
    document.getElementById("ppthemeId").setAttribute("onclick", "turnppDark()");
    document.getElementById("ppthemerId").setAttribute("onclick", "turnppDark()");
}

function turnppDark() {
    ppmsheet.setAttribute("href", "styles-dark.css");
    pppsheet.setAttribute("href", "policy-dark.css");
    document.getElementById("ppthemeId").setAttribute("onclick", "turnppLight()");
    document.getElementById("ppthemerId").setAttribute("onclick", "turnppLight()");
}


//for 404 page

function turnloLight() {
    lomsheet.setAttribute("href", "styles-light.css");
    lo4sheet.setAttribute("href", "404-light.css");

    document.getElementById("lothemeId").setAttribute("onclick", "turnloDark()");
    document.getElementById("lothemerId").setAttribute("onclick", "turnloDark()");
}

function turnloDark() {
    lomsheet.setAttribute("href", "styles-dark.css");
    lo4sheet.setAttribute("href", "404-dark.css");

    document.getElementById("lothemeId").setAttribute("onclick", "turnloLight()");
    document.getElementById("lothemerId").setAttribute("onclick", "turnloLight()");
}
//Start tab event

function openTab(evt, tabId) {
    var i, tabcontents, tabBtns, wc, wh, sm;

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


