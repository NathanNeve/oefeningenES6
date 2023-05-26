// Image filter (advanced)
const images = document.querySelectorAll('img');

images.forEach(function (element) {
    element.classList.add('sepia');

    element.addEventListener('click', function (e) {
        images.forEach(function (afbeelding) {
            afbeelding.classList.add('sepia');
        });
        element.classList.remove('sepia');
    });
});
