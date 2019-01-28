// Задание 1. В доме 5 подъездов по 20 квартир каждый.
// Получите от пользователя номер квартиры и взамен выдайте в консоль номер подъезда.
// Учитывайте, что пользователь может ввести число меньше 1 или больше 100.
//
var apartmentNumber = prompt("Введите номер квартиры от 1 до 100");
if ( apartmentNumber < 1 || apartmentNumber > 100) {
  alert("Введите правильную квартиру");
} else {
  if ( apartmentNumber <= 20) {
    alert("Это первый подъезд");
  }
  if ( apartmentNumber <= 40 && apartmentNumber > 20 ) {
    alert("Это второй подъезд");
  }
  if ( apartmentNumber <= 60 && apartmentNumber > 40 ) {
    alert("Это третий подъезд");
  }
  if ( apartmentNumber <= 80 && apartmentNumber > 60 ) {
    alert("Это четвертый подъезд");
  }
  if ( apartmentNumber <= 100 && apartmentNumber > 80 ) {
    alert("Это пятый подъезд");
  }
}

// Задание 2. Получите от пользователя строку с названием марки автомобиля.
// Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.)
// и выдавать в консоль введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США").
// Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".
//
var carName = prompt("Введите марку машины: ");
switch (carName) {
  case "bmw":
    alert(carName + " - страна происхождения Германия");
    break;
  case "ford":
    alert(carName + " - страна происхождения Америка");
    break;
  case "peugeot":
    alert(carName + " - страна происхождения Франция");
    break;
  case "audi":
    alert(carName + " - страна происхождения Германия");
    break;
  case "vw":
    alert(carName + " - страна происхождения Германия");
    break;
  case "mazda":
    alert(carName + " - страна происхождения Япония");
    break;
  default:
    alert("Страна происхождения неизвестна");
}

// Задание 3. Пользователь вводит год. Определите, является ли этот год високосным.
//
var year = prompt("Введите год: ");
if (year % 4 == 0 && year % 100 !== 0) {
  document.write("Да этот год " + year + " високосный");
} else if (year % 400 == 0) {
  document.write("Да этот год " + year + " високосный");
} else {
  alert("Этот год " + year + " НЕТ!");
}

// две проверки по висакосному году нужно объединить

// Задание 4. Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа. Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70
//
var userNumber = prompt("Введите число от 1 до 20: ");
if (userNumber < 1 || userNumber > 20) {
  alert("Число должно быть от 1 до 20");
}
for (var i = 1; i <= 10; i++) {
  var result = userNumber * i;
  document.writeln("Ваше число " + userNumber + " умноженное на " + i + " = " + result + "<br>");
}

// Задание 5. Выведите в консоль сумму всех нечётных чисел от 1 до 50. Дополнительно: решите эту задачу, используя оператор continue.
//
var a = 0;
var sum = 0;
for (var i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    a = i;
    sum = sum + a;
  }
}
document.write(sum);

// Задание 6. Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.
//
var a = 0;
var b = 1;
document.writeln(a);
document.writeln(b); // тут не место
for (i = 3; i <= 15; i++) {
  c = a + b; // объявите переменную и дайте читаемые имена
  a = b;
  b = c;
  document.writeln(c);
}

// Задание 7. Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":
//
var a = "#"
var b = "_"
for (i = 1; i <= 4; i++) {
  document.write(a + b);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(b + a);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(a + b);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(b + a);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(a + b);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(b + a);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(a + b);
}
document.write("<br>");
for (i = 1; i <= 4; i++) {
  document.write(b + a);
}

//сложно, перепишите на консоль
