// Fibonacci
const content = document.querySelector('div ul');
let n1 = 0;
let n2 = 1;
let nextTerm = 0;

for (let i = 0; i <= 50; i++) {
    const li = document.createElement('li');
    li.innerHTML = n1;
    console.log(li);
    content.append(li);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
