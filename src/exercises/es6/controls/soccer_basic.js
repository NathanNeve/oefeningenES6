// A soccer game (basic)
const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];
const tbody = document.querySelector('tbody');
console.log(tbody);
let scoreBel = 0;
let scoreSpa = 0;
score.forEach((point) => {
    const row = document.createElement('tr');
    if (point === 'Belgium') {
        scoreBel++;
        row.innerHTML = `<td>${scoreBel}</td><td>${scoreSpa}</td>`;
    } else {
        scoreSpa++;
        row.innerHTML = `<td>${scoreBel}</td><td>${scoreSpa}</td>`;
    }
    tbody.append(row);
});
