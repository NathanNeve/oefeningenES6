// Basic DOM manipulation
const lis = document.querySelectorAll('ol li');
const text1 = lis[0].innerHTML;
const h1 = document.querySelector('h1');
lis[0].addEventListener('click', function (e) {
    h1.innerHTML = text1;
});

lis[1].addEventListener('mouseenter', function (e) {
    h1.classList.add('orange');
});

lis[2].addEventListener('dblclick', function (e) {
    h1.classList.add('green');
});

lis[3].querySelector('button').addEventListener('click', function (e) {
    h1.style.rotate = '180deg';
});

lis[3].querySelector('button').addEventListener('dblclick', function (e) {
    h1.style.rotate = '360deg';
});
console.log();
