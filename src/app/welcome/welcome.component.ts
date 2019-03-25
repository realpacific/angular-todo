import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: [ './welcome.component.css' ]
})
export class WelcomeComponent implements OnInit {
	// get the currently activated route
	constructor(private route: ActivatedRoute) {}
  username = '';
  
	ngOnInit() {
		this.username = this.route.snapshot.params['name'];
	}
}
