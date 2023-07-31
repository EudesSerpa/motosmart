"use strict";

// Register `postComponent` component, along with its associated controller and template
angular.module("post").component("postComponent", {
	templateUrl: "post/post.template.html",
	controllerAs: "vm",
	controller: [
		"postsServices",
		function PostController(postsServices) {
			const vm = this;

			const ROLES = {
				CRACK: "crack",
				ALIADO: "aliado",
				USUARIO: "usuario",
			};

			vm.posts = [];
			vm.followToggle = followToggle;
			vm.likeToggle = likeToggle;
			vm.user = {
				name: "Eudes Serpa",
				role: ROLES.CRACK,
				avatar: "assets/images/user.png",
				moto: "assets/images/user-moto.png",
			};

			vm.$onInit = function () {
				postsServices.query().$promise.then(function (posts) {
					vm.posts = posts;
				});
			};

			function getUser(id) {
				return vm.posts.find(({ userData }) => userData.id === id);
			}

			function getPost(id) {
				return vm.posts.find(({ postData }) => postData.id === id);
			}

			function followToggle(userId) {
				const user = getUser(userId);
				if (!user) return;

				user.userData.followed = !user.userData.followed;
			}

			function likeToggle(postId) {
				const post = getPost(postId);
				if (!post) return;

				post.postData.liked = !post.postData.liked;
			}

			// Materialize Carousel JS init
			setTimeout(function () {
				vm.$apply = (function () {
					const elems = document.querySelectorAll(".carousel");

					M.Carousel.init(elems, {
						dist: 0,
						fullWidth: true,
						indicators: true,
						padding: 0,
					});
				})();
			}, 500);
		},
	],
});
