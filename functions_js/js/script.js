// Задание 1. Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
//
function minNumber(a,b,c){
  if (a < b && a < c) {
    document.write(a);
  } else if (b < a && b < c){
    document.write(b);
  } else if (c < a && c < b){
    document.write(c);
  }
}
minNumber(100,15,45);

// Задание 2. Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут,
// а возвращает соответствующее им количество секунд.
//
function secondsCount(day, hour, minutes) {
  var searchSecondsInDay = ((day * 24) * 60) * 60;
  document.write(searchSecondsInDay);
  var searchSecondsInHour = (hour * 60) * 60;
  document.write(" " + searchSecondsInHour);
  var searchSecondsInMinutes = minutes * 60;
  document.write(" " + searchSecondsInMinutes);
}
secondsCount(5,2,33);

// Задание 3. Напишите рекурсивную функцию для подсчёта факториала числа.
//
function factorialN(number, n) {
  if (n == 1)
    return number;
  return number * factorialN(number, n - 1);
}

console.log(factorialN(2, 6));

// Задание 4. Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.
// Например, если на вход функция получает 1234, вернуть она должна 4321.
//
function numberRevers(num){
  var string = String(num);
  var reverseResult  = string.split("").reverse().join("");
  var reverseNumber = Number(reverseResult);
  document.write(reverseNumber);
}

numberRevers(456123);

function reverseNumber(a) {
  if (a < 10) {
    return String(a);
  } else {
    return String(a % 10 + reverseNumber((a - (a % 10)) / 10));
  }
}

console.log(reverseNumber(345));

// Задание 5. Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c,
// возвращать – количество корней. Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные не нужны!
// Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().
//
function square(a, b, c) {
  var discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    document.write("Корней нет")
  }
  else if (discriminant == 0) {
      document.write("Один корень");
      document.write((-b + Math.sqrt(discriminant)) / 2 * a);

  }
  else if (discriminant > 0) {
    document.write("Два корня")
    document.write("<br>" + (-b + Math.sqrt(discriminant)) / 2 * a);
    document.write("<br>" + (-b - Math.sqrt(discriminant)) / 2 * a);
  }
}

square(1,5,2);
