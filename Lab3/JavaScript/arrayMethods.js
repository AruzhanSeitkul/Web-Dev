//task1
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

//task2
function filterRange(arr, a, b) {

    return arr.filter(item => (a <= item && item <= b));
}

//task3
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        //delete za predelami diapozona
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }

}

//task4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

//task5
function copySorted(arr) {
    return arr.slice().sort();
}

//task6
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

//task7
let names = users.map(item => item.name);

//task8
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

//task9
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

//task10
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//task11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//task12
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

//task13
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}