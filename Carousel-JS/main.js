(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function () {
		$('.featured-carousel').owlCarousel({
			autoplay: false,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					loop: true,
					items: 1
				},
				600: {
					loop: true,
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});

	};
	carousel();

})(jQuery);