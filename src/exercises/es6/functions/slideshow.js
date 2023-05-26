const album = document.getElementById('album');
const images = album.getElementsByTagName('li');

function moveImage() {
    const firstImage = images[0];
    album.removeChild(firstImage);
    album.appendChild(firstImage);
}

setInterval(moveImage, 3000);
