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

/*=============== TESTIMONIALS SLIDER ===============*/ 

const swiper = new Swiper('.testimonials__slider .swiper', {
    speed: 400,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 3000,
      },

  });


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY > 600 ? scrollUp.classList.add("active")
                      : scrollUp.classList.remove("active")
}

window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sectionsToScroll = document.querySelectorAll(".section")

const scrollSectionsObserver = new IntersectionObserver(elements => {
    elements.forEach( element => {
        if(element.isIntersecting){
            const navLinks = document.querySelectorAll(".nav__link")
            const sectionIdName = element.target.getAttribute("id")

            navLinks.forEach(link => {
                const linkHref = link.getAttribute("href").replace('#','')

                if(linkHref == sectionIdName){
                    navLinks.forEach(link => {
                        link.classList.remove("active")
                    })
                    link.classList.add("active")
                }
            })

        }
    });
}, {
    threshold: .5
});

sectionsToScroll.forEach(element => {
    scrollSectionsObserver.observe(element)
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2500,
    delay: 100,
    reset: true,
})

scrollReveal.reveal(".hero .hero__image-wrapper")
scrollReveal.reveal(".hero .hero__data, .testimonials .testimonials__slider", {origin: "bottom"})
scrollReveal.reveal(".about .about__image-big, .chef .chef__data, .newsletter .newsletter__title", {origin: "left"})
scrollReveal.reveal(".chef .chef__image, .about .about__data, .newsletter .newsletter__form-wrapper form", {origin: "right"})
scrollReveal.reveal(".specials .special__box", {origin: "bottom", interval: 200})