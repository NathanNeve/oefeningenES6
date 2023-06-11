// Change background color (basic)
const buttons = document.querySelectorAll('.primary');
const body = document.body;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        body.style.backgroundColor = button.innerHTML;
    });
});
