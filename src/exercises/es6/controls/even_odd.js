// Even or odd?
const end = 100;
const listOfUl = document.querySelectorAll('h4 + ul');
const even = listOfUl[0];
const odd = listOfUl[1];
const prime = listOfUl[2];

for (let i = 1; i <= end; i++) {
    const li = document.createElement('li');
    li.innerHTML = i;
    if (i % 2 === 0) {
        even.append(li);
    } else {
        odd.append(li);
    }

    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.append(li);
    }
}
