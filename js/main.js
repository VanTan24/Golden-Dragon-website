///menu
let close__menu = document.querySelector('.navbar i');
let menu = document.querySelector('.navbar');
let show__menu = document.querySelector('.menu__toggle');
// close__menu
    function close_menu(){
        menu.style.right = '-60%';
    }
// show__menu
    show__menu.addEventListener('click', function(){
        menu.style.right = '0%';
    })