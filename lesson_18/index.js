const moment = require("moment");
let date = prompt("Введите дату рождения в формате 01-01-2019 ", "");
let day = moment(date);
let current = moment();

// console.log(current);

result = day.diff(current, 'days');

document.write(result);