// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toLocaleUpperCase(), str2.toLocaleUpperCase(), str3.toLocaleUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str4 = 'Ревуть воли як ясла повні';
console.log(str4.split(' '));
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr.map(number => number + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
let ascending = nums.sort((a, b) => a - b);
let descending = nums.sort((a, b) => b - a);
console.log(ascending);

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortByMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sortByMonthDuration);

let filterByMonthDuration = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filterByMonthDuration);
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let cards = [
    {cardSuit: 'spade', value: 6, color: 'red'},
    {cardSuit: 'spade', value: 7, color: 'red'},
    {cardSuit: 'spade', value: 8, color: 'red'},
    {cardSuit: 'spade', value: 9, color: 'red'},
    {cardSuit: 'spade', value: 10, color: 'red'},
    {cardSuit: 'spade', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: 'jack', color: 'red'},
    {cardSuit: 'spade', value: 'queen', color: 'red'},
    {cardSuit: 'spade', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 'joker', color: 'red'},
    {cardSuit: 'diamond', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 7, color: 'black'},
    {cardSuit: 'diamond', value: 8, color: 'black'},
    {cardSuit: 'diamond', value: 9, color: 'black'},
    {cardSuit: 'diamond', value: 10, color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'joker', color: 'black'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'joker', color: 'red'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'joker', color: 'black'},
];
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let sortedCards = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spade.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamond.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.heart.push(card);
    } else {
        acc.clubs.push(card);
    }
    return acc;
}, {spade: [], diamond: [], heart: [], clubs: []});
console.log(sortedCards);