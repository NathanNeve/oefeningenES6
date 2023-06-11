// String functions
const word = 'ihznduq hmpibnughpimhg yfawozhbduqzg dlwbubkbauk';
const boxes = document.querySelectorAll('div.block');

let indexW = word.indexOf('w');
indexW++;
boxes[0].innerHTML = word.charAt(indexW).toUpperCase();
boxes[1].innerHTML = word.lastIndexOf('w');
boxes[2].innerHTML = word.includes('x');
boxes[3].innerHTML = word.length;
boxes[4].innerHTML = word.replace(/\s/g, '').length;
