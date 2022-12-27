const navList = document.querySelector('.nav-list');
const menuBtn = document.getElementById('menu-btn');
const searchBtn = document.getElementById('search-btn');
const cartBtn = document.getElementById('cart-btn');
const searchField = document.querySelector('.search-field');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('nav-toggle')
    searchField.classList.remove('search-field-area')
})

searchBtn.addEventListener('click', () => {
    searchField.classList.toggle('search-field-area');
    navList.classList.remove('nav-toggle');
})
