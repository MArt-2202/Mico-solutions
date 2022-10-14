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

	if (
		document.querySelector('#request-form__phone') &&
		document.querySelector('#request-form__site') &&
		document.querySelector('#request-form__submit')
	) {
		const formPhone = document.querySelector('#request-form__phone'),
			formSite = document.querySelector('#request-form__site'),
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
			if (formSite.value === '') {
				formSite.classList.add('required');
			} else {
				formSite.classList.remove('required');
			}
			if (formPhone.value !== '' && formSite.value !== '') {
				if (document.querySelector('#request')) {
					document.querySelector('#request').classList.add('success');
				}
			}
		});
	}
}
