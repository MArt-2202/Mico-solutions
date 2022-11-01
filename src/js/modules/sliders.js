import Swiper, { Navigation } from 'swiper';

export default function sliders() {
	if (
		document.querySelector('.team__slider') &&
		document.querySelector('.team__slider .swiper-wrapper')?.children.length &&
		document.querySelector('.team__slider-wrapper .slider-btn--next') &&
		document.querySelector('.team__slider-wrapper .slider-btn--prev')
	) {
		new Swiper('.team__slider', {
			modules: [Navigation],
			on: {
				init() {
					if (document.querySelector('.team__slider-wrapper')) {
						document.querySelector('.team__slider-wrapper').classList.remove('style-7');
					}
				},
			},
			loop: true,
			slidesPerView: 4,
			spaceBetween: 70,
			forceToAxis: true,
			navigation: {
				nextEl: '.team__slider-wrapper .slider-btn--next',
				prevEl: '.team__slider-wrapper .slider-btn--prev',
			},
			breakpoints: {
				1230: { spaceBetween: 70 },
				1024: { spaceBetween: 40 },
				768: { slidesPerView: 3, spaceBetween: 30 },
				576: { slidesPerView: 2, spaceBetween: 20 },
				415: { slidesPerView: 2, spaceBetween: 20 },
				360: { slidesPerView: 2, spaceBetween: 15 },
				300: { slidesPerView: 2, spaceBetween: 15 },
			},
		});
	} else if (document.querySelector('.team__slider-wrapper')) {
		document.querySelector('.team__slider-wrapper').classList.remove('style-7');

		if (document.querySelector('.team__slider-wrapper .slider-btn--next')) {
			document.querySelector('.team__slider-wrapper .slider-btn--next').remove();
		}
		if (document.querySelector('.team__slider-wrapper .slider-btn--prev')) {
			document.querySelector('.team__slider-wrapper .slider-btn--prev').remove();
		}
	}
}
