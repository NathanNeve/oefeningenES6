// Reaction Game
const blocks = document.querySelectorAll('div.blocks div');

let previousNumber = 0;
let score = 0;

function randomNr() {
    let nummer = Math.floor(Math.random() * 3);
    while (nummer === previousNumber) {
        nummer = Math.floor(Math.random() * 3);
    }
    previousNumber = nummer;

    blocks[nummer].classList.add('red');
    setTimeout(() => {
        blocks[nummer].classList.remove('red', 'green');
        blocks[nummer].innerHTML = '';
    }, 750);

    while (score === 5) {
        blocks[nummer].classList.add('green');
        blocks[nummer].innerHTML = '5';
        setTimeout(() => {}, 10000);
    }
}
setInterval(randomNr, 750);

blocks.forEach((block) => {
    block.addEventListener('click', () => {
        if (block.classList.contains('red')) {
            block.classList.add('green');
            score += 1;
            block.innerHTML = score;
        }
    });
});
