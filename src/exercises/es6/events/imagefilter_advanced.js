// Image filter (advanced)
const images = document.querySelectorAll('img');

images.forEach((element) => {
    element.classList.add('sepia');

    element.addEventListener('click', (e) => {
        images.forEach((afbeelding) => {
            afbeelding.classList.add('sepia');
        });
        element.classList.remove('sepia');
    });
});
