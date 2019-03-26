import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HardcodedAuthenticationService {
	constructor() {}

	authenticate(username: string, password: string) {
		if (username === 'prashant' && password === 'password') {
			//handle user Session using session storage
			sessionStorage.setItem('authenticatedUser', username);
			return true;
		} else return false;
	}

	isUserLoggedIn(): boolean {
		let user = sessionStorage.getItem('authenticatedUser');
		return !(user === null);
	}


	handleLogout() {
		sessionStorage.removeItem('authenticatedUser')
	}
}
