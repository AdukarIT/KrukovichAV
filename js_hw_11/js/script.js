'use strict'

// Задача 1. Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

function User(name, surname) {
  this.name = name;
  this.surname = surname;
  this.getFullName = function() {
    return this.name + ' ' + this.surname;
  }
}

function Student(enterYear) {
  User.call(this);
  this.year = enterYear;
  this.getCource = function(){
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    return nowYear - enterYear;
  }
}

let user = new User("Петя","Петров");
let studentOne = new Student(2015);
console.log("Студент " + studentOne.getFullName.call(user) + " он студент " + studentOne.getCource() + " курса");


// Задача 2. Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), используя ООП подход.
// тут нужно было создать родительский класс и отнаследоваться в разные типы бургеров
function CaloricAndPrice() {
  this.caloric = {
    bread: 50,
    meat: 100,
    lettuce: 20,
    cheese: 30
  }
  this.price = {
    bread: 10,
    meat: 50,
    lettuce: 5,
    cheese: 10
  }
  this.getPrice = function() {
    let sumPrice = 0;
    for (var key in this.price) {
      sumPrice += this.price[key];
    }
    return sumPrice
  }
  this.getCaloric = function() {
    let sumCaloric = 0;
    for (var key in this.caloric) {
      sumCaloric += this.caloric[key];
    }
    return sumCaloric
  }
}

let cheeseburger = new CaloricAndPrice();
cheeseburger.getCaloric();
cheeseburger.getPrice();

let bigMac = new CaloricAndPrice();
bigMac.getCaloric();
bigMac.getPrice();

// Задача 3. Реализуйте на ООП программу-напоминалку. Как она должна работать: вы записываете в специальное поле какие-то события,
// о которых вам нужно напомнить и в нужное время вкладка браузера с этой программой должна напомнить об этом событии звуком (погуглите работу с аудио на js).

function Task(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
  
    this.writeTaskInDiv = function() {
      Task.call(this); // интересно, и зачем это?
      let inputUserTask = document.getElementById("userTask"),
          userTask = inputUserTask.value,
          taskText = document.createTextNode(userTask);
          inputUserTask.value = "";
      let formWrite = document.getElementById("user-formBlock"),
          div = document.createElement("div");
          div.className = "user-form__block-item";
          div.appendChild(taskText);
          formWrite.appendChild(div);
    }   
    
  this.setParamsAndPlaySound = function() {
    Task.call(this); // интересно, и зачем это?
      let userHours = hours.value;
      let userMinutes = minutes.value;
      let timer = setInterval(function() {
      let nowTime = new Date(),
          nowHours = nowTime.getHours(),
          nowMinutes = nowTime.getMinutes();
        if (userHours == nowHours && userMinutes == nowMinutes) {
            let audio = new Audio();
            audio.src = "audio/alarm.mp3";
            audio.autoplay = true;
        }
      },5000);
    } 
}

let startAps = document.getElementById("btn");
startAps.addEventListener("click", function() {
  let hours = document.getElementById("hours"),
      minutes = document.getElementById("minutes");

  let audio = new Audio();
      audio.src = "audio/write.mp3";
      audio.autoplay = true;

  let start = new Task(hours, minutes);
      start.setParamsAndPlaySound(); // не понятно, зачем эти методы, если они нужны сразу же, на создании
      start.writeTaskInDiv();
});




