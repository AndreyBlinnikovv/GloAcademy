'use strict'

let lang = 'ru';

//через if
if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
  } else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }

 //через switch-case
 switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  } 

//без if и switch-case
const daysOfWeeks = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  };  
  console.log(daysOfWeeks[lang].join(', '));



const namePerson = "Артем";

const result = namePerson === "Артем" ? "директор" :
               namePerson === "Александр" ? "преподаватель" : "студент";

console.log(result); 


