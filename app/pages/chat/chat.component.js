"use strict";

// Register `chat` component, along with its associated controller and template
angular.module("chatPage").component("chatPage", {
	templateUrl: "pages/chat/chat.template.html",
	controllerAs: "vm",
	controller: [function PhoneListController() {}],
});
