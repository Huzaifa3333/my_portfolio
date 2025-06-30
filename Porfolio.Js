function scrollToHome(){
    const homeSection=document.getElementById("Home");
    homeSection.scrollIntoView({behavior:"smooth"});
}

function scrollToAbout(){
    const aboutSection=document.getElementById("About");
    aboutSection.scrollIntoView({behavior:"smooth"});
}

function scrollToContact(){
    const contactSection=document.getElementById("contact");
    contactSection.scrollIntoView({behavior:"smooth"});
}


function scrollToSkills(){
    const skillsSection=document.getElementById("Skills");
    skillsSection.scrollIntoView({behavior:"smooth"});
}

window.onload = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};