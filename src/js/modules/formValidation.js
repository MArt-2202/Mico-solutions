export default function formValidation({
	container,
	form: wrapper,
	input,
	submitBtn,
	sucessClass,
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

		formSubmit.addEventListener('click', function () {
			if (formInput.value === '') {
				formInput.classList.add('required');
			} else {
				formInput.classList.remove('required');
			}
			if (formInput.value !== '') {
				if (document.querySelector(container)) {
					document.querySelector(container).classList.add(sucessClass);
				}
			}
		});
	}
}
