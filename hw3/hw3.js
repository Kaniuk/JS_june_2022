// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//////////////// Варіант 1 //////////////////////////
let time = 20;
if (time >= 0 && time <= 15) {
    console.log('Це 1 частина години');
} else if (time >= 15 && time <= 30) {
    console.log('Це 2 частина години');
} else if (time >= 30 && time <= 45) {
    console.log('Це 3 частина години');
} else {
    console.log('Це 2 частина години');
}

////////////////////// Варіант 2 //////////////////////////
let result = Math.ceil(time / 15);
console.log(`Це ${result} частина години`);

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;

//////////////// Варіант 1 //////////////////////////
if (day >= 1 && day <= 10) {
    console.log('Це 1 декада місяця');
} else if (day >= 10 && day <= 20) {
    console.log('Це 2 декада місяця');
} else {
    console.log('Це 3 декада місяця');
}

////////////////////// Варіант 2 //////////////////////////
let decade = Math.ceil(day / 10);
console.log(decade);

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = 1;

switch (weekDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thursday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Enter something!');
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let firstNumber = 6;
let secondNumber = 4;

if (firstNumber >= secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = '';
y = y || 'default';

console.log(y);

let z = null;
if (!z) {
    z = 'default';
}
console.log(z);




