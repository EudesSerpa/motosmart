"use strict";

angular.module("core.postsServices").factory("postsServices", [
	"$resource",
	function ($resource) {
		return $resource(
			"data/posts.json",
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
