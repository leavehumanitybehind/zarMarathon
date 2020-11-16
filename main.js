'use strict';
//#1

const firstRow = prompt('Введите строку №1');
const secondRow = prompt('Введите строку №2');;
const letter = prompt('Какую букву будем считать?');

function getRow(firstRow, secondRow) {
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === letter || firstRow.charAt(i) === letter.toUpperCase()) {
            count++;

        }
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === letter || secondRow.charAt(i) === letter.toUpperCase()) {
            count2++;

        }
    }
    if (count > count2) {
        alert('Большее количество букв ' + letter + ' в строке ' + firstRow);
    } else if (count === count2) {
        alert("Одинаковое количество букв " + letter);
    } else {
        alert('Большее количество букв ' + letter + ' в строке ' + secondRow);
    }
}

getRow(firstRow, secondRow);

//#2

let number = prompt('Введите номер телефона');
const editNumber = (p) => {
    let newNumber = '';
    for (let i = 0; i < p.length; i++) {
        if (p.length > 10) {
            if (p.charAt(0) === "8" || p.charAt(0) === "7") {
                newNumber = '+' + '7 ' + '(' + p.charAt(1) + p.charAt(2) + p.charAt(3) + ') ' + p.charAt(4) + p.charAt(5) + p.charAt(6) + '-' + p.charAt(7) + p.charAt(8) + '-' + p.charAt(9) + p.charAt(10);
            } else if (p.charAt(0) === '9') {
                newNumber = '';
                newNumber = '+7 ' + '(' + p.charAt(0) + p.charAt(1) + p.charAt(2) + ') ' + p.charAt(3) + p.charAt(4) + p.charAt(5) + '-' + p.charAt(6) + p.charAt(7) + '-' + p.charAt(8) + p.charAt(9);
            } else if (p.charAt(0) === "+" && p.charAt(0) === "7") {
                newNumber = p.charAt(0) + p.charAt(1) + '' + '(' + p.charAt(2) + p.charAt(3) + p.charAt(4) + ') ' + p.charAt(5) + p.charAt(6) + p.charAt(7) + '-' + p.charAt(8) + p.charAt(9) + '-' + p.charAt(10) + p.charAt(11);
            } else {
                alert("Неверный формат номера!");
            }
        }
        else {
            alert("Неверный формат номера!");
        }
    }
    alert(newNumber.trim());
}
editNumber(number);
