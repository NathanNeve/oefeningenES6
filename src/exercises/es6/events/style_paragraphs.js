// Style the paragraphs
const tekst = document.querySelectorAll('div#paragraphs p');
const font = document.getElementById('font');
const fontSize = document.querySelectorAll('input[type=radio]');
const boxes = document.querySelectorAll('input[type=checkbox]');
const dark = document.querySelector('button');
const div = document.querySelector('div#paragraphs');
console.log(dark);

font.addEventListener('change', function (e) {
    const currentValue = event.target.value;
    applyFont(currentValue);
});

function applyFont(element) {
    tekst.forEach(function (ptag) {
        ptag.style.fontFamily = element;
    });
}

fontSize.forEach(function (button) {
    button.addEventListener('click', function (e) {
        applyFontSize(button.value);
    });
});

function applyFontSize(element) {
    tekst.forEach(function (ptag) {
        ptag.style.fontSize = element;
    });
}

boxes[0].addEventListener('click', function (e) {
    tekst.forEach(function (ptag) {
        ptag.style.fontWeight = 'normal';
    });
    if (boxes[0].checked) {
        tekst.forEach(function (ptag) {
            ptag.style.fontWeight = 'bold';
        });
    }
});

boxes[1].addEventListener('click', function (e) {
    tekst.forEach(function (ptag) {
        ptag.style.fontStyle = 'normal';
    });
    if (boxes[1].checked) {
        tekst.forEach(function (ptag) {
            ptag.style.fontStyle = 'italic';
        });
    }
});

dark.addEventListener('click', function (e) {
    if (dark.innerHTML === 'Light theme') {
        div.style.backgroundColor = 'white';
        div.style.color = 'black';
        dark.innerHTML = 'Dark theme';
    } else {
        div.style.backgroundColor = '#111';
        div.style.color = '#f8f8f8';
        dark.innerHTML = 'Light theme';
    }
});
