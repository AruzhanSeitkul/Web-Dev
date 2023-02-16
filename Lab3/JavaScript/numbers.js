//task1
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

//task2
alert( Math.round(6.35 * 10) / 10 );

//task3
function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Число: ${readNumber()}`);

//task4
//Because 0.2 is not precisely 0.2

//task5
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//task6
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
