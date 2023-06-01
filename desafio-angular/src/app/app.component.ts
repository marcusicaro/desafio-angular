import { Component } from '@angular/core';
import { IconSvgService } from './components/icon-svg/icon-svg.service';
import { AppDeviceType, AppDeviceTypeService } from './app.device-type.service';
import { ActivationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	currentDevice: AppDeviceType;
	path = '';

	constructor(
		private appDeviceTypeService: AppDeviceTypeService,
		private iconSvgService: IconSvgService,
		private router: Router
	) {
		this.setCurrentDevice();

		this.router.events.subscribe((event) => {
			if (event instanceof ActivationEnd) {
				this.path = event.snapshot.data.basePath;
			}
		});
	}

	setCurrentDevice = () =>
		(this.currentDevice = this.appDeviceTypeService.device);
}
