export default function formValidation({
	container,
	form: wrapper,
	input,
	submitBtn,
	sucessClass,
	valid,
}) {
	if (
		document.querySelector(wrapper) &&
		document.querySelector(input) &&
		document.querySelector(submitBtn)
	) {
		const form = document.querySelector(wrapper),
			formInput = document.querySelector(input),
			formSubmit = document.querySelector(submitBtn);

		form.addEventListener('input', function (e) {
			const target = e.target.closest('input');

			if (target.hasAttribute(valid)) {
				target.value = target.value.replace(/\D/g, '');
				target.classList.add('required');
			}
			if (
				target &&
				target.value === '' &&
				target.hasAttribute(valid) &&
				!target.classList.contains('required')
			) {
			} else {
				target.classList.remove('required');
			}
		});

		formSubmit.addEventListener('click', function () {
			if (formInput.value === '') {
				formInput.classList.add('required');
			} else {
				formInput.classList.remove('required');
			}
			if (formInput.value !== '') {
				if (document.querySelector(container)) {
					if (sucessClass !== '') {
						document.querySelector(container).classList.add(sucessClass);
					}
				}
			}
		});
	}
}
