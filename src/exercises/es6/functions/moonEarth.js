let i = 0;
const img = document.getElementById('image');
let intervalId; // Variable to store the interval ID

function showNextImage() {
    if (i > 23) {
        i = 0;
    }
    let tag;

    if (i <= 9) {
        tag = `0${i}`;
    } else {
        tag = `${i}`;
    }
    const src = `../../../assets/moonEarth/IMG${tag}.gif`;
    img.setAttribute('src', src);
    i++;
}

function startInterval(delay) {
    clearInterval(intervalId);
    intervalId = setInterval(showNextImage, delay);
}

startInterval(100);

const input = document.querySelector('input');
input.addEventListener('change', () => {
    const delay = parseInt(document.querySelector('output').innerHTML, 10);
    startInterval(delay);
});
