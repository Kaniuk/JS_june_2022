// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber(a, b, c) {
    return (a < b && a < c) ? a : (b < a && b < c) ? b : c;
}

console.log(minNumber(5, 8, 1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    return (a > b && a > c) ? a : (b > a && b > c) ? b : c;
}

console.log(maxNumber(10, 8, 1));

// - створити функцію яка повертає найбільше число з масиву
function maxNumFromArr(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}

console.log(maxNumFromArr([1, 11, 23, 66, 88, 34, 4444]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithMeanOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(arithMeanOfArr([1, 1, 2, 2, 3]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minAndMaxNumbers(...numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log(max);
    return min;
}

console.log(minAndMaxNumbers(1, 5, 4, 0, 8, 9, 15, 3));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomizer(length) {
    for (let i = 0; i < length; i++) {
        console.log(Math.round(Math.random() * 100));
    }

}

randomizer(10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomizerWithLimit(length, limit) {
    for (let i = 0; i < length; i++) {
        console.log(Math.round(Math.random() * limit));
    }
}

randomizerWithLimit(10, 5);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reversedArr(arr) {
    let revArr = [];
    for (let i = 0; i < arr.length; i++) {
        revArr[i] = arr[arr.length - 1 - i];
    }
    return revArr;
}

console.log(reversedArr([1, 2, 3]));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function logOneConcatTwo() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        console.log('You should enter one or two numbers');
    }
}

logOneConcatTwo(5);
console.log(logOneConcatTwo(1, 2));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function concatByIndex(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                newArr[i] = arr1[i] + arr2[j];
            }
        }
    }
    return newArr;
}

console.log(concatByIndex([1, 2, 3, 4], [2, 3, 4, 5]));
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
function returnKeys(arr) {
    let keyArr = [];
    for (const element of arr) {
        for (const arrKey in element) {
            keyArr[keyArr.length] = arrKey;
        }
    }
    return keyArr;

}

console.log(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

function returnValue(arr) {
    let keyArr = [];
    for (const element of arr) {
        for (const arrKey in element) {
            keyArr[keyArr.length] = element[arrKey];
        }
    }
    return keyArr;

}

console.log(returnValue([{name: 'Dima', age: 13}, {model: 'Camry'}]));
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]