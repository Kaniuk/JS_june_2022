let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*
let newUsers = [];
for (const user of users) {
    newUsers.push(user.address);
}
console.log(newUsers);
*/


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*
for (const user of users) {
    let oneUser = document.createElement('div');
    oneUser.innerText = `name - ${user.name},
    age - ${user.age},
    city - ${user.address.city},
    address :
    country - ${user.address.country},
    street - ${user.address.street},
    house number - ${user.address.houseNumber},
    status - ${user.status}`;
    document.body.appendChild(oneUser);
}
*/


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/*for (const user of users) {
    let oneUser = document.createElement('div');
    oneUser.classList.add('user');
    let userName = document.createElement('div');
    userName.innerText = `name - ${user.name}`;
    let userAge = document.createElement('div');
    userAge.innerText = `age - ${user.age}`;
    let userStatus = document.createElement('div');
    userStatus.innerText = `status - ${user.status}`;
    let userAddress = document.createElement('div');
    userAddress.innerText = ` country - ${user.address.country}, street - ${user.address.street}, house number - ${user.address.houseNumber},`;
    oneUser.append(userName,userAge,userStatus,userAddress);
    document.body.appendChild(oneUser);
}*/


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let oneUser = document.createElement('div');
    oneUser.classList.add('user');
    let userName = document.createElement('div');
    userName.innerText = `name - ${user.name}`;
    let userAge = document.createElement('div');
    userAge.innerText = `age - ${user.age}`;
    let userStatus = document.createElement('div');
    userStatus.innerText = `status - ${user.status}`;
    let userAddress = document.createElement('div');
    userAddress.innerText = `address:`;
    let addressCountry = document.createElement('div');
    addressCountry.innerText = `country - ${user.address.country}`;
    let addressStreet = document.createElement('div');
    addressStreet.innerText = `street - ${user.address.street}`;
    let addressHouseNumber = document.createElement('div');
    addressHouseNumber.innerText = `house number - ${user.address.houseNumber}`;
    userAddress.append(addressCountry,addressStreet,addressHouseNumber);
    oneUser.append(userName,userAge,userStatus,userAddress);
    document.body.appendChild(oneUser);
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

/*
let rulesContent = document.getElementById('content');
let ruleList = document.createElement('ul');
let rulesHeader = document.getElementsByTagName('h2');
for (const rule of rulesHeader) {
    let ruleLi = document.createElement('li');
    ruleLi.innerText = rule.innerText;
    ruleList.appendChild(ruleLi);
    rulesContent.appendChild(ruleList);
}
*/


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

/*-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html*/
let classCounter = 1;

let oneRule = document.createElement('id');
oneRule.classList.add('content');
let header = document.createElement('h1');
header.innerText = 'Правила бойцовского клуба';
let wrap = document.createElement('id');
wrap.classList.add('wrap');

for (const rule of rules) {
    let ruleClass = document.createElement('div');
    ruleClass.classList.add('rule');
    ruleClass.classList.add('rule' + classCounter);
    classCounter++;
    let ruleHeader = document.createElement('h2');
    ruleHeader.innerText = rule.title;
    let ruleParagraph = document.createElement('p');
    ruleParagraph.innerText = rule.body;


    ruleClass.append(ruleHeader,ruleParagraph);
    wrap.appendChild(ruleClass);
    document.body.append(oneRule,header,wrap);
}