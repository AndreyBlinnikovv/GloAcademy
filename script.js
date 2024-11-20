"use strict";

let capybara = " капибара капибара капибара капибара капибара капибара капибара капибара  "

function processString(str) {
  if (typeof str !== 'string') {
    console.log('Введите строку!');
  } else {
    let trimmedStr = str.trim();
    if (trimmedStr.length > 30) {
      console.log(trimmedStr.slice(0, 30) + '...');
    } else {
      console.log(trimmedStr);
    }
  }
  }

processString(capybara);