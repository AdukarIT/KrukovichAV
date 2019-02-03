'use strict'

// Задание 1. Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет,
// есть ли в этом объекте свойство с именем, равным этой строке.

var human = {
    firstName: "Alexey",
    secondName: "Krukovich",
    height: 198
};

function searchStringinObject(obj, str){
  if (str in obj) {
    return document.write("Такое свойство есть! " + obj[str]);
  } else {
    return document.write("Такого свойства нет!");
  }
}
searchStringinObject(human, "secondName")

// Задание 2. Создайте объект для хранения своего любимого кулинарного рецепта.
// Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта),
// а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает,
// сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.

var recipe = {
  name: "pies",
  portion: 1,
  meal: {
    name: "meal",
    count: 2,
    container: "glass"
  },
  milk: {
    name: "milk",
    count: 1.5,
    container: "glass"
  },
  yeast: {
    name: "yeast",
    count: 15,
    container: "grams"
  }
};

function getRecipeCount(recipe, portionCount) {
  var portionCount = prompt("Введите количество порций");
  if (portionCount >= recipe.portion) {
    document.write("Вам понадобиться на " + portionCount + " " + recipe.name + "<br>");
    document.write(recipe.meal.name + " " + recipe.meal.count * portionCount + " " + recipe.meal.container + "<br>");
    document.write(recipe.milk.name + " " + recipe.milk.count * portionCount + " " + recipe.milk.container + "<br>");
    document.write(recipe.yeast.name + " " + recipe.yeast.count * portionCount + " " + recipe.yeast.container + "<br>");
  }
}
getRecipeCount(recipe, 2);

// Задание 3. Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

var cylinder = {
  radius: 30,
  height: 200,
  volumeCylinder: function(){
    return 3.14 * (this.radius**2) * this.height;
  }
};
document.write("Объём цилиндра с радиусом " + cylinder.radius + " и высотой " + cylinder.height + " равен " + cylinder.volumeCylinder());

// Задание 4.

var penguin = {
  name: "Duke",
  author: "Mort Walker",
  notes: "One of the passengers on board of Boner's ark",
  canFly: true,
  sayHello: function() {
    return document.write(" Приветствую тебя, я пингвин по имени " + penguin.name);
  },
  fly: function() {
    if (!penguin.canFly) {
      return document.write(" Я не могу летать!!!");
    } else {
      return document.write(" Я могу летать!!!");
    }
  }
};
penguin.sayHello();
penguin.fly();
