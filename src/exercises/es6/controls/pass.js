// Did I pass?
const result = 16;
const fas = document.querySelectorAll('i');

if (result >= 10) {
    fas[0].setAttribute('style', 'display:block');
} else {
    fas[1].setAttribute('style', 'display:block');
}
