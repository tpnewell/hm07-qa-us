// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "productsList": [
        {
            "id": 12,
            "quantity": 2
        }
    ]
}

test('Should return 201 status code', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(201);
});

/* body test */
test('Response should contain Order and Go', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.courierService).toBe("Order and Go");
	
});
