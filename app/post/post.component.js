"use strict";

// Register `postComponent` component, along with its associated controller and template
angular.module("post").component("postComponent", {
	templateUrl: "post/post.template.html",
	controllerAs: "vm",
	controller: [
		"postsServices",
		function PhoneDetailController(postsServices) {
			const mv = this;

			const ROLES = {
				CRACK: "crack",
				ALIADO: "aliado",
				USUARIO: "usuario",
			};

			mv.user = {
				name: "Eudes Serpa",
				role: ROLES.CRACK,
				avatar: "assets/images/user.png",
				moto: "assets/images/user-moto.png",
			};

			mv.posts = postsServices.query();

			function getUser(id) {
				return mv.posts.find(({ userData }) => userData.id === id);
			}

			function getPost(id) {
				return mv.posts.find(({ postData }) => postData.id === id);
			}

			mv.followToggle = function followToggle(userId) {
				const user = getUser(userId);
				if (!user) return;

				user.userData.followed = !user.userData.followed;
			};

			mv.likeToggle = function likeToggle(postId) {
				const post = getPost(postId);
				if (!post) return;

				post.postData.liked = !post.postData.liked;
			};

			// Materialize Carousel JS init
			const elems = document.querySelectorAll(".carousel");
			M.Carousel.init(elems, {
				fullWidth: true,
				indicators: true,
				padding: 0,
			});
		},
	],
});
