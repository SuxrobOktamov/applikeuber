let header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticy', window.scrollY > 0);
})