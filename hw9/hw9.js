// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let blockElement = document.createElement('div');
blockElement.style.background = 'lightblue';
blockElement.style.color = 'yellow';
blockElement.style.height = '100px';
blockElement.style.width = '200px';
blockElement.style.borderRadius = '20px';
blockElement.style.margin = '10px';
blockElement.style.fontSize = '35px';
blockElement.style.textAlign = 'center';
blockElement.innerText = 'Today is lovely day';
blockElement.classList.add('wrap,collapse,alpha,beta');
document.body.append(blockElement);
let cloneBlockElement = blockElement.cloneNode(true);
document.body.appendChild(cloneBlockElement);

// - Є масив:
let menu = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
for (const menuItem of menu) {
    let liElement = document.createElement('li');
    liElement.innerText = menuItem;
    let menu = document.getElementsByClassName('menu');
    menu[0].append(liElement);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `${element.title}- ${element.monthDuration}`;
    document.body.appendChild(block);
}
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const item of coursesAndDurationArray1) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;
    div.append(h1, p);
    document.body.appendChild(div);
}

// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (const simpson of simpsons) {
    let member = document.createElement('div');
    member.classList.add('member');
    let memberH = document.createElement('h1');
    memberH.innerText = `${simpson.name} - ${simpson.surname} age - ${simpson.age}`;
    let info = document.createElement('p');
    info.innerText = simpson.info;
    let image = document.createElement('img');
    image.src = simpson.photo;
    member.append(memberH, info, image);
    document.body.append(member);
}


// Цикл в циклі
// - Є масив
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
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
for (const course of coursesArray) {
    let block = document.createElement('div');
    block.classList.add('block');
    let title = document.createElement('div');
    title.innerText = `Title:${course.title}`;
    let durations = document.createElement('div');
    durations.classList.add('durations');
    let monthDuration = document.createElement('div');
    monthDuration.innerText = `monthDuration : ${course.monthDuration}`;
    let hourDuration = document.createElement('div');
    hourDuration.innerText = `monthDuration : ${course.hourDuration}`;
    let modules = document.createElement('div');
    modules.classList.add('modules');
    let list = document.createElement('ul');
    let count = 0;
    for (const module of course.modules) {

        let oneModule = document.createElement('li');
        oneModule.innerText = `${++count} module - ${module}`;
        list.appendChild(oneModule);
    }

    modules.appendChild(list);
    durations.append(monthDuration, hourDuration);
    block.append(title, durations, modules);
    document.body.appendChild(block);
}

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.createElement('div');
text.setAttribute('id', 'text');
text.innerText = 'Hide me!';
let button = document.createElement('button');
button.innerText = 'Hide text';
button.onclick = function () {
    if (text.style.display === 'none') {
        text.style.display = 'block';
        text.innerText = 'Hide me!';
    } else {
        text.style.display = 'none';
        button.innerText = 'Show text';

    }
};
document.body.append(button, text);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.createElement('input');
input.placeholder = 'please enter your age';
input.type = 'number';
let ageButton = document.createElement('button');
ageButton.innerText = 'Confirm your age';
ageButton.onclick = function () {
    let age = +input.value;
    alert(age < 18 ? 'Your age is less than 18!!!' : 'You are old enough');
    input.value = '';
};

document.body.append(input, ageButton);

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let rowInput = document.createElement('input');
rowInput.setAttribute('type', 'number');
let columnInput = document.createElement('input');
columnInput.setAttribute('type', 'number');
let fillingInput = document.createElement('input');
let createTableButton = document.createElement('button');
createTableButton.innerText = 'Create table';

rowInput.style.margin = '10px';
columnInput.style.marginRight = '10px';
fillingInput.style.marginRight = '10px';

document.body.append(rowInput, columnInput, fillingInput, createTableButton);

function tableCreator(rowCount, colCount, cellData) {
    const tableEl = document.createElement('table');
    const tbodyEl = document.createElement('tbody');
    tableEl.appendChild(tbodyEl);

    for (let i = 0; i < rowCount; i++) {
        let rowElement = document.createElement('tr');
        tbodyEl.appendChild(rowElement);
        for (let j = 0; j < colCount; j++) {
            let columnElement = document.createElement('td');
            rowElement.appendChild(columnElement);
            columnElement.innerText = cellData;
        }
    }
    return tableEl;
}

createTableButton.onclick = function () {
    const rowCount = rowInput.value;
    const colCount = columnInput.value;
    const cellData = fillingInput.value;
    const tableElement = tableCreator(rowCount, colCount, cellData);
    document.body.appendChild(tableElement);
    rowInput.value = '';
    columnInput.value = '';
    fillingInput.value = '';
};