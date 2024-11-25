'use strict'

let title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?")
const serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?")
const rollback = 3;
let fullPrice;
let allServicePrices;
let servicePercentPrice;


const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices
}

const getTitle = function() {
  return title.trim()[0].toUpperCase() + title.trim().toLocaleLowerCase();
};

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100))
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollBackMassage = function () {
  if (fullPrice >= 30000) {
      return "Даем скидку в 10%";
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
      return "Даем скидку в 5%";
  } else if (fullPrice < 15000 && fullPrice >= 0) {
      return "Скидка не предусмотрена";
  } else {
      return "Что-то пошло не так";
  }
}


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
console.log(getRollBackMassage(fullPrice));
