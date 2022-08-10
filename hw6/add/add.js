// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let result = [];
    for (let i = 0; i < str.length; i += n) {
        // result.push(str.substr(i, n));
        result.push(str.slice(i, i + n));
    }
    return result;
};
console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str1 = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый//
let delete_characters = (str, length) => str.substr(0, length);

console.log(delete_characters(str1, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');


console.log(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizeFirst('java,php'));

// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let a = '.';
let b = '-';
let normalizeName = (name) => name
    .replaceAll('.', ' ')
    .replaceAll('-', ' ')
    .replaceAll('_', ' ')
    .replace('   ', '  ')
    .split('  ')
    .join(' ');

console.log(normalizeName(n2));
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomizer = (limat) => {
    let arr = [];
    for (let i = 0; i < limat; i++) {
        arr[i] = Math.round(Math.random() * 100);

    }
    return arr;
};
let array = randomizer(50);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortedArr = (arr) => arr.sort((a, b) => a - b);
console.log(sortedArr(array));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let filteredArr = (arr) => arr.filter(item => item > 0 && item % 2 === 0);
console.log(filteredArr(array));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalize('Створити функцію для адрес електронної пошти'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

let validator = (post) => {
    if (post.indexOf('@') !== 0 && post.includes('@')
        && post.includes('.') && post.indexOf('.') > post.indexOf('@') + 2) {
        return true;
    }
    return false;
};
console.log(validator('some.email@gmail.com'));
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sortedCourses = (arr) => arr.sort((courseA, courseB) => courseA.modules.length - courseB.modules.length);
console.log(sortedCourses(coursesArray));

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let str2 = "Астрономия это наука о небесных объектах";
let countedSymbols = (str, symb) => (str.split('').filter(letter => letter === symb).join('')).length;
console.log(countedSymbols(str2, 'т'));
// document.writeln(count(str, symb)) // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str3 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cuttedString = (str, n) => str.split(' ').slice(0, n).join(' ');

console.log(cuttedString(str3, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let booksWithAuthors = [
    {
        title: 'Where the Crawdads Sing',
        pageCount: 379,
        genre: ['Fiction', 'Psychological Fiction'],
        authors: ['Delia Owens', 'Loisa Daff', 'Jonne Nast']
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
let biggestBook = (arr) => arr.sort((book1, book2) => book2.pageCount - book1.pageCount)[0];
console.log(biggestBook(booksWithAuthors));

// - знайти книжку/ки з найбільшою кількістю жанрів
let bookAuthors = (arr) => arr.sort((book1, book2) => book2.authors.length - book1.authors.length)[0];
console.log(bookAuthors(booksWithAuthors));

// - знайти книжку/ки з найдовшою назвою
let bookLongestTile = (arr) => arr.sort((book1, book2) => book2.title.length - book1.title.length)[0];
console.log(bookLongestTile(booksWithAuthors));

// - знайти книжку/ки які писали 2 автори
let bookWithTwoAuthors = (arr) => arr.find(book => book.authors.length === 2);
console.log(bookWithTwoAuthors(booksWithAuthors));

// - знайти книжку/ки які писав 1 автор
let bookWithOneAuthors = (arr) => arr.find(book => book.authors.length === 1);
console.log(bookWithOneAuthors(booksWithAuthors));

// - вісортувати книжки по кількості сторінок по зростанню
let sortedBooks = (arr) => arr.sort((book1, book2) => book1.pageCount - book2.pageCount);
console.log(sortedBooks(booksWithAuthors));
