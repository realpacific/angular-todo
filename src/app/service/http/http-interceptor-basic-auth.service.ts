import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
	providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
	constructor(private basicAuthService: BasicAuthenticationService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// let username = 'user';
		// let password = 'password';
		// let basicAutheticationHeader = 'Basic ' + window.btoa(username + ':' + password);
		let basicAutheticationHeader = this.basicAuthService.getAuthenticatedToken();
		let username = this.basicAuthService.getAuthenticatedUser();
		// If both of these has value, add headers else let other handle it
		if (username && basicAutheticationHeader) {
			req = req.clone({
				setHeaders: {
					Authorization: basicAutheticationHeader
				}
			});
		}
		// Intercept and sending to next http handler to continue
		return next.handle(req);
	}
}
