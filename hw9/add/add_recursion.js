// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let classes = [];
let reCall = function (startElement) {
    for (const classItem of startElement.classList) {
        classes.push(classItem);
    }
    for (const child of startElement.children) {
        reCall(child);
    }
};
reCall(document.body);
console.log(classes);
