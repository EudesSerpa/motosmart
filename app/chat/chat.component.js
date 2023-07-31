"use strict";

// Register `chatComponent` component, along with its associated controller and template
angular.module("chat").component("chatComponent", {
	templateUrl: "chat/chat.template.html",
	bindings: {
		filter: "<",
	},
	controllerAs: "vm",
	controller: [
		"chatsServices",
		function chatController(chatsServices) {
			const vm = this;

			vm.chats = [];
			vm.getLastMessage = getLastMessage;

			vm.$onInit = function () {
				chatsServices.query().$promise.then(function (chats) {
					vm.chats = chats;
				});
			};

			function getLastMessage(messages) {
				return messages.at(-1);
			}
		},
	],
});
