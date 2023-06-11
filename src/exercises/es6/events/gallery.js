// Image gallery
const thumbnails = document.getElementById('thumbnails');
const afbeeldingen = thumbnails.querySelectorAll('img');
const fullImage = document.getElementById('fullImage');
console.log(fullImage);
afbeeldingen.forEach((afbeelding) => {
    afbeelding.addEventListener('click', () => {
        afbeeldingen.forEach((item) => {
            item.classList.remove('border');
        });

        afbeelding.classList.add('border');
        const dataID = afbeelding.getAttribute('data-id');
        fullImage.setAttribute('src', `https://picsum.photos/id/${dataID}/600/400`);
        console.log(fullImage);
    });
});
