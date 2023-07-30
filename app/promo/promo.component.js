"use strict";

// Register `promoComponent` component, along with its associated controller and template
angular.module("promo").component("promoComponent", {
	templateUrl: "promo/promo.template.html",
	controllerAs: "vm",
	controller: [
		"promosServices",
		function promoController(promosServices) {
			const mv = this;

			mv.promos = [];
			mv.getNewPrice = getNewPrice;

			mv.$onInit = function () {
				promosServices.query().$promise.then(function (promos) {
					mv.promos = promos;
				});
			};

			function getNewPrice({ price, discount }) {
				return price - price * (discount / 100);
			}
		},
	],
});
