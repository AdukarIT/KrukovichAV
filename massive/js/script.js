'use strict'

function getRandomArray(len) { // массив с целыми числами
  var mass = [];
  for (var i = 0; i < len; i++) {
    var num = Math.random() * 10;
    num = Math.round(num);
    mass[i] = num;
  }
  return mass;
}

function sortArray(a, b) { // функция для сортировки массива
  return a - b;
}

// Задача 2. Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

function middleNumber() {
  let mass = getRandomArray(10);
  let sumNumberMass = 0;
  let middleNumberMass = 0;
  for (var i = 0; i < mass.length; i++) {
    sumNumberMass += mass[i];
  }
  document.write("Полученный случайный массив из " + mass.length + " равен " + mass + "<br>");
  middleNumberMass = sumNumberMass / mass.length;
  document.write("Среднее значание элементов массива " + middleNumberMass + "<br>");
  document.write("Элементы массива которые больше среднего значения ");
  for (var i = 0; i < mass.length; i++){
    if (mass[i] > middleNumberMass){
      document.writeln(mass[i]);
    }
  }
}
middleNumber();

//Задача 3. Найдите два наименьших элемента массива.

function getTwoLowItemArray(){
	var mass = getRandomArray(10);
	var tempMass = [];
	var tempMassFirstTwoNumber = [];
	document.write("random array " + mass + "<br>");
	tempMass = mass.sort(sortArray);
	document.writeln("get sort mass " + mass + "<br>");
	tempMassFirstTwoNumber = mass.slice(0,2);
	document.writeln("two low item in mass " + tempMassFirstTwoNumber);
	}
getTwoLowItemArray();

// Задание 4. Удалите из массива все элементы, меньшие 0.3.
// Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.

function removeItemArray() {
  var mass = getRandomArray(5);
  var newMass = [];
  for (var i = 0; i < mass.length; i++) {
    if (mass[i] < 3) {
      mass.splice(i,1);
      mass.push(0);
    }
  }
  document.write(mass);
}
removeItemArray();

// Задача 5. Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2,
// второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.

function sumTwoRandomArray() {
  var firstMass = getRandomArray(5);
  var secondMass = getRandomArray(5);
  var resultMass = [];
  for (var i = 0; i < firstMass.length; i++){
      resultMass.push(firstMass[i] + secondMass[length - (i + 1)]);
    }
    document.write(resultMass);
  }
sumTwoRandomArray();

// Задача 6. Отсортируйте массив методом пузырька.

function sortArray() {
  var mass = getRandomArray(5);
  var temp = 0;
  document.write("случайный массив " + mass + "<br>");
  for (var i = mass.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (mass[j] > mass[j + 1]) {
        temp = mass[j];``
        mass[j] = mass[j + 1];
        mass[j + 1] = temp;
      }
    }
  }
  document.write("Отсортированный массив " + mass);
}
sortArray();

// Задача 7. Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001).
// Если такая пара (или такие пары) есть, выведите их в консоль.
// так как элементы массива округлены ищет числа ближе к 10

function sumTwoItem() {
  var mass = getRandomArray(5);
  document.write(mass + " случайный массив <br>");
  for (var i = 0; i < mass.length; i++) {
    for (var j = 0; j < mass.length; j++) {
      if (mass[i] + mass[j] == 9 || mass[i] + mass[j] == 11) {
        return document.write(mass[i] + "," + mass[j]);
      }
    }
  }
}
sumTwoItem();

// Задание 8. Создайте массив той же длины, что исходный.
// На месте самого большого числа исходного массива в новом вставьте число 1, на месте второго по величине – 2 и так далее.

function replaceHigthNumber() {
  var mass = getRandomArray(4),
    number = 1,
    count = 0;
  document.write(mass + "<br>");
  while (count < mass.length) {
    var tempIndex = 0;
    for (var i = 0; i < mass.length; i++) {
      if (mass[i] > mass[0]) {
        tempIndex = i;
      }
    }
    mass.splice(tempIndex, 1, number);
    number += 1;
    count++;
  }
  document.write(mass);
}
replaceHigthNumber();

// Задание 9. Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента).
// Элементы, которые после сдвига "уходят" за пределы его длины, переместите на освободившиеся первые Х позиций.

function moveArrayRight(arrayLength, arrayMoveNumber) {
  var mass = getRandomArray(arrayLength);
  if (arrayMoveNumber > arrayLength) {
    document.write("ERROR");
  }
  document.write("Случайный массив <br>");
  document.write(mass + "<br>");
  for (var i = 0; i < arrayMoveNumber; i++) {
    mass.unshift(mass[mass.length - 1]);
    mass.pop();
  }
  document.write("Сдвинутый массив на " + arrayMoveNumber + "<br>");
  document.write(mass);
}
moveArrayRight(6, 3);