const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnLogin_popup = document.querySelector('.btnLogin_popup');
const iconClose = document.querySelector('.iconClose');
const menuLogin = document.querySelector('#menuLogin');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLogin_popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

menuLogin.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    document.getElementById('menuToggle').checked = false;
});