// Image filter (basic)
const images = document.querySelectorAll('img');

images.forEach(function (element, index, array) {
    element.addEventListener('mouseenter', function (e) {
        element.classList.add('grayscale');
    });

    element.addEventListener('mouseleave', function (e) {
        element.classList.remove('grayscale');
    });
});
