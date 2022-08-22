// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let bedWords = ['козел', 'свиня', 'олень'];

let textInput = document.createElement('input');
textInput.placeholder = 'Enter your word';
let checkBedWordsButton = document.createElement('button');
checkBedWordsButton.innerText = 'Let`s check';
checkBedWordsButton.onclick = function () {
    checker(textInput.value, bedWords);
};

document.body.append(textInput, checkBedWordsButton);

function checker(word, bedArr) {
    if (bedArr.includes(word)) {
        alert('Nooo, it`s forbidden use that word');
    } else {
        alert('God job!');
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let sentenceInput = document.createElement('input');
sentenceInput.placeholder = 'Enter your word';
let checkBedWordsButton1 = document.createElement('button');
checkBedWordsButton1.innerText = 'Let`s check';
checkBedWordsButton1.onclick = function () {
    checkSentence(sentenceInput.value, bedWords);
};

document.body.append(sentenceInput, checkBedWordsButton1);

function checkSentence(sentence, bedArr) {
    for (const bedWord of bedArr) {
        if (sentence.includes(bedWord)) {
            alert('You are so rude! Brrrr');
            return;
        }
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu_header = document.createElement('div');
menu_header.innerText = 'header';
menu_header.classList.add('header');
let menu_content = document.createElement('div');
menu_content.innerText = 'content';
menu_content.classList.add('content');

menu_header.onclick = function () {
    menu_content.classList.toggle('hidden');

};
document.body.append(menu_header, menu_content);

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arr = [
    {title: 'first', body: 'lorem ipsum dolo sit ameti'},
    {title: 'second', body: 'lorem ipsum dolo sit ameti'},
    {title: 'third', body: 'lorem ipsum dolo sit ameti'},
    {title: 'fourth', body: 'lorem ipsum dolo sit ameti'},
    {title: 'fifth', body: 'lorem ipsum dolo sit ameti'},
    {title: 'sixth', body: 'lorem ipsum dolo sit ameti'},
];
let comments = document.getElementsByClassName('comments')[0];
for (const comment of arr) {
    let oneComment = document.createElement('div');
    oneComment.innerText = `${comment.title} - ${comment.body}`;
    let button = document.createElement('button');
    button.innerText = 'hide comment';

    button.onclick = function () {
        oneComment.classList.toggle('hidden');
    };
    comments.append(oneComment, button);
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hiddenButton = document.createElement('button');
hiddenButton.innerText = 'hide me!';
hiddenButton.onclick = function () {
    hiddenButton.style.display = 'none';
};

document.body.appendChild(hiddenButton);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
/*

document.body.onclick = function getElementInfo({target}) {
    console.log(target.offsetWidth);
    console.log(target.tagName);
    console.log(target.offsetHeight);

    for (const attribute of target.getAttributeNames()) {
        console.log(attribute, ' = ', target.getAttribute(attribute));
    }

};

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.addEventListener('click', function ({target}) {
    let attributesStr = '';
    for (const attribute of target.getAttributeNames()) {
        attributesStr += `${attribute} =  ${target.getAttribute(attribute)}`;
    }
    alert(`Information: Name teg - ${target.tagName}, Attributes - ${attributesStr},
        Width - ${target.offsetWidth}, Height - ${target.offsetHeight}`);
});

*/

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
function filteredUsers(users) {
    let filteredUsers = users.filter(user => user.status === false);
    for (const filteredUser of filteredUsers) {
        let user = document.createElement('div');
        user.innerText = `id:${filteredUser.id}, age:${filteredUser.age}, status:${filteredUser.status}
            address: city:${filteredUser.address.city}, street:${filteredUser.address.street}, number:${filteredUser.address.number}`;

        document.body.append(user);
    }
}

function filteredUsersByAge(users) {
    let filteredUsersByAge = users.filter(user => user.age > 29);
    for (const filteredUser of filteredUsersByAge) {
        let user = document.createElement('div');
        user.innerText = `id:${filteredUser.id}, age:${filteredUser.age}, status:${filteredUser.status}
            address: city:${filteredUser.address.city}, street:${filteredUser.address.street}, number:${filteredUser.address.number}`;

        document.body.append(user);
    }
}

function filteredUsersByCity(users) {
    let filteredUsersByCity = users.filter(user => user.address.city === 'Kyiv');
    for (const filteredUser of filteredUsersByCity) {
        let user = document.createElement('div');
        user.innerText = `id:${filteredUser.id}, age:${filteredUser.age}, status:${filteredUser.status}
            address: city:${filteredUser.address.city}, street:${filteredUser.address.street}, number:${filteredUser.address.number}`;

        document.body.append(user);
    }
}

let form = document.forms.filterForm;
form.checkfield1.onchange = function () {
    filteredUsers(usersWithAddress);
};
form.checkfield2.onchange = function () {
    filteredUsersByAge(usersWithAddress);
};
form.checkfield3.onchange = function () {
    filteredUsersByCity(usersWithAddress);
};

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
function getNextTreeElement(node) {
    if (node.children.length) {
        return node.children[0];
    }
    if (node.nextElementSibling) {
        return node.nextElementSibling;
    }
    return getNextTreeElement(node.parentElement);
}

function highlightNode(node) {
    node.style.border = '1px solid green';
}

function getPreviousElement(node) {
    if (node.previousElementSibling) {
        return node.previousElementSibling;
    } else {
        return node;
    }
    return getPreviousElement(node.parentElement);

}


function domNavigation(node) {
    let next = document.createElement('button');
    next.innerText = 'next';
    let prev = document.createElement('button');
    prev.innerText = 'prev';
    document.body.append(prev, next);

    let currentNode = node;

    next.onclick = function () {
        const nextEl = getNextTreeElement(currentNode);

        if (nextEl) {
            currentNode.style.border = '1px solid transparent';
            currentNode = nextEl;
            highlightNode(currentNode);
        }
    };
    prev.onclick = function () {
        const prevEl = getPreviousElement(currentNode);

        if (prevEl) {
            currentNode.style.border = '1px solid transparent';
            currentNode = prevEl;
            highlightNode(currentNode);
        }

    };
}


domNavigation(document.body);

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

    let select = document.getSelection().toString();
    let wrappedSelectedText =`<span style="font-style: italic">${select}</span>`;
    let editorElement = document.body;
    editorElement.innerHTML = editorElement.innerHTML.replace(select, wrappedSelectedText);


