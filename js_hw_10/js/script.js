'use strict'

// Задача 1. Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: имя (id="name") и минут (id="minutes").
// Используйте проверку на оставление поля пустым ("") и правильного формата. заполнения числового поля (isNaN).

function validateForm() {
  let userForm = document.forms.userForm;
  let itemInForm = userForm.elements;
  let arrayItemInForm = [].slice.call(itemInForm);
  arrayItemInForm.forEach(function(item) {
    if (item.id == "name") {
      if (item.value == "") {
        alert(item.previousSibling.data + " Не должно быть пустое");
      } else if (!(item.value.match(/[^0-9]/g))) {
        alert(item.previousSibling.data + " Не должно содержать цифр");
      }
    }
    if (item.id == "minutes") {
      if (item.value == "") {
        alert(item.previousSibling.data + " Не должно быть пустое");
      } else if (!(item.value.match(/[^a-z]/g))) {
        alert(item.previousSibling.data + " Не должно содержать букв");
      }
    }
  });
} // это всё нужно было повесить на обработчик, конечно

// Задача 2. Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них происходит передача данных содержимого текстового поля
// по электронной почте (action="mailto:address@domen.domen"), при нажатии другой – происходит очистка текстового поля.

function validText() {
  let form = document.getElementsByClassName("task2");
  let itemInForm = form[0].elements;
  let arrayItemInForm = [].slice.call(itemInForm);
  arrayItemInForm.forEach(function(item) {
    if (item.type == "text") {
      if (item.value == "") {
        alert("Вы хотите отправаить пустое сообщение!!!");
      }
    }
  });
}

function clearInputText() {
  let form = document.getElementsByClassName("task2");
  let itemInForm = form[0].elements;
  let arrayItemInForm = [].slice.call(itemInForm);
  arrayItemInForm.forEach(function(item) {
    if (item.type == "text") {
      item.value = "";
    }
  });
}
clearInputText(); // где тут отправка-то?

// Задача 3. Напишите универсальную функцию для прохождения по полям формы с возможностью проверки введенных данных,
// для тектовых полей - на текст, для имейла - на имейл и тд.

function checkInputInForm() {
  let form = document.getElementsByClassName("task3");
  let itemInForm = form[0].elements;
  let arrayItemInForm = [].slice.call(itemInForm);
  for (var i = 0; i < arrayItemInForm.length; i++) {
    if (arrayItemInForm[i].type == "text") {
      if (!(arrayItemInForm[i].value.match(/[^0-9]/g)) || arrayItemInForm[i].value == "") {
        alert("Поле " + arrayItemInForm[i].attributes[1].nodeValue + " Заполнено не верно! или пустое!");
        break;
      }
    } else if (arrayItemInForm[i].type == "email") {
      if (!(arrayItemInForm[i].value.match(/\@/g))) {
        alert("Поле " + arrayItemInForm[i].attributes[1].nodeValue + " Заполнено не верно! или пустое!");
        break
      }
    } else if (arrayItemInForm[i].type == "tel") {
      if (!(arrayItemInForm[i].value.match(/[^a-z]/g))) {
        alert("Поле " + arrayItemInForm[i].attributes[1].nodeValue + " Заполнено не верно! или пустое!");
        break;
      }
    }
  }
} // проверочные регулярки слабоваты

// Задача 4. Поверьте написанную ранее функция на обработку форы регистрации, если поле не проходит валидацию - подсветите его,
// если все поля валидные - выведите приветственное сообщение.

function checkInputInFormTwo() {
  let form = document.getElementsByClassName("task4");
  let itemInForm = form[0].elements;
  let arrayItemInForm = [].slice.call(itemInForm);
  let count = 0;
  for (var i = 0; i < arrayItemInForm.length; i++) {
    if (arrayItemInForm[i].type == "text") {
      count++;
      if (!(arrayItemInForm[i].value.match(/[^0-9]/g)) || arrayItemInForm[i].value == "") {
        let text = document.createTextNode("Поле пустое или содержит ошибки");
        document.body.appendChild(text);
        arrayItemInForm[i].setAttribute("style", "border-color: red");
        break;
      }
    } else if (arrayItemInForm[i].type == "email") {
      count++;
      if (!(arrayItemInForm[i].value.match(/\@/g)) || arrayItemInForm[i].value == "") {
        let text = document.createTextNode("Поле должно содержать @");
        document.body.appendChild(text);
        arrayItemInForm[i].setAttribute("style", "border-color: red");
        break;
      }
    } else if (arrayItemInForm[i].type == "password") {
      count++;
      if (arrayItemInForm[i].value == "") {
        arrayItemInForm[i].setAttribute("style", "border-color: red");
        break;
      }
    } else if (arrayItemInForm[i].type == "tel") {
      count++;
      if (!(arrayItemInForm[i].value.match((/^\+37529\-[1-9][1-9][1-9]\-[1-9][1-9]\-[1-9][1-9]/g))) || arrayItemInForm[i].value == "") {
        let text = document.createTextNode("Формат поля +37529-333-22-11");
        document.body.appendChild(text);
        arrayItemInForm[i].setAttribute("style", "border-color: red");
        break;
      }
    } else if (count == arrayItemInForm.length - 1) {
      alert("УРА!!!");
    }
  }
} // много дублирований. код плохо оформлен, трудно читать. 
// подумайте над оптимизацией

// Задача 6. С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.

let string = "10.44 am";

function checkStringOnTime() {
  let regexp = new RegExp(/^[0-9]|1[0-2]\.[0-5][0-9]\s[ap]\m/g); // 0.60 zz
  return regexp.test(string);
}
checkStringOnTime(string);

// Задача 7. Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.

let str = "dsf xxx xxx xxx sd";

function deleteSearchStr() { // нужно передать аргумент
  let regexp = new RegExp(/\x{3}/);
  let result = str.replace(regexp, "").replace(regexp, " "); // а если будет "dsf xxx xxx xxx xxx sd"?
  console.log(result);
}
deleteSearchStr(str); // "dsf    xxx sd"
