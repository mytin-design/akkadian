function openFaq(evt, faq) {
    var z, faqContent, faqBtn;

    faqContent = document.getElementsByClassName("faq-content");
    for( z = 0; z < faqContent.length; z++) {
        faqContent[z].style.display = "none";
    }

    faqBtn = document.getElementsByClassName("faq-nv");
    for(z = 0; z < faqBtn.length;z++) {
        faqBtn[z].className = faqBtn[z].className.replace("active", "");
    }

    document.getElementById(faq).style.display = "flex";
    evt.currentTarget += "active";


    
}

document.getElementById("defaultOpen").click();