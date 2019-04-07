"use strict"

$("document").ready(function() {

	$("#phone").mask("+375(99) 999-99-99");

	$("#btnStart").click(function() {
		$(".container-form_hiden").addClass("container-form_show");
		$("#btnStart").css("visibility", "hidden");
	});
	
	$("#userForm").validate({
		rules: {
			userName: {
				minlength: 3,
				required: true,
			}
		},
		messages: {
			userName: {
				required: "Введите имя для регистрации",
				minlength: "Имя должен быть не короче 3 символов"
			}
		},
	});

	$("#writeMessage").click(function(event) {
		event.preventDefault();
		$("#del").css("display", "block");
		let userNameTmp = $("#name").val();
		let userPhone = $("#phone").val();
		let userMessage = $("#text").val();
																											// выводим имя в правильной форме 
		let userNameStr = userNameTmp.toLowerCase(),
				userNameArray = userNameStr.split(""),
				firstChar = userNameArray[0].toUpperCase();
		userNameArray.splice(0,1);
		userNameArray.unshift(firstChar);
		let userName = userNameArray.join("");
																											// создаем объект Date, таблицу и заполняем ее 
		let date = new Date();

		let idTmp = Math.random() * 10; 
		let id = Math.round(idTmp);

		let table = document.getElementById("tableBody"),
				tr = document.createElement("tr"),
				check = document.createElement("input"),
				td = document.createElement("td");
				check.type = "checkbox";
				tr.classList.add("userList");
				td.classList.add("userItem");
				td.setAttribute("id", "" + id + "");
				td.append(check);
				td.append(userName);
				tr.append(td);
				td = document.createElement("td");
				td.append(userPhone);
				tr.append(td);
				td = document.createElement("td");
				td.append(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());
				tr.append(td);
				td = document.createElement("td");
				td.append(userMessage);
				tr.append(td);
				table.append(tr);
	});
																	// очищаем input и прячем форму
	$("#cancel").click(function() {
		$("#name").val("");
		$("#phone").val("");
		$("#text").val("");
		$(".container-form_hiden").removeClass("container-form_show");
		$("#btnStart").css("visibility", "visible");
	});
																	// удаляем поле по активному checkbox
	$("#del").click(function() {
		let itemTable = document.getElementsByTagName("table");
		let itemTableArray = [].slice.call(itemTable[0].rows);
		itemTableArray.forEach(element => {
			if (element.children[0].childNodes[0].checked == true) {
				element.remove();
			}
		});
	});
});








