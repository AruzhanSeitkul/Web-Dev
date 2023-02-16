//task1
let d = new Date(2012, 1, 20, 3, 12);
alert( d );

//task2
function getWeekDay(date) {
    //Метод date.getDay() возвращает номер дня недели, начиная с воскресенья.
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

//task3
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
}

//task4
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

//task5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

//task6
function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; //ms
    return Math.round(diff / 1000); // sec
}

//task7
function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // ms
    return Math.round(diff / 1000); //sec
}

//task8
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString();
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
