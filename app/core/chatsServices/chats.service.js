"use strict";

angular.module("core.chatsServices").factory("chatsServices", [
	"$resource",
	function ($resource) {
		return $resource(
			"data/chats.json",
			{},
			{
				query: {
					method: "GET",
					isArray: true,
				},
			}
		);
	},
]);
