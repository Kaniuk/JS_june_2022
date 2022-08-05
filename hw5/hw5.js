// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => 2 * Math.PI * r;

console.log(circle(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => 2 * Math.PI * r * (h + r);

console.log(cylinder(10, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrElements(newArr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP() {
    document.write(`<p> ${arguments[0]} </p>`);
}

createP('Hello!!!!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

createList('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListWithCountedLi(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createListWithCountedLi('one', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListWithDif(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

createListWithDif(['q', 1, 2, true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

function createObjects(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`);
        for (const arrElementKey in arrElement) {
            document.write(`<div>${arrElementKey} - ${arrElement[arrElementKey]}</div>`);
        }
        document.write(`</div>`);
    }
}

createObjects(usersWithId);

// - створити функцію яка повертає найменьше число з масиву
function theSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}

console.log(theSmallestNumber(newArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumNumbers(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sumNumbers(newArr));
