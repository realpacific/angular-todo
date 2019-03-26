import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: [ './welcome.component.css' ]
})
export class WelcomeComponent implements OnInit {
	// get the currently activated route
	constructor(private route: ActivatedRoute, private dataService: WelcomeDataService) {}
	username = '';
	remoteMessage: string;

	ngOnInit() {
		this.username = this.route.snapshot.params['name'];
	}

	callRemoteWelcomeApi() {
		this.dataService.executeHelloWorldDataService().subscribe((response) => {
			this.remoteMessage = response.message;
		}, error => {
			this.remoteMessage = error.error.message
		});
	}
}
