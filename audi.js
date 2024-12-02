const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

const searchIcon = document.querySelector('.search img');
const searchInput = document.querySelector('.search input');

if(searchIcon){
    searchIcon.addEventListener('click', () => {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });
}


fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);
  
fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// const currentUrl = window.location.href;
// console.log('Current URL:', currentUrl);

// const currentFileName = window.location.pathname.split('/').pop();
// console.log('Current file name:', currentFileName);








// document.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu');
//     const menuIcon = document.querySelector('.menu-icon');

//     if (menuIcon && menu) {
//         menuIcon.addEventListener('click', () => {
//             menu.classList.toggle('open');
//         });
//     }

//     const searchIcon = document.querySelector('.search img');
//     const searchInput = document.querySelector('.search input');

//     if (searchIcon && searchInput) {
//         searchIcon.addEventListener('click', () => {
//             if (searchInput.style.display === 'none' || searchInput.style.display === '') {
//                 searchInput.style.display = 'block';
//                 searchInput.focus();
//             } else {
//                 searchInput.style.display = 'none';
//             }
//         });
//     }
// });









