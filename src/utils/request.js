const api = require('./api')

function makeAuthHeader(token) {
	if(!token) return null

	return {
		'Authorization': `Bearer ${token}`
	}
}

export default function(req, { body, method, token }) {
	const authHeader = makeAuthHeader(token)

	return fetch(req, {
		method,
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json',
			...authHeader
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
				api.refreshToken()
			}
			else {
				throw errorMessage
			}
		})
	})
}
