export default function setCookies({ wrapper, node, url, method }) {
	if (node) {
		const data = new FormData(),
			sendData = { type: 'set_cookies' };

		data?.append('json', JSON.stringify(sendData));

		fetch(url, {
			method,
			body: data,
		})
			.then((response) => response?.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));
	}

	if (document.querySelector(wrapper)) {
		document.querySelector(wrapper).classList.add('dn');
	}
}
