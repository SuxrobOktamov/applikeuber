let header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticy', window.scrollY > 0);
});


/* MAJOR.SECTION */
let next = document.querySelectorAll('.next');
let majorManage = document.querySelectorAll('.major-manage');

next.forEach((item, index)=>{ 
    item.addEventListener('click',()=>{
        next.forEach((e)=>{e.classList.remove('active')});
        item.classList.add('active');

        majorManage.forEach((item)=>{item.classList.remove('opacity')});
        majorManage[index].classList.add('opacity'); 
    })
})

/* FREQUENTLY.SECTION */

let frequently = document.querySelectorAll('.frequently-back-title');

frequently.forEach((item)=>{
    item.addEventListener('click',()=>{
       if(!item.classList.contains('height')){
            frequently.forEach((e)=>{e.classList.remove('height')});
            item.classList.add('height');
       }else {
            item.classList.remove('height');
       }
    })
})


/* FOOTER.FORM */

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let saml = document.querySelectorAll('small');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank')
    }else {
        setSuccessFor(username)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'password cannot be blank')
    }else {
        setSuccessFor(password)
    }

    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank')
    }else {
        setSuccessFor(email)
    }

    if(password2Value === '' ){
        setErrorFor(password2, 'password2 cannot be blank')
    }else if(password2Value != passwordValue){
        setErrorFor(password2, 'passwords does not match')
    }else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}










/* menu_toggle */

let menu = document.querySelector('#menu');
let navbarLinks = document.querySelector('.navbar-links');
menu.addEventListener('click', ()=> {
    if(!menu.classList.contains('hide')){
        menu.classList.add('hide');
        navbarLinks.classList.add('top');
    }else {
        menu.classList.remove('hide');
        navbarLinks.classList.remove('top');
        navbarLinks.classList.remove('rotate');
    }
})

$('#click').click(function(){
    if(!navbarLinks.classList.contains('rotate')){
        navbarLinks.classList.add('rotate');
    }else {
        navbarLinks.classList.remove('rotate');
    }
})





let scroll = ScrollReveal({
    duration: 1500,
    origin: "bottom",
    distance:"100px",
    reset: true,
    opacity:0
});

scroll.reveal(`.ubereats-clone-title, .ubereats-clone-logo, .software-grow,  .logo  , .user-logo, .user-title, .icon, .looking-for, .menu-title, .article, .scalable-online-title, .scalable-online-logo, .frequently-back-title  `, {
    interval: 200,
})






