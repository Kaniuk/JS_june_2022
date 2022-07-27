// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 'a', 'b', 'c', 'd', true, false, ['abc', 'def']];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[9][0]);
console.log(arr[9][1]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {title: 'Where the Crawdads Sing', pageCount: 379, genre: 'Fiction'},
    {title: 'Where the Crawfish Swim', pageCount: 355, genre: 'Hard-Boiled Mystery'},
    {title: 'The Secrets We Keep: A gripping emotional page turner', pageCount: 421, genre: 'Psychological Fiction'}
];

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let booksWithAuthors = [
    {
        title: 'Where the Crawdads Sing',
        pageCount: 379,
        genre: 'Fiction',
        authors: ['Delia Owens', 'Loisa Daff']
    },
    {
        title: 'Where the Crawfish Swim',
        pageCount: 355,
        genre: 'Hard-Boiled Mystery',
        authors: ['Andrea Smith', 'John Smith']
    },
    {
        title: 'The Secrets We Keep: A gripping emotional page turner',
        pageCount: 421,
        genre: 'Psychological Fiction',
        authors: ['Kate Hewitt', 'John Smith']
    }
];

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Ivan',
        username: 'Vanya',
        password: '12DFG12'
    },
    {
        name: 'Vasyl',
        username: 'Vasya',
        password: '456SDFGH456'
    },
    {
        name: 'Lesya',
        username: 'Lesyok',
        password: '1212Leyla'
    },
    {
        name: 'Ihor',
        username: 'Ihor',
        password: '_qwerty'
    },
    {
        name: 'Vlad',
        username: 'Vlad',
        password: 'Vlad25'
    },
    {
        name: 'Lidiia',
        username: 'Lidok',
        password: 'LOdogka17'
    },
    {
        name: 'Tatyana',
        username: 'Tanya',
        password: '1908'
    },
    {
        name: 'Vera',
        username: 'Veronika',
        password: 'Verka'
    },
    {
        name: 'Natalya',
        username: 'Nata',
        password: 'Nataliii'
    },
    {
        name: 'Ivan',
        username: 'Vanka',
        password: 'sfghjhj'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);