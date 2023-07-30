"use strict";

angular.module("motoSmarApp").config([
	"$routeProvider",
	function config($routeProvider) {
		$routeProvider
			.when("/", {
				template: "<home-page></home-page>",
			})

			.when("/chat/", {
				template: "<chat-page></chat-page>",
			})

			.when("/chat/:chatId", {
				template: "<chat-details-page></chat-details-page>",
			})

			.otherwise({ redirectTo: "/" });
	},
]);
