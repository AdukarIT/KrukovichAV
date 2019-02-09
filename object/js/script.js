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
    return console.log("Такое свойство есть! " + obj[str]); // разве в условии был консоль лог?
  } else {                                                  // если не было, то этот код нужно оптимизировать
    return console.log("Такого свойства нет!");
  }
}
searchStringinObject(human, "secondName")

// Задание 2. Создайте объект для хранения своего любимого кулинарного рецепта.
// Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта),
// а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает,
// сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.

var recipe = {
  name: "pies",
  portion: 1, // 1 не больше одного
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
    console.log("Вам понадобиться на " + portionCount + " " + recipe.name);
    console.log(recipe.meal.name + " " + recipe.meal.count * portionCount + " " + recipe.meal.container);
    console.log(recipe.milk.name + " " + recipe.milk.count * portionCount + " " + recipe.milk.container);
    console.log(recipe.yeast.name + " " + recipe.yeast.count * portionCount + " " + recipe.yeast.container);
  }
}
getRecipeCount(recipe, 2);

// Задание 3. Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).

var cylinder = {
  radius: 30,
  height: 200,
  volumeCylinder: function(){ // вы создали объект с методом, а не добавили метод
    return 3.14 * (this.radius**2) * this.height;
  }
};
console.log("Объём цилиндра с радиусом " + cylinder.radius + " и высотой " + cylinder.height + " равен " + cylinder.volumeCylinder());

// Задание 4.

var penguin = {
  name: "Duke",
  author: "Mort Walker",
  notes: "One of the passengers on board of Boner's ark",
  canFly: true,
  sayHello: function() { // тут вроде тоже методы нужно было добавить
    return console.log(" Приветствую тебя, я пингвин по имени " + penguin.name);
  },
  fly: function() { 
    if (!penguin.canFly) {
      return console.log(" Я не могу летать!!!");
    } else {
      return console.log(" Я могу летать!!!");
    }
  }
};
penguin.sayHello();
penguin.fly();
