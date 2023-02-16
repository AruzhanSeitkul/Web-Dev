//task1
let i = 3;

while (i) {
    alert( i-- );
} //1

//task2
//1
let i = 0;
while (++i < 5) alert( i ); //1, 2, 3, 4

//2
let i = 0;
while (i++ < 5) alert( i ); //1, 2, 3, 4, 5

//task3
for (let i = 0; i < 5; i++) alert( i ); //0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); //0 1 2 3 4

//task4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

//task5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

//task6
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task7
let n = 10;
let i, j;
prime:
    for (i = 2; i <= n; i++) {

        for (j = 2; j < i; j++) {
            if (i % j == 0) continue prime; // not a prime, go next i
        }

        alert( i );
    }