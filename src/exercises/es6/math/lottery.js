// Lottery
const div = document.getElementById('ballcontainer');
const balls = div.querySelectorAll('div');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        balls[i].innerHTML = Math.floor(Math.random() * (45 - 1 + 1) + 1);
    }
});
