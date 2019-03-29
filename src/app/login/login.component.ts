import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	username = '';
	password = '';
	errorMessage = 'Invalid credentials';
	invalidLogin = false;

	//Dependency Injection; this will be available as member
	// variable by default if private is not specified
	constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) {}

	ngOnInit() {}

	handleLogin() {
		this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
			(data) => {
				console.log(data);
				this.router.navigate([ 'welcome', this.username ]);
				this.invalidLogin = false;
			},
			(error) => {
				this.invalidLogin = true;
			}
		);
	}
}
