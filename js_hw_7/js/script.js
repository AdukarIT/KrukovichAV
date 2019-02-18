'use strict'

// Задача 1. Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode.
// Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики

 let str = "Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode";
 let arrayStr = str.split("");

 function sumCharUnicodeInStr(massive, uni) {
   let result = massive.filter(function(item) {
     return item.charCodeAt() == uni;

   });
   console.log(result.length);
 }
 sumCharUnicodeInStr(arrayStr,"1072"); // код маленькой буквы а

// Задача 2. Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. Например:

 let letterCounter = sumCharUnicodeInStr(arrayStr,1072);
 console.log(letterCounter);

// Для решения задач 3-6 используйте файл uscities.js.
// массив data берется из файла uscities.js

// Задача 3. Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые с 2000 по 2013 выросли в населении.

function citySort() {
  let citySortArray = data.filter(function(item) { // массив data берется из файла uscities.js
     return item.state == "California" && parseInt(item.growth_from_2000_to_2013) > 0;
  });
  return citySortArray;
}
citySort();

// Задача 4. Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.

 function countPeoples() {
   let peopleCount = 0;
   let array = data.filter(function(item) {
     return parseInt(item.latitude) > 25 && parseInt(item.latitude) < 30;
   });
   array.forEach(function(item) {
     return peopleCount += parseInt(item.population);
   });
   return peopleCount;
 }
 countPeoples();

// Задача 5. Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы этого массива по названию города.

 function arrayFirstCharD() {
   let array = data.filter(function(item) {
     return item.city.startsWith("D");
   });
   array.sort(function(a, b) {
     if (a.city > b.city) {
       return 1;
     } else {
       return -1;
     }
   });
   return array;
 }
 arrayFirstCharD();

// Задача 6. Преобразуйте представленный массив "Города" в объект "Штаты" :для каждого штата – отдельное свойство объекта (ключ = название штата);
// значение каждого свойства – массив городов; каждый элемент массива – название города, население и место в общем рейтинге (rank).

 function createObjectState() {
   let states = {};
   for (var i = 0; i < data.length; i++) {
     states[data[i]["state"]] = [];
     states[data[i]["state"]].push(data[i]["city"]);
   }
   for (var key in states) {
     for (var j = 0; j < data.length; j++) {
       if (key == data[j]["state"]) {
         states[data[j]["state"]].push(data[j]["city"]);
       }
     }
   }
   console.log(states);
 }
 createObjectState();
