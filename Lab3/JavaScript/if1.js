//task3
let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

//task4
let result = (a + b < 4) ? 'Below' : 'Over';

//task5
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
