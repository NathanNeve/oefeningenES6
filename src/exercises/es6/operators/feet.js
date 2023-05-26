// Centimeters to Feet
const centimeter = document.getElementById('centimeters');
const feet = document.getElementById('feet');
const cent = 60;
const factor = 0.0328084;

centimeter.innerHTML = cent;
feet.innerHTML = (cent * factor).toFixed(2);
