// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];

for (let i = 0; i < 50; i++) {
    arr[i] = 2 * i;
}
console.log(arr);

//b. заповнити його 50 непарними числами за допомоги циклу.
let arr1 = [];
for (let i = 0; i < 50; i++) {
    arr1[i] = (2 * i) + 1;
}
console.log(arr1);
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr2 = [];
for (let i = 0; i < 20; i++) {
    arr2[i] = Math.floor(Math.random() * (i * 10));
}
console.log(arr2);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.floor(Math.random() * (732 - 8)) + 8;
}
console.log(arr3);*/
/*// 2. Вивести за допомогою console.log кожен третій елемен
/!*for (let i = 2; i < arr3.length; i = i + 3) {
    console.log(arr3[i]);
}*!/*/
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*for (let i = 2; i < arr3.length; i = i + 3) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}*/
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*let arr4 = [];
for (let i = 2; i < arr3.length; i = i + 3) {
    if (arr3[i] % 2 === 0) {
        arr4[i] = arr3[i];
    }
}
console.log(arr4);*/
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let r = 1; r < arr5.length; r++) {
    if (arr5[r] % 2 === 0) {
        console.log(arr5[r - 1]);
    }

}
for (let i = 0; i < arr5.length - 1; i++) {
    if (arr5[i + 1] % 2 === 0) {
        console.log(arr5[i]);
    }
}

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let purchases = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const purchase of purchases) {
    sum += purchase;
}
console.log(sum);
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr6 = [];
for (let i = 0; i < 20; i++) {
    arr6[i] = Math.floor(Math.random() * (i * 10));
}
console.log(arr6);
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i] * 5);
}

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let difArr = [1, 2, 'd', 'ddd', [1, 2, 3], {name: 'Bob'}, 54, 89, 'p'];
let numbers = [];

for (let i = 0; i < difArr.length; i++) {
    if (typeof difArr[i] === 'number')
        numbers[numbers.length] = difArr[i];
}
console.log(numbers);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let userAndCities = [];

for (const userWithId of usersWithId) {
    for (const cityWidthId of citiesWithId) {
        if (userWithId.id === cityWidthId.user_id) {
            userWithId.address = cityWidthId;
            userAndCities[userAndCities.length] = userWithId;
        }
    }
}
console.log(userAndCities);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of newArr) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newArray = [];
for (let i = 0; i < newArr.length; i++) {
    newArray[i] = newArr[i];
}
console.log(newArray);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*let abc = '';
let a = ['a', 'b', 'c'];
for (let i = 0; i < a.length; i++) {
    abc += a[i];

}
console.log(abc);*/
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let abc = '';
let a = ['a', 'b', 'c'];
let i = 0;
while (i < a.length) {
    abc += a[i];
    i++;
}
console.log(abc);*/
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc = '';
let a = ['a', 'b', 'c'];
for (let string of a) {
    abc += string
}
console.log(abc);