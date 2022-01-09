const open1 = document.getElementById('open1');
const modal1 = document.getElementById('modal1');
const close1 = document.getElementById('close1');

const open2 = document.getElementById('open2');
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');

const open3 = document.getElementById('open3');
const modal3 = document.getElementById('modal3');
const close3 = document.getElementById('close3');


open1.addEventListener('click',() => {
    modal1.classList.add('active');
});

close1.addEventListener('click',() => {
    modal1.classList.remove('active');
});

open2.addEventListener('click',() => {
    modal2.classList.add('active');
});

close2.addEventListener('click',() => {
    modal2.classList.remove('active');
});

open3.addEventListener('click',() => {
    modal3.classList.add('active');
});

close3.addEventListener('click',() => {
    modal3.classList.remove('active');
});