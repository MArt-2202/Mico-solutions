export default function nodeStyles() {
	document.body.classList.add('init');

	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
	}

	// if (document.querySelector('#our-work-list a')) {
	// 	document.querySelectorAll('#our-work-list a').forEach((el) => {
	// 		const itemHref = el.getAttribute('href');

	// 		if (itemHref !== '#' && itemHref !== 'javascript:void(0)') {
	// 			if (el.querySelector('span')) {
	// 				const itemTitle = document.createElement('strong');

	// 				itemTitle.textContent = itemHref;
	// 				el.querySelector('span').after(itemTitle);
	// 			}
	// 		}
	// 	});
	// }

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
									<iframe src="${entry.target.dataset.src}" allowfullscreen title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
				document.querySelector('#request-form__variant-new-site') &&
				document.querySelector('#request-form__variant-site') &&
				document.querySelector('#request-form__variant-design')
			) {
				const target = e.target,
					input = document.querySelector('#request-form__site'),
					labelSite = target.closest('#request-form__variant-new-site'),
					labelAudit = target.closest('#request-form__variant-site'),
					labelDesign = target.closest('#request-form__variant-design');

				if (labelAudit?.checked || labelDesign?.checked) {
					input.classList.remove('dn');
				} else if (labelSite?.checked) {
					input.classList.add('dn');
				}
			}
		});
	}
}
