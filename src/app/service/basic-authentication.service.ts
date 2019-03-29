import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BasicAuthenticationService {
	constructor(private http: HttpClient) {}

	executeBasicAuthenticationService(username: string, password: string) {
		let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
		let headers = new HttpHeaders({
			Authorization: basicAuthHeader
		});
		return this.http
			.get('http://localhost:8080/basicauth', {
				headers: headers
			})
			.pipe(
				map((data) => {
					sessionStorage.setItem('authenticatedUser', username);
					sessionStorage.setItem('token', basicAuthHeader);
					return data;
				})
			);
	}

	getAuthenticatedUser() {
		return sessionStorage.getItem('authenticatedUser');
	}

	getAuthenticatedToken() {
		if (this.getAuthenticatedUser()) return sessionStorage.getItem('token');
	}

	isUserLoggedIn(): boolean {
		let user = sessionStorage.getItem('authenticatedUser');
		return !(user === null);
	}

	handleLogout() {
		sessionStorage.removeItem('authenticatedUser');
		sessionStorage.removeItem('token');
	}
}
