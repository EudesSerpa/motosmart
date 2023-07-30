"use strict";

angular.module("motoSmarApp").config([
	"$routeProvider",
	function config($routeProvider) {
		$routeProvider
			.when("/", {
				template: "<home-page></home-page>",
			})

			// .when("/chat/:chatId", {
			// 	template: "<chat></chat>",
			// })

			// .when("/chat/:chatId", {
			// 	template: "<chat-detail></chat-detail>",
			// })

			.otherwise({ redirectTo: "/" });
	},
]);
