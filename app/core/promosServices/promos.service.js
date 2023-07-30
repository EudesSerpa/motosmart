"use strict";

angular.module("core.promosServices").factory("promosServices", [
	"$resource",
	function ($resource) {
		return $resource(
			"data/promos.json",
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
