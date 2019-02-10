// 'use stric'
//
// // Задача 1. Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике)
// // и создаёт на его основе новый. Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}.
// // initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения.
// // Если округление числа по обычным математическим правилам сходится с его округлением через floor, то floor = true, а ceil = false.
// // Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19,
// // тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.

function getArray(len) {
  let array = [];
  for (var i = 0; i < len; i++ ) {
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}
getArray(5);

function getNewArray(len) {
  let array = getArray(len);
  console.log(array)
  for (var i = 0; i < array.length; i++) {
        array[i] = {
        initial: array[i],
        sqrt: Math.sqrt(array[i]),
        floor : function() {
          return Math.floor(this.sqrt) == Math.round(this.sqrt);
        },
        ceil: function() {
          return Math.ceil(this.sqrt) == Math.round(this.sqrt);
        }
    };
  }
  return array;
}
getNewArray(5);

// Задача 2. Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых.

function addArraySqrtRound () {
    let array = getNewArray(5);
    for (var i = 0; i < array.length; i++) {
      array[i].sqrtRound = array[i].sqrt.toFixed(2);
    }
    return array;
}
addArraySqrtRound();

// Задание 3. Напишите функцию, которая определяет, является ли строка палиндромом.

function checkStringPolindrom(str) {
  str.toLowerCase();
  let reverseStr = str.split("").reverse().join("").toLowerCase();
  return (str == reverseStr);
}
checkStringPolindrom("топот");

// Задача 4. Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего.
// Если таких символов несколько, функция должна возвращать строку из этих символов.

function getMoreCharInString(str) {
  let strArray = str.split(""),
      count = 0,
      tempStr,
      firstEquael = 1;
  for (var i = 0; i < str.length; i++) {
    for (var j = 1; j < str.length; j++) {
      if (strArray[i] == strArray[j]) {
        count++
        if (count > firstEquael) {
          firstEquael = count;
          tempStr = strArray[j];
        }
      }
    }
  }
  return tempStr;
}
getMoreCharInString("дудка")

// Задание 5. Напишите функцию, которая получает в аргументы три строки – str, search, replace.
// Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.

function replaseStr(str, search, replace) {
  console.log(str);
  let arrayStr = str.split(""),
      len = replace.length,
      index = str.indexOf(search);
  arrayStr.splice(index, len, replace);
  str = arrayStr.join("");
  return str;
}
replaseStr("привет как у тебя дела", "тебя", "меня");

// Задача 6. Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.

function firstCharUppercase(str) {
  let arrayStr = str.split(""),
      tempStr,
      tempUpper;
  tempStr = arrayStr[0];
  tempUpper = String(tempStr.toUpperCase());
  arrayStr[0] = tempUpper;
  for (var i = 0; i < str.length; i++) {
    if (arrayStr[i] == " ") {
      tempStr = arrayStr[i + 1];
      tempUpper = String(tempStr.toUpperCase());
      arrayStr[i + 1] = tempUpper;
    }
  }
  let resultStr = arrayStr.join("");
  return resultStr;
}
firstCharUppercase("привет как у тебя дела")

// Задание 7. Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки.
// Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

function replaceStr(str) {
  let arrayStr = [],
      resultStr;
      arrayStr = str.split("");
  for (var i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] == arrayStr[i + 1]) {
      arrayStr[i + 1] = "*";
    }
  }
  resultStr = arrayStr.join("");
  return resultStr;
}
replaceStr("hello");

// Задание 8. Напишите функцию, которая возвращает текущий день недели на русском языке.

function getDay() {
  let arrayDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
  let now = new Date();
  return ("Сегодня " + arrayDay[now.getDay() - 1]);
}
getDay();

// Задание 9. Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и,
// используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.

function getNowDate(day, month, year) {
  let arrayDay = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"],
      now = new Date();
  now.setDate(day);
  now.setMonth(month - 1);
  now.setFullYear(year);
  return arrayDay[now.getDay() - 1];
}
getNowDate(12,3,2019);

// Задача 10. Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней,
// оставшихся до его дня рождения.

function getDayBirthdayUser(day, month, year) {
  let userDate = new Date(),
      nowDate = new Date(),
      userDateMilliSecond,
      nowDateMilliSecond,
      resultDayBirthday;
  userDate.setDate(day);
  userDate.setMonth(month - 1);
  userDateMilliSecond = userDate.getTime();
  nowDateMilliSecond = nowDate.getTime();
  resultDayBirthday = Math.round((userDateMilliSecond - nowDateMilliSecond) / 86400000);
  if (resultDayBirthday < 0 ) {
    console.log("Ваше день рождение уже было");
  } else if (resultDayBirthday == 0) {
    console.log("C днем рождения вас!");
  } else {
    console.log("До вашего дня раждения осталось " + resultDayBirthday);
  }
}
getDayBirthdayUser(11,03,1987);

// Задача 10 часть 2. Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).

function getBirthdayUserInSearchDay(day, month, searchDay) {
  let userDate = new Date(),
      userDateMilliSecond,
      nowDateMilliSecond,
      resultDateMilliSecond,
      resultDate;
  userDate.setDate(day);
  userDate.setMonth(month - 1);
  userDateMilliSecond = userDate.getTime();
  resultDateMilliSecond = userDateMilliSecond + searchDay * 24 * 60 * 60 * 1000;
  resultDate = new Date(resultDateMilliSecond);
  console.log(resultDate);
}
getBirthdayUserInSearchDay(11,03,1000);

// Задача 11. Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа.
// Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку.

function checkNumber(number) {
  let resultNumber,
      roundNumber;
  try {
    resultNumber = Math.sqrt(number); // как вариант ошибки если не передавать аргумент number
    roundNumber = Math.round(resultNumber);
    if (resultNumber - roundNumber == 0) {
      console.log(number + " это " + resultNumber + " в квадрате");
    } else {
      console.log(number + " не имет корней");
    }
  } catch (err) {
    console.log("Получаем ошибку");
    console.log(err.name);
    console.log(err.message);
  } finally {
    return resultNumber;
  }
}
checkNumber(49);

// Задача 11 часть 2. Используя задачу 2 из практики, создайте массив целых чисел.
// Вызовите написанную функцию для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах.
// Массив должен быть пройден до конца, несмотря на ошибки!

function checkArray() {
  let array = getArray(5),
      result;
  for (var i = 0; i < array.length; i++) {
    result = checkNumber(array[i])
    console.log(result);
  }
}
checkArray();
