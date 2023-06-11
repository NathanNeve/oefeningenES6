//  Sales
const items = document.querySelectorAll('ul li ul li');
let total = 0;
const discount = 70;
const billX = document.getElementById('bill');
items.forEach((item) => {
    const replaced = item.innerHTML.replace(/\D/g, '');
    total += parseInt(replaced, 10);
    console.log(total);
});

const bill = Math.trunc(total * (100 - discount) * 0.01);
billX.innerHTML = bill;
