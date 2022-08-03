// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNum = [1, 2, 3, 4, 5];
for (let i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
}
let arrStr = ['a', 'b', 'c', 'e', 'f'];
for (let i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i]);
}
let arrDif = [1, 2, 'a', true, false];
for (const arrDifElement of arrDif) {
    console.log(arrDifElement);
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArr = [];
emptyArr[0] = 'first';
emptyArr[1] = 'second';
emptyArr[2] = 3;
emptyArr[3] = 4;

for (const emptyArrElement of emptyArr) {
    console.log(emptyArrElement);
}
let someArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
/*let i = 0;
while (i < someArr.length) {
    console.log(someArr[i]);
    i++;
}*/

//     2. перебрати його циклом for
for (let j = 0; j < someArr.length; j++) {
    console.log(someArr[j]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < someArr.length) {
    if (j % 2 === 1) {
        console.log(someArr[j]);
    }
    j++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 1; k < someArr.length; k = k + 2) {
    console.log(someArr[k]);

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
/*let i = 0;
while (i < someArr.length) {
    if (someArr[i] % 2 === 0) {
        console.log(someArr[i]);
    }
    i++;
}*/
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < someArr.length; k++) {
    if (someArr[k] % 2 === 0) {
        console.log(someArr[k]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < someArr.length; k++) {
    if (someArr[k] % 3 === 0) {
        someArr[k] = 'okten';
    }
}
console.log(someArr);

// 8. вивести масив в зворотньому порядку.
for (let k = someArr.length - 1; k >= 0; k--) {
    console.log(someArr[k]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
/*let i = someArr.length - 1;
while (i >= 0) {
    console.log(someArr[i]);
    i--;
}*/
// 2
for (let j = someArr.length - 1; j >= 0; j--) {
    console.log(someArr[j]);
}
// 3
/*let i = someArr.length - 1;
while (i >= 0) {
    if (i % 2 === 1) {
        console.log(someArr[i]);
    }
    i--;
}*/
// 4

for (let j = someArr.length - 1; j >= 0; j--) {
    if (j % 2 === 1) {
        console.log(someArr[j]);
    }
}
// 5
/*let i = someArr.length - 1;
while (i >= 0) {
    if (someArr[i] % 2 === 0) {
        console.log(someArr[i]);
    }
    i--;
}*/
// 6
for (let j = someArr.length - 1; j >= 0; j--) {
    if (someArr[j] % 2 === 0) {
        console.log(someArr[j]);
    }
}
// 7
for (let j = someArr.length - 1; j >= 0; j--) {
    if (someArr[j] % 3 === 0) {
        someArr[j] = 'okten';
    }
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'q', 'w', 'h'];
for (let k = 0; k < strings.length; k++) {
    console.log(strings[k]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let different = ['a', 'b', 'c', 'd', false, [1, 2, 3], {name: 'Oleg', status: true}, 25, 56, 89];
let i = 0;
while (i < different.length) {
    console.log(different[i]);
    i++;
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let k = 0; k < different.length; k++) {
    if (typeof different[k] === "boolean") {
        console.log(different[k]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let k = 0; k < different.length; k++) {
    if (typeof different[k] === 'number') {
        console.log(different[k]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let k = 0; k < different.length; k++) {
    if (typeof different[k] === "string") {
        console.log(different[k]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let newArr = [];
someArr[0] = true;
someArr[1] = 1;
someArr[2] = 'string';
someArr[3] = 2;
someArr[4] = false;
someArr[5] = 3;
someArr[6] = 'hey';
someArr[7] = 4;
someArr[8] = 'fly';
someArr[9] = 5;

for (const newArrElement of newArr) {
    console.log(newArrElement);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 10; k++) {
    console.log(k);
    document.write(`
       <div>${k}</div>
    `);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k++) {
    console.log(k);
    document.write(`
       <div>${k}</div>
    `);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k = k + 2) {
    console.log(k);
    document.write(`
       <div>${k}</div>
    `);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k < 100; k = k + 2) {
    console.log(k);
    document.write(`
       <div>${k}</div>
    `);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 1; k < 100; k = k + 2) {
    console.log(k);
    document.write(`
       <div>${k}</div>
    `);
}
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let booksWithAuthors = [
    {
        title: 'Where the Crawdads Sing',
        pageCount: 379,
        genre: ['Fiction', 'Psychological Fiction'],
        authors: ['Delia Owens', 'Loisa Daff']
    },
    {
        title: 'Where the Crawfish Swim',
        pageCount: 355,
        genre: ['Hard-Boiled Mystery'],
        authors: ['Andrea Smith']
    },
    {
        title: 'The Secrets We Keep: A gripping emotional page turner',
        pageCount: 421,
        genre: ['Psychological Fiction'],
        authors: ['Kate Hewitt', 'John Smith']
    }
];
// -знайти наібльшу книжку.
let theBiggestBook = booksWithAuthors[0];
for (let k = 0; k < booksWithAuthors.length; k++) {
    const currentBook = booksWithAuthors[k];
    if (currentBook.pageCount > theBiggestBook.pageCount) {
        theBiggestBook = currentBook;
    }
}
console.log(theBiggestBook);
// - знайти книжку/ки з найбільшою кількістю жанрів
let bookWithGenres = booksWithAuthors[0];
for (let k = 0; k < booksWithAuthors.length; k++) {
    const currentBook = booksWithAuthors[k];
    if (currentBook.genre.length > bookWithGenres.genre.length) {
        bookWithGenres = currentBook;
    }
}
console.log(bookWithGenres);
// - знайти книжку/ки з найдовшою назвою
let theLongestTitle = booksWithAuthors[0];
for (let k = 0; k < booksWithAuthors.length; k++) {
    const currentBook = booksWithAuthors[k];
    if (currentBook.title.length > theLongestTitle.title.length) {
        theLongestTitle = currentBook;
    }
}
console.log(theLongestTitle);
// - знайти книжку/ки які писали 2 автори
for (let k = 0; k < booksWithAuthors.length; k++) {
    if (booksWithAuthors[k].authors.length === 2) {
        console.log(booksWithAuthors[k]);
    }
}
// - знайти книжку/ки які писав 1 автор
for (let k = 0; k < booksWithAuthors.length; k++) {
    if (booksWithAuthors[k].authors.length === 1) {
        console.log(booksWithAuthors[k]);
    }
}
