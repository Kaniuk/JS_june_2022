/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log , alert, document.write*/

let a = 'hello';
console.log(a);
alert(a);
document.write(a);

let b = 'owu';
console.log(b);
alert(b);
document.write(b);

let c = 'com';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);

let firstNum = 1;
console.log(firstNum);
alert(firstNum);
document.write(firstNum);

let secondNum = 10;
console.log(secondNum);
alert(secondNum);
document.write(secondNum);

let thirdNum = -999;
console.log(thirdNum);
alert(thirdNum);
document.write(thirdNum);

let fourthNum = 123;
console.log(fourthNum);
alert(fourthNum);
document.write(fourthNum);

let fifthNum = 3.14;
console.log(fifthNum);
alert(fifthNum);
document.write(fifthNum);

let sixthNum = 2.7;
console.log(sixthNum);
alert(sixthNum);
document.write(sixthNum);

let seventhNum = 16;
console.log(seventhNum);
alert(seventhNum);
document.write(seventhNum);

let firstBool = true;
console.log(firstBool);
alert(firstBool);
document.write(firstBool);

let secondBool = false;
console.log(secondBool);
alert(secondBool);
document.write(secondBool);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Liudmyla';
let middleName = 'Viktorivna';
let lastName = 'Kaniuk';

let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/
let a1 = 100;
let b1 = '100';
let c1 = true;
console.log(typeof a1, typeof b1, typeof c1);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let askName = prompt('What is your name?', 'Liudmyla');
let askMiddleName = prompt('What is your middle name?', 'Viktorivna');
let askLastName = prompt('What is your last name?', 'Kaniuk');

console.log(`${askName} ${askMiddleName} ${askLastName}`);