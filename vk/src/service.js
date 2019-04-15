'use strict'

class Service {
	constructor() {}

	getDataServer(){
		$.ajax({
			url: "https://api.vk.com/method/friends.get?&access_token=020daf2a95c0788464e5683f0038ba4ca3bd1b62d37cca57d2cd94af15e34a0a383e20b3b14bafa23bdf9&v=V",
			method: "GET",
			dataType: "JSONP",
			success: function(data){
				console.log(data);
			}

		})
	}
}
export default Service;










