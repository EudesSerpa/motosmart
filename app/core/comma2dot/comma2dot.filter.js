"use strict";

angular.module("core").filter("comma2dot", [
	function () {
		return function (input) {
			return input ? input.toString().trim().replace(",", ".") : null;
		};
	},
]);
