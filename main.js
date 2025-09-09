// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})

const fags = document.querySelectorAll('.fag');

fags.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-question-circle'){
            icon.classList = 'uil uil-check'
        }else {
            icon.icon.classList = 'uil uil-question-circle'
        };
    })
})


const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#bars-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";

})