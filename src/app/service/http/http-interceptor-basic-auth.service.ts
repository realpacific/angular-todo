import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		let username = 'user';
		let password = 'password';
		let basicAutheticationHeader = 'Basic ' + window.btoa(username + ':' + password);
		req = req.clone({
			setHeaders: {
				Authorization: basicAutheticationHeader
			}
		});
		// Intercept and sending to next http handler to continue
		return next.handle(req);
	}
}
