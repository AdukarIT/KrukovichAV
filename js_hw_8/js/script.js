'use strict'

// Задача 1. Дан элемент #elem. Добавьте ему класс "www"

let newDiv = document.createElement('div');
newDiv.className = "www";
document.body.appendChild(newDiv);

// Задача 2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

function removeClassName(doc, tag) {
  let foundTags = doc.getElementsByTagName(tag);
  for (var i = 0; i < foundTags.length; i++) {
    if (foundTags[i].className == "www") {
      foundTags[i].className = ""; // вы удалили все классы а не www
    }
  }
}
removeClassName(document.body, "div")

// Задача 3. Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега,
// а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

function recursiveSearchTags(doc, tag) {
  let result = doc.getElementsByTagName(tag);
  result = [].slice.call(result); // можно сразу возвращать результат
  return result
};
recursiveSearchTags(document.body, 'section');

// Задача 4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// Сделайте так, чтобы четные позиции имели красный фон.

let array = ["Петя", "Саша", "Артём", "Сергей", "Алексей", "Кирилл", "Олег"];

function addArrayItemInUl(arr) {
  let parent = document.body;
  let ul = document.createElement("ul");
  for (var i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(arr[i]);
    if (i % 2) {
      li.setAttribute("style", "background-color: red; width: 100px");
    }
    li.appendChild(text);
    ul.appendChild(li);
    parent.appendChild(ul);
  }
}
addArrayItemInUl(array);

// Задание 5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let searchDiv = document.querySelector(".task-five");
let nextDivUp = searchDiv.previousElementSibling;
let contentDivUp = nextDivUp.innerHTML;
let text = document.createTextNode("!!!!!!!");
let inserText = nextDivUp.appendChild(text);
document.body.insertBefore(nextDivUp, searchDiv);

// Задача 6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

function wrapInParagraph(doc, tegClass) { // tag
  let p = document.createElement("p");
  let searchClass = document.querySelector(tegClass);
  let nextTeg = searchClass.lastElementChild;
  let content = nextTeg.innerHTML;
  let arr = [];
  arr.push(content);
  for (var i = 0; i < arr.length; i++) {
    let text = document.createTextNode(arr[i]);
    p.appendChild(text);
    nextTeg.appendChild(p);
    searchClass.appendChild(nextTeg);
    doc.appendChild(searchClass);
  }
}
wrapInParagraph(document.body, ".task-six");

// Задача 7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.
// В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

function normalizeClassNames() {
  let searchClass = document.body.getElementsByTagName("*");
  for (var i = 0; i < searchClass.length; i++) {
    let item = searchClass[i];
    if (item.classList.length > 0) {
      for (var j = 0; j < item.classList.length; j++) {
        let tempClass = item.classList[j];
        let arrClassName = tempClass.split("");
        for (var k = 0; k < arrClassName.length; k++) {
          if (arrClassName[k] == "-") {
            delete arrClassName[k];
            let tempStr = arrClassName[k + 1];
            let tempSrtUpper = String(tempStr.toUpperCase());
            arrClassName[k + 1] = tempSrtUpper;
          }
        }
        let strClass = arrClassName.join("");
        item.className = strClass;
      }
    }
  }
}
normalizeClassNames();
