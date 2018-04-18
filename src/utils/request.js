export default function(req, { body, method }) {
	return fetch(req, {
		method,
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json'
		}
	}).then(res => {
		if(!res.ok) throw res
		console.log(res)
		return res.json()
	}).catch((err) => {
		return err.text().then(errorMessage => {
			if(err.status === 401) {
				// User is not authorised
				// Try to refresh token once
				// api.refreshToken()
			}
			else {
				throw errorMessage
			}
		})
	})
}
