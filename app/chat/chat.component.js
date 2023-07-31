"use strict";

// Register `chatComponent` component, along with its associated controller and template
angular.module("chat").component("chatComponent", {
	templateUrl: "chat/chat.template.html",
	controllerAs: "vm",
	controller: [
		"chatsServices",
		function chatController(chatsServices) {
			const mv = this;

			mv.chats = [];
			mv.getLastMessage = getLastMessage;

			mv.$onInit = function () {
				chatsServices.query().$promise.then(function (chats) {
					mv.chats = chats;
				});
			};

			function getLastMessage(messages) {
				return messages.at(-1);
			}
		},
	],
});
