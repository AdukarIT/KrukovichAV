'use strict'

// Задача 1. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let input = document.getElementById("inputText");
let butClone = document.getElementById("buttonClone");
butClone.addEventListener("click", function() {
  let clone = input.cloneNode();
  document.body.appendChild(clone);
});

// Задача 2. Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered,
// при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

let tableChangeClass = document.getElementById("table");
tableChangeClass.addEventListener("click", function() {
    if (tableChangeClass.className == "bordered") {
      tableChangeClass.className = "striped";
    } else if (tableChangeClass.className == "striped") {
      tableChangeClass.className = "highlight";
    } else {
      tableChangeClass.className = "bordered";
    }
});

// Задача 3. Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered,
// при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

let table = document.getElementById("table__two");
let borderedClassTable = document.getElementById("table_bordered");
let stripedClassTable = document.getElementById("table_striped");
let higlightClassTable = document.getElementById("table_highlight");

borderedClassTable.addEventListener("click", function() {
  table.className = "bordered";
});
stripedClassTable.addEventListener("click", function() {
  table.className = "striped";
});
higlightClassTable.addEventListener("click", function() {
  table.className = "higlight"
});

// Задача 4. Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст.
// Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

let buttonShowValue = document.getElementById("buttonAlert");
buttonShowValue.addEventListener("click", function() {
  alert(this.value);
});
let disableButton = document.getElementById("disableFirstButton");
  disableButton.addEventListener("click", function() {
    buttonShowValue.disable = "true";
  });

// Задача 5. Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.

let parentDiv = document.getElementsByClassName("container");
 let className = [].slice.call(parentDiv);
  className[0].addEventListener("click", function(event) {
    alert(event.target);
  });

// Задача 6. Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия:
// при наведении мыши на картинку, изображение будет заменяться другим изображением.
// При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.

let galleryImgHidden = document.getElementById("imgHidden");
  galleryImgHidden.addEventListener("mouseover", function() {
    galleryImgHidden.className = "gallery__second-img_hidden";
  });
  galleryImgHidden.addEventListener("mouseout", function() {
    galleryImgHidden.className = "gallery__second-img";
  });

// Задача 7. Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом.
// Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.

let imgMove = document.getElementById("contentImg");
let backColor = document.getElementById("wrapper");
imgMove.addEventListener("click", function(event) {
  imgMove.className = "content__img_move";
  backColor.className = "dws-wrapper_show"
})
