import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Response {
	constructor(public message: string) {}
}

@Injectable({
	providedIn: 'root'
})
export class WelcomeDataService {
	constructor(private http: HttpClient) {}

	executeHelloWorldDataService() {
		return this.http.get<Response>('http://localhost:8080/Prashant');
	}
}
