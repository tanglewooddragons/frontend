import request from './request'

export async function login(credentials) {
	const response = await request('/login', {
		method: 'POST',
		body: credentials
	})

	this.accessToken = response.accessToken
	this.refreshToken = response.refreshToken

	return response
}

export async function getUser(id = '') {
	return request('/user/' + id, {
		token: this.accessToken
	})
}

export async function refreshAccessToken() {
	const refreshToken = this.refreshToken

	if(!refreshToken) {
		//redirect to login
		return
	}

	const response = await request('/refreshToken', {
		method: 'POST',
		body: { refreshToken }
	})

	if(!response) {
		//redirect to login
		return
	}
}
