export default function scrollToAnchor() {
	if (document.querySelector('.scroll-to-anchor')) {
		document.addEventListener('click', function (e) {
			let link = e.target;

			if (link.closest('.scroll-to-anchor')) {
				e.preventDefault();

				if (link.hash === 'javascript:void(0)' || link.hash === '#') {
					return;
				}
				scrollToTarget(link.hash);
			}
		});

		if (location.hash === '') {
			return;
		}

		scrollToTarget(location.hash);

		function scrollToTarget(id) {
			if (id) {
				let target = document.querySelector(id);

				if (target !== null) {
					let pos = target.offsetTop;

					if (window.matchMedia('(max-width: 1200px)').matches) {
						pos -= document.querySelector('header').offsetHeight + 30;
					}
					if (window.matchMedia('(min-width: 1201px)').matches) {
						pos -= 60;
					}

					window.scrollTo({
						top: pos,
						behavior: 'smooth',
					});
				}
			}
		}
	}
}
