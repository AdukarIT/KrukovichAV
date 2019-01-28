// Задача 1. Создайте функцию, которая принимает три числа:
// два первых должны быть длиной сторон катетов прямоугольного треугольника,
// а третье – длиной гипотенузы. Функция возвращает true, если такой
// прямоугольный треугольник возможен, и false, если нет.
//
// function rectangularTriangle(katetA, katetB, gipoC) {
//   var kateta = katetA * katetA;
//   var katetb = katetB * katetB;
//   if (gipoC ** 2 == kateta + katetb) {
//     return document.write("True");
//   } else {
//     return document.write("False");
//   }
// }
//
// rectangularTriangle(3, 4, 5);

// Задание 2. Создайте функцию repeat(str, n), которая возвращает строку,
// состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.
//
// function repeateStr(str, n) {
//   for (i = 1; i <= n; i++) {
//     console.log(str);
//   }
// }
// repeateStr("Я строка ", 3);

// Задание 3. Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете.
// Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».
//
// function checkStudentsAndDesks(students, desks) {
//   var studentsCount = Math.round(students / 2);
//   var desksResult = 0;
//   if (studentsCount == desks) {
//     document.write("Парт хватает");
//   } else if (studentsCount < desks) {
//     desksResult = desks - studentsCount;
//     document.write("Парты в количестве " + desksResult + " лишние");
//   } else if (studentsCount > desks) {
//     desksResult = studentsCount - desks;
//     document.write("Парт в количестве " + desksResult + " не хватает");
//   }
// }
// checkStudentsAndDesks(134, 70);

// Задача 4. Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале.
// Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание:
//
// function ratings(numberRatings) {
//   if (numberRatings == 0 || numberRatings > 10) {
//     document.write("Введите отметку от 1 до 10");
//   }
//   switch (numberRatings) {
//     case 10:
//       document.write("Level [High], Russian equivalent [5+],	US equivalent [A+]")
//       break;
//     case 9:
//       document.write("Level [High], Russian equivalent [5],	US equivalent [A]")
//       break;
//     case 8:
//       document.write("Level [Good], Russian equivalent [4+],	US equivalent [A-]")
//       break;
//     case 7:
//       document.write("Level [Good], Russian equivalent [4],	US equivalent [B+]")
//       break;
//     case 6:
//       document.write("Level [Average], Russian equivalent [4-],	US equivalent [B]")
//       break;
//     case 5:
//       document.write("Level [Averega], Russian equivalent [3+],	US equivalent [B-]")
//       break;
//     case 4:
//       document.write("Level [Satisfactory], Russian equivalent [3],	US equivalent [C+]")
//       break;
//     case 3:
//       document.write("Level [Satisfactory], Russian equivalent [3-],	US equivalent [C]")
//       break;
//     case 2:
//       document.write("Level [Low], Russian equivalent [2],	US equivalent [F]")
//       break;
//     case 1:
//       document.write("Level [Low], Russian equivalent [1],	US equivalent [F]")
//       break;
//     default:
//   }
// }
// ratings(6);

// Задача 5. Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.
//
// function promptRequest() {
//   var i = 1;
//   do {
//     var userNumber = prompt("Введите число");
//     if (userNumber == 0){
//       return document.write("Все");
//     }
//     i++;
//   } while (i <= 3000);
// }
// promptRequest();

// Задание 6.
// Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту сумму в консоль,
// а возвращала количество введённых чисел.
//
// function promptRequestSum() {
//   var i = 1;
//   var sumUserNumber = 0;
//   var userNumberCount = 0;
//   do {
//     var number = prompt("Введите число");
//     var userNumber = Number(number);
//     sumUserNumber += userNumber;
//     userNumberCount += 1;
//     if (sumUserNumber >= 100) {
//       return document.writeln("Сумма ваших введеных чисел " + sumUserNumber + " число набралось из " + userNumberCount + " попыток");
//     }
//     i++;
//   } while (i <= 300);
// }
// promptRequestSum();

// Задание 7. Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.
//
// function simpleNumber(number) {
//   if (!(number % 2)) {
//     document.write("Это число не простое");
//   } else {
//     document.write("Это число простое");
//   }
// }
// simpleNumber(4);

// Задание 8. Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца.
// Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому относится месяц.
// Если нет –сообщение об ошибке.
//
// function months(month) {
//   if (month == 0 || month >= 12) {
//     document.write("Такого месяца нет");
//   }
//   if (month == 12 || month == 1 || month == 2) {
//     document.write("Это зима");
//   }
//   if (month == 3 || month == 4 || month == 5) {
//     document.write("Это весна");
//   }
//   if (month == 6 || month == 7 || month == 8) {
//     document.write("Это лето");
//   }
//   if (month == 9 || month == 10 || month == 11) {
//     document.write("Это осень");
//   }
// }
// months(11);

// Задание 9. Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).
//
// function returnNumber() {
//   var reverseNumber = " ";
//   var resultNumber = 0;
//   for (var number = 10; number <= 99; number++) {
//     if (number % 10 == 7 || number % 7 == 0) {
//       reverseNumber += String(number) + " ";
//     }
//   }
//   resultNumber = reverseNumber.split(" ").reverse().join(" ");
//   document.write(resultNumber);
// }
// returnNumber();

// Задание 10. Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители, а возвращает количество делителей.
//
// function getDividers() {
//   for (var i = 2; i <= 20; i++) {
//     for (var j = 1; j <= 20; j++) {
//       if (!(i % j)) {
//         document.writeln(j);
//       }
//     }
//     document.write(" делители для " + i + "<br>");
//   }
// }
// getDividers();

// Задание 11. Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.
//
// function getDividers(firstNumber, secondNumber) {
//   if (firstNumber < 2 || secondNumber > 20){
//      return document.write("Не соответствует условиям задачи от 2 до 20");
//   }
//   for (var i = firstNumber; i <= secondNumber; i++) {
//     for (var j = 1; j <= secondNumber; j++) {
//       if (!(i % j)) {
//         document.writeln(j);
//       }
//     }
//     document.write(" делители для " + i + "<br>");
//   }
// }
// getDividers(2,4);

// Задача 12. Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы измерения информации («Кб», «Мб», «Гб»),
// в size – количество таких единиц. Функция возвращает количество байт в size.
//
// function byteInSize(size, unit) {
//   var byteResult = 0;
//   var sizeType = String(unit);
//   if (unit == "Кб") {
//     byteResult = size * 1000;
//     return document.write("В " + size + " байтах " + " = " + byteResult + " килобайт");
//   } else if (unit == "Мб") {
//     byteResult = size * 1e+6;
//     return document.write("В " + size + " байтах " + " = " + byteResult + " килобайт");
//   } else if (unit == "Гб") {
//     byteResult = size * 1e+9;
//     return document.write("В " + size + " байтах " + " = " + byteResult + " килобайт");
//   }
// }
// byteInSize(200, "Гб")

// Задача 13. Создайте функцию, которая ищет наибольший общий делитель двух чисел.
//
// function getDividersTwoNumber(firstNumber, secondNumber) {
//   if (firstNumber == 0 || secondNumber == 0) {
//     return document.write("Числа должны быть больше 0");
//   }
//   var dividersResult = 0;
//   for (i = 1; i <= 100; i++) {
//     if (firstNumber % i == 0 && secondNumber % i == 0) {
//       dividersResult = i;
//     }
//   }
//   document.write("Самый большой делитель у чисел " + firstNumber + " и " + secondNumber + " это " + dividersResult);
// }
// getDividersTwoNumber(144, 360);

// Задача 15. Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n,
// будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).
//
// function words(number) {
//   if (number == 1) {
//     return document.write(number + " карандаш");
//   } else if (number == 2) {
//     return document.write(number + " карандаша");
//   } else if (number == 3) {
//     return document.write(number + " карандаша");
//   } else if (number == 4) {
//     return document.write(number + " карандаша");
//   } else if (number == 5) {
//     return document.write(number + " карандашей");
//   } else if (number == 6) {
//     return document.write(number + " карандашей");
//   } else if (number == 7) {
//     return document.write(number + " карандашей");
//   } else if (number == 8) {
//     return document.write(number + " карандашей");
//   } else if (number == 9) {
//     return document.write(number + " карандашей");
//   } else if (number == 10) {
//     return document.write(number + " карандашей");
//   }
//   if (number % 100 == 11) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 12) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 13) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 14) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 12) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 13) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 14) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 15) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 16) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 17) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 18) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 19) {
//     return document.write(number + " карандашей");
//   } else if (number % 100 == 20) {
//     return document.write(number + " карандашей");
//   }
//   if (number % 10 == 1) {
//     return document.write(number + " карандаш");
//   } else if (number % 10 == 2) {
//     return document.write(number + " карандаша");
//   } else if (number % 10 == 3) {
//     return document.write(number + " карандаша");
//   } else if (number % 10 == 4) {
//     return document.write(number + " карандаша");
//   } else if (number % 10 == 5) {
//     return document.write(number + " карандашей");
//   } else if (number % 10 == 6) {
//     return document.write(number + " карандашей");
//   } else if (number % 10 == 7) {
//     return document.write(number + " карандашей");
//   } else if (number % 10 == 8) {
//     return document.write(number + " карандашей");
//   } else if (number % 10 == 9) {
//     return document.write(number + " карандашей");
//   }
// }
// words(20);

// Задача 16. Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.
//
// function getNumber(number) {
//   var firstNumber = 1;
//   var secondNumber = 1;
//   for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//       firstNumber = i * j;
//       secondNumber = j * i;
//       if (firstNumber * firstNumber + secondNumber * secondNumber == number) {
//         return document.write("Число пользователя " + number + " получается " + firstNumber + " * " + firstNumber + " + " + secondNumber + " * " + secondNumber);
//       }
//     }
//   }
// }
// getNumber(50);
