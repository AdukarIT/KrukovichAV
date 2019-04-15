import Service from "../src/service";

class Controller {
	constructor(){
		let service = new Service();
		let startApp = document.getElementById("start");
			startApp.addEventListener("click", function(){
			service.getDataServer();
		});
	}
}

export default Controller;