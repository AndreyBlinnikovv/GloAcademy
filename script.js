'use strict'

const title = prompt("Как называется ваш проект?");
console.log(title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

const screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

const adaptive = confirm("Нужен ли адаптив на сайте?");

if (adaptive == "Да" || adaptive == "да") {
  console.log(true);
} else {
  console.log(false);
}

const serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?")

const serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?")

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollback = 3;
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);

switch(true) {
  case fullPrice >= 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log("Даем скидку в 5%");
    break;  
  case fullPrice < 15000 && fullPrice >= 0:
    console.log("Скидка не предусмотрена");
    break; 
  case fullPrice < 0:
    console.log("Что то пошло не так");
    break;     
}


