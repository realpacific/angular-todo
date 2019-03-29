import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
	providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
	constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
			return true;
		}
		console.log("user is not authenticated yet so routing back to /login")
		this.router.navigate([ 'login' ]);
		return false;
	}
}
