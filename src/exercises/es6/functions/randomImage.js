// Random image
function randomMinMax10(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const image = document.querySelector('img');

setInterval(() => {
    const width = randomMinMax10(100, 800);
    const height = randomMinMax10(100, 400);
    image.setAttribute('src', `https://picsum.photos/${width}/${height}`);
}, 5000);
