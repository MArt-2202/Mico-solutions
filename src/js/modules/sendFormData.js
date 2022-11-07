export default function sendFormData({ wrapper, submitBtn, inputs, url, typeForm: type_form }) {
	if (document.querySelector(submitBtn)) {
		let sendData = {},
			data = null;

		document.querySelector(submitBtn).addEventListener('click', function () {
			if (
				document
					.querySelector(submitBtn)
					.closest(wrapper)
					.querySelector('input[type="radio"]:checked')
			) {
				sendData.checked = document
					.querySelector(submitBtn)
					.closest(wrapper)
					.querySelector('input[type="radio"]:checked').value;
			}

			inputs.forEach((input) => {
				sendData[input.key] = document.querySelector(input.tag)?.value;
				sendData.type_form = type_form;
				data = JSON.stringify(sendData);
			});

			inputs.every((input) => {
				if (document.querySelector(input.tag)?.value === '' && input.required) {
					data = null;
					return;
				}
			});

			console.log(data);
			if (data) {
				fetch(url, {
					method: 'POST',
					body: data,
				})
					.then((response) => {
						if (response.ok) {
							console.log(response.ok);
						}
					})
					.then((data) => {
						console.log(data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	}
}
