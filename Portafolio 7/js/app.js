const navBg = document.querySelector(".nav-bg");
const navToggle = document.querySelector(".nav-toggle");
const body = document.querySelector("body");
const list = document.querySelectorAll(".list");

navToggle.addEventListener("click", ()=> {

    if (navBg.style.display == "block"){
        navBg.style.display = "none";
    }else{
        navBg.style.display = "block";
    }
})




