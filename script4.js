let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];


const id2 = users.find(user => user.id === 2);
console.log(id2);

const filt = users.filter(user => user.id > 1);
console.log(filt);