import { Component, OnInit } from '@angular/core';
import { AppDeviceType, AppDeviceTypeService } from 'src/app/app.device-type.service';

@Component({
	selector: 'footer-app',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	currentDevice: AppDeviceType;
	currentDate = new Date();

	constructor(
		private appDeviceTypeService: AppDeviceTypeService
	) {
		this.setCurrentDevice();
	}

	ngOnInit(): void {
	}

	private setCurrentDevice = () =>
		this.currentDevice = this.appDeviceTypeService.device;

}
