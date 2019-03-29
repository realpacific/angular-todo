import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Response {
	constructor(public message: string) {}
}

@Injectable({
	providedIn: 'root'
})
export class WelcomeDataService {
	constructor(private http: HttpClient) {}

	executeHelloWorldDataService() {
		// let headers = new HttpHeaders({
		// 	Authorization: this.createBasicAuthenticationHttpHeader()
		// });

		// return this.http.get<Response>('http://localhost:8080/Prashant', {
		// 	headers: headers
		// });

		return this.http.get<Response>('http://localhost:8080/Prashant');
	}

	// //Generate encoded username & password for Basic Authentication
	// createBasicAuthenticationHttpHeader() {
	// 	let username = 'user';
	// 	let password = 'password';
	// 	// byte64 encoding
	// 	let basicAutheticationHeader = 'Basic ' + window.btoa(username + ':' + password);
	// 	return basicAutheticationHeader;
	// }
}
