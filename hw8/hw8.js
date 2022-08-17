// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];

users.push(new User(3, 'Vasyl', 'Tykhonenko', 'user1@ua.net'));
users.push(new User(2, 'Vitalyy', 'Dydenko', 'user2@ua.net'));
users.push(new User(1, 'Vasyl', 'Ivanov', 'user3@ua.net'));
users.push(new User(4, 'Ivan', 'Naymenko', 'user4@ua.net'));
users.push(new User(5, 'Yriy', 'Luter', 'user5@ua.net'));
users.push(new User(6, 'Mykhaylo', 'Petrov', 'user6@ua.net'));
users.push(new User(7, 'Andryy', 'Nakonechnyy', 'user7@ua.net'));
users.push(new User(8, 'Volodymyr', 'Popov', 'user8@ua.net'));
users.push(new User(9, 'Ihor', 'Kaniuk', 'user9@ua.net'));
users.push(new User(10, 'Oleksandr', 'Groznyy', 'user10@ua.net'));


console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => !(user.id % 2)));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];

clients.push(new Client(1, 'Vasyl', 'Tykhonenko', 'user1@ua.net', '0958745598', ['fanta', 'flowers',]));
clients.push(new Client(2, 'Vitalyy', 'Dydenko', 'user2@ua.net', '0548796642', ['sweets', 'cola', 'orange']));
clients.push(new Client(3, 'Vasyl', 'Ivanov', 'user3@ua.net', '0789684957', ['chocolate', 'flowers', 'coffe']));
clients.push(new Client(4, 'Ivan', 'Naymenko', 'user4@ua.net', '0254789475', ['cabbage', 'lemons', 'sugar', 'salt', 'oil']));
clients.push(new Client(5, 'Yriy', 'Luter', 'user5@ua.net', '0634789979', ['beans']));
clients.push(new Client(6, 'Mykhaylo', 'Petrov', 'user6@ua.net', '0687945598', ['cards', 'beer', 'chips', 'vodka']));
clients.push(new Client(7, 'Andryy', 'Nakonechnyy', 'user7@ua.net', '0506987649', ['bubblegum']));
clients.push(new Client(8, 'Volodymyr', 'Popov', 'user8@ua.net', '0526987459', []));
clients.push(new Client(9, 'Ihor', 'Kaniuk', 'user9@ua.net', '0369874569', ['cabbage', 'lemons', 'sugar', 'salt', 'oil', 'water']));
clients.push(new Client(10, 'Oleksandr', 'Groznyy', 'user10@ua.net', '0257894654', ['fish']));
// створити пустий масив, наповнити його 10 об'єктами Client

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*
function Car(model, producer, year, max_speed, engine_volume, driver) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${max_speed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model},producer - ${this.producer}, year - ${this.year},max_speed - ${this.max_speed}
        ,engine_volume - ${this.engine_volume} `);
        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`Your speed now is -  ${this.max_speed = this.max_speed + newSpeed}`);
    };
    this.changeYear = function (newValue) {
        console.log(`New year is ${this.year = newValue}`);
    };
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    };
}*/

/*
const myCar = new Car('Toyota', 'Japan', 2000, 200, 5.5);
myCar.info();

myCar.drive();
myCar.increaseMaxSpeed(50);
myCar.info();

myCar.changeYear(2010);
myCar.info();

myCar.addDriver({
    name: 'Vasyl',
    experience: 10
});
myCar.info();
*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, max_speed, engine_volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    }

    info() {
        console.log(`model - ${this.model},producer - ${this.producer}, year - ${this.year},max_speed - ${this.max_speed}
        ,engine_volume - ${this.engine_volume} `);
        if (this.driver) {
            console.log('Водій -', this.driver);
        }
    }

    increaseMaxSpeed(newSpeed) {
        console.log(`Your speed now is -  ${this.max_speed = this.max_speed + newSpeed}`);
    }

    changeYear(newValue) {
        console.log(`New year is ${this.year = newValue}`);
    }

    addDriver(driver) {
        console.log(this.driver = driver);
    }
}

const myCar = new Car('Toyota', 'Japan', 2000, 200, 5.5);
myCar.info();

myCar.drive();
myCar.increaseMaxSpeed(50);
myCar.info();

myCar.changeYear(2010);
myCar.info();

myCar.addDriver({
    name: 'Vasyl',
    experience: 10
});
myCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

class Prince extends Cinderella {
    constructor(name, age, size_of_the_shoes) {
        super(name, age);
        this.size_of_the_shoes = size_of_the_shoes;
    }
}

let girls = [
    new Cinderella('Lili', 21, 38),
    new Cinderella('Julia', 25, 39),
    new Cinderella('Olya', 20, 35),
    new Cinderella('Lidiia', 18, 36),
    new Cinderella('Inna', 28, 40),
    new Cinderella('Nina', 35, 35),
    new Cinderella('Nataliya', 42, 38),
    new Cinderella('Anna', 21, 37),
    new Cinderella('Tonya', 40, 39),
    new Cinderella('Kira', 21, 35),
];
const prince = new Prince('Vasyl', 22, 36);

for (const girl of girls) {
    if (girl.foot_size === prince.size_of_the_shoes) {
        console.log(`OMG! This girl is Cinderella`, girl);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const ourCinderella = girls.find(cinderella => cinderella.foot_size === prince.size_of_the_shoes);
console.log(ourCinderella);
