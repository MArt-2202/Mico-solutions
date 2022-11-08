'use strict';

import debounce from './modules/debounce';
import nodeStyles from './modules/nodeStyles';
import blockPosition from './modules/blockPosition';
import tableWrapper from './modules/tableWrapper';
import toggleContent from './modules/toggleContent';
import scrollAnimateNodes from './modules/scrollAnimateNodes';
import sliders from './modules/sliders';
import formValidation from './modules/formValidation';
import sendFormData from './modules/sendFormData';
import animatedBackground from './modules/animatedBackground';

if ('ontouchstart' in document.documentElement) {
	document.body.classList.add('touchdevice');
}

function isMobile(agent) {
	if (agent === void 0) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent);
}

if (isMobile()) {
	document.body.classList.remove('desktop-user-agent');
	document.body.classList.add('mobile-user-agent');
} else {
	document.body.classList.remove('mobile-user-agent');
	document.body.classList.add('desktop-user-agent');
}

document.addEventListener('DOMContentLoaded', () => {
	tableWrapper();
	toggleContent();
	sliders();
	nodeStyles();
	scrollAnimateNodes({
		node: 'h1, h2, h3, h4, .disqus__content em, .disqus-dublicate__content em',
		animatedClass: 'flipInX',
	});
	scrollAnimateNodes({
		node: '.request',
		animatedClass: 'flipInY',
	});
	scrollAnimateNodes({
		node: '.our-advantages__list li, .our-works__list li, .disqus__list li, .disqus__form div',
		animatedClass: 'slideInUp',
	});
	scrollAnimateNodes({
		node: '.top-section .btn, .s_ocial li, .contacts__list li, .services-list-1 li, .services-list-2 li, .services-list-3 li, .services__img, .info__img picture, .info p, .disqus__content strong, .list-1>div',
		animatedClass: 'fadeIn',
	});
	formValidation({
		container: '.request',
		form: '#request-form',
		input: '#request-form__phone',
		submitBtn: '#request-form__submit',
		sucessClass: 'success',
		valid: 'data-valid',
	});
	formValidation({
		container: '.disqus-wrapper',
		form: '#disqus-form',
		input: '#disqus-form__phone',
		submitBtn: '#disqus-form__submit',
		sucessClass: 'success',
		valid: 'data-valid',
	});
	sendFormData({
		wrapper: '.form',
		submitBtn: '#request-form__submit',
		inputs: [
			{
				key: 'phone',
				tag: '#request-form__phone',
				required: true,
			},
			{
				key: 'site',
				tag: '#request-form__site',
				required: false,
			},
		],
		url: '/s/send',
		typeForm: 1,
	});
	sendFormData({
		wrapper: '.disqus__content',
		submitBtn: '#disqus-form__submit',
		inputs: [
			{
				key: 'phone',
				tag: '#disqus-form__phone',
				required: true,
			},
		],
		url: '/s/send',
		typeForm: 2,
	});
	animatedBackground();
}); // END READY

window.addEventListener('resize', () => {
	debounce(function () {
		blockPosition();
	}, 200);
});

window.addEventListener('load', () => {
	debounce(function () {
		blockPosition();
	}, 200);
});

window.addEventListener('scroll', (e) => {
	if (document.querySelector('.index header')) {
		if (scrollY > 10) {
			document.querySelector('.index header').classList.add('header-style');
		} else {
			document.querySelector('.index header').classList.remove('header-style');
		}
	}
});
