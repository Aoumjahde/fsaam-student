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