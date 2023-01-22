/*=============== SHOW MENU MOBILE ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=== MENU SHOW ===*/
if(navMenu && navToggle) {
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-offcanvas")
    })
}

/*=== MENU HIDE ===*/
if(navMenu && navClose) {
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-offcanvas")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link")

const removeOffcanvas = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-offcanvas")
}
navLinks.forEach(item => item.addEventListener("click", removeOffcanvas))

/*=============== STICKY HEADER ===============*/
const stickyHeader = () => {
    const header = document.getElementById("header");

    this.scrollY > 1 ? header.classList.add("sticky")
                      : header.classList.remove("sticky")
}

window.addEventListener("scroll", stickyHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/