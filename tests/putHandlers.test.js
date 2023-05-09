// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 5	
}

test('Should return 200 status code', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualStatusCode = response.status;

	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

/* body test */
test('Response should return true', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.ok).toBe(true);
});
