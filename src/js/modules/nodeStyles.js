export default function nodeStyles() {
	document.body.classList.add('init');

	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
	}

	if (
		document.querySelector('.top-section-style-2 .content-2__main') &&
		document.querySelector('.top-section-style-2 .content-2__aside')
	) {
		const main = document.querySelector('.top-section-style-2 .content-2__main'),
			aside = document.querySelector('.top-section-style-2 .content-2__aside');
		if (window.matchMedia('(min-width: 1025px)').matches) {
			aside.style.minHeight = `${main.offsetHeight}px`;
			document.querySelector(
				'.top-section-style-2 .content-2__aside .request'
			).style.minHeight = `${main.offsetHeight}px`;
			document.querySelector(
				'.top-section-style-2 .content-2__aside .request__content'
			).style.minHeight = `${main.offsetHeight}px`;

			document.querySelector(
				'.top-section-style-2 .content-2__aside .request__front'
			).style.minHeight = `${main.offsetHeight}px`;
		}
		if (window.matchMedia('(max-width: 1024px)').matches) {
			aside.style.minHeight = '';
		}
	}

	if (document.querySelector('#our-work-list a')) {
		document.querySelectorAll('#our-work-list a').forEach((el) => {
			const itemHref = el.getAttribute('href');

			if (itemHref !== '#' && itemHref !== 'javascript:void(0)') {
				if (el.querySelector('span')) {
					const itemTitle = document.createElement('strong');

					itemTitle.textContent = itemHref;
					el.querySelector('span').after(itemTitle);
				}
			}
		});
	}

	if (
		document.querySelector('#request-form__phone') &&
		document.querySelector('#request-form__submit')
	) {
		const formPhone = document.querySelector('#request-form__phone'),
			formSubmit = document.querySelector('#request-form__submit');

		if (document.querySelector('#request-form')) {
			document.querySelector('#request-form').addEventListener('input', function (e) {
				if (
					e.target.closest('input') &&
					e.target.closest('input').value === '' &&
					!e.target.closest('input').classList.contains('required')
				) {
					e.target.closest('input').classList.add('required');
				} else {
					e.target.closest('input').classList.remove('required');
				}
			});
		}

		formSubmit.addEventListener('click', function () {
			if (formPhone.value === '') {
				formPhone.classList.add('required');
			} else {
				formPhone.classList.remove('required');
			}
			if (formPhone.value !== '') {
				if (document.querySelector('#request')) {
					document.querySelector('#request').classList.add('success');
				}
			}
		});
	}

	document.body.addEventListener('input', function (e) {
		const target = e.target;

		if (target.hasAttribute('data-valid-phone')) {
			target.value = target.value.replace(/\D/g, '');
		}
	});

	if (document.querySelector('.desktop-user-agent #our-work-list a')) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const target = entry.target;

						if (target.dataset.video && target.dataset.video !== '') {
							const videoSrc = target.dataset.video,
								posterSrc = target.querySelector('img')?.getAttribute('src');

							target.insertAdjacentHTML(
								'beforeend',
								`
									<div class="video-wrapper">
										<video muted playsinline poster="${posterSrc}">
											<source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src="${videoSrc}">
										</video>
									</div>
								`
							);
						}
						observer.unobserve(target);
					}
				});
			},
			{
				rootMargin: '50px',
			}
		);
		document.querySelectorAll('#our-work-list a').forEach((item) => observer.observe(item));

		document
			.querySelector('.desktop-user-agent #our-work-list')
			.addEventListener('mouseover', function (e) {
				const target = e.target;

				if (target.closest('video')) {
					target.closest('video').play();
				}
			});

		document
			.querySelector('.desktop-user-agent #our-work-list')
			.addEventListener('mouseleave', function (e) {
				const target = e.target;

				if (target.closest('video')) {
					target.closest('video').currentTime = 0;
				}
			});
	}

	if (document.querySelector('.map-wrapper')) {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.dataset.src) {
						entry.target.insertAdjacentHTML(
							'beforeend',
							`
									<iframe src="${entry.target.dataset.src}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								`
						);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '50px',
			}
		);
		document.querySelectorAll('.map-wrapper').forEach((item) => observer.observe(item));
	}

	if (document.querySelector('.request-form')) {
		document.querySelector('.request-form').addEventListener('change', function (e) {
			if (
				document.querySelector('#request-form__site') &&
				document.querySelector('#request-form__variant-site') &&
				document.querySelector('#request-form__variant-design')
			) {
				const target = e.target,
					input = document.querySelector('#request-form__site'),
					labelSite = target.closest('#request-form__variant-site'),
					labelDesign = target.closest('#request-form__variant-design');

				if (labelSite?.checked || labelDesign?.checked) {
					input.classList.add('db');
				} else {
					input.classList.remove('db');
				}
			}
		});
	}
}
