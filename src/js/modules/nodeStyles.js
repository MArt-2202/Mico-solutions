export default function nodeStyles() {
	document.body.classList.add('init');

	if (document.querySelector('.top-section')) {
		document.body.classList.add('index');
	} else {
		document.body.classList.add('inner');
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
}
