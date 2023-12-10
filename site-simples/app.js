'use strict';

const switcher = document.querySelector('.btn');
const body = document.body;

switcher.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        switcher.textContent = 'Light';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        switcher.textContent = 'Dark';
    }
     switcher.classList.add('jump')
     setTimeout(function() {
        switcher.classList.remove('jump');
    }, 500);
    console.log('current class name: ' + body.className);
});
