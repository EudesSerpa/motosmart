"use strict";

// Register `promoComponent` component, along with its associated controller and template
angular.module("promo").component("promoComponent", {
	templateUrl: "promo/promo.template.html",
	controllerAs: "vm",
	controller: [
		"promosServices",
		function promoController(promosServices) {
			const vm = this;

			vm.promos = [];
			vm.getNewPrice = getNewPrice;

			vm.$onInit = function () {
				promosServices.query().$promise.then(function (promos) {
					vm.promos = promos;
				});
			};

			function getNewPrice({ price, discount }) {
				return price - price * (discount / 100);
			}
		},
	],
});
