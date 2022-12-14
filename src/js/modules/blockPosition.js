// BLOCK POSITION
export default function blockPosition() {
	const bl1 = document.querySelector('.toggle-wrapper > div > div'),
		bl2 = document.querySelector('.header__nav'),
		bl3 = document.querySelector('.header__contacts'),
		bl4 = document.querySelector('.header__contact-btn'),
		bl5 = document.querySelector('.header__bl-2'),
		bl6 = document.querySelector('.header__bl-3'),
		bl7 = document.querySelector('.header__bl-4'),
		bl8 = document.querySelector('.disqus strong'),
		bl9 = document.querySelector('.disqus em'),
		bl10 = document.querySelector('.disqus__content > div:last-child'),
		bl11 = document.querySelector('.top-section-style-2 .content-2__main'),
		bl12 = document.querySelector('.top-section-style-2 .content-2__aside'),
		bl13 = document.querySelector('.top-section-style-2 .request'),
		bl14 = document.querySelector('.top-section-style-2 .request__content'),
		bl15 = document.querySelector('.top-section-style-2 .request__front');

	if (window.matchMedia('(min-width: 361px)').matches) {
		document.body.classList.remove('max-360');

		if (!document.body.classList.contains('min-361')) {
			document.body.classList.add('min-361');

			if (document.querySelector('.min-361')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 577px)').matches) {
		document.body.classList.remove('max-360', 'max-576');

		if (!document.body.classList.contains('min-577')) {
			document.body.classList.add('min-577');

			if (document.querySelector('.min-577')) {
			}
		}
	}

	if (window.matchMedia('(min-width: 769px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768');

		if (!document.body.classList.contains('min-769')) {
			document.body.classList.add('min-769');

			if (document.querySelector('.min-769')) {
				if (bl8 && bl10) {
					bl10.prepend(bl8);
				}
			}
		}
	}

	if (window.matchMedia('(min-width: 1025px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768', 'max-1024');

		if (!document.body.classList.contains('min-1025')) {
			document.body.classList.add('min-1025');

			if (document.querySelector('.min-1025')) {
				if (bl11 && bl12) {
					bl12.style.minHeight = `${bl11.offsetHeight}px`;
				}
				if (bl11 && bl13) {
					bl13.style.minHeight = `${bl11.offsetHeight}px`;
				}
				if (bl11 && bl14) {
					bl14.style.minHeight = `${bl11.offsetHeight}px`;
				}
				if (bl11 && bl15) {
					bl15.style.minHeight = `${bl11.offsetHeight}px`;
				}
			}
		}
	}

	if (window.matchMedia('(min-width: 1201px)').matches) {
		document.body.classList.remove('max-360', 'max-576', 'max-768', 'max-1024', 'max-1200');

		if (!document.body.classList.contains('min-1201')) {
			document.body.classList.add('min-1201');

			if (document.querySelector('.min-1201')) {
				if (bl2 && bl5) {
					bl5.prepend(bl2);
				}
				if (bl3 && bl7) {
					bl7.prepend(bl3);
				}
				if (bl4 && bl6) {
					bl6.prepend(bl4);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 1200px)').matches) {
		document.body.classList.remove('min-1201');

		if (!document.body.classList.contains('max-1200')) {
			document.body.classList.add('max-1200');

			if (document.querySelector('.max-1200')) {
				if (bl1 && bl2) {
					bl1.prepend(bl2);
				}
				if (bl2 && bl3) {
					bl2.after(bl3);
				}
				if (bl3 && bl4) {
					bl3.after(bl4);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 1024px)').matches) {
		document.body.classList.remove('min-1201', 'min-1025');

		if (!document.body.classList.contains('max-1024')) {
			document.body.classList.add('max-1024');

			if (document.querySelector('.max-1024')) {
				if (document.querySelector('.max-1024')) {
					if (bl12) {
						bl12.style.minHeight = '';
					}
					if (bl13) {
						bl13.style.minHeight = '';
					}
					if (bl14) {
						bl14.style.minHeight = '';
					}
					if (bl15) {
						bl15.style.minHeight = '';
					}
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 768px)').matches) {
		document.body.classList.remove('min-1201', 'min-1025', 'min-769');

		if (!document.body.classList.contains('max-768')) {
			document.body.classList.add('max-768');

			if (document.querySelector('.max-768')) {
				if (bl9 && bl8) {
					bl9.after(bl8);
				}
			}
		}
	}

	if (window.matchMedia('(max-width: 576px)').matches) {
		document.body.classList.remove('min-1201', 'min-1025', 'min-769', 'min-577', 'min-361');

		if (!document.body.classList.contains('max-576')) {
			document.body.classList.add('max-576');

			if (document.querySelector('.max-576')) {
			}
		}
	}

	if (window.matchMedia('(max-width: 360px)').matches) {
		document.body.classList.remove('min-1201', 'min-1025', 'min-769', 'min-361');

		if (!document.body.classList.contains('max-360')) {
			document.body.classList.add('max-360');

			if (document.querySelector('.max-360')) {
			}
		}
	}
}
