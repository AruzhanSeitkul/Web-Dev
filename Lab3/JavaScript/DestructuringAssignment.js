//task1
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

//task2
function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for([name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}