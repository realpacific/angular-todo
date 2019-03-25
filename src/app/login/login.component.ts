import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	username = 'prashant';
	password = '';
	errorMessage = 'Invalid credentials';
	invalidLogin = false;

	//Dependency Injection; this will be available as member
	// variable by default if private is not specified
	constructor(private router: Router) {}

	ngOnInit() {}

	handleLogin() {
		if (this.username === 'prashant' && this.password === 'password') {
			this.invalidLogin = false;

			// [<path>, <value>]
			this.router.navigate([ 'welcome', this.username ]);
		} else this.invalidLogin = true;
	}
}
