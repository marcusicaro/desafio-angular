import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppDeviceTypeService, AppDeviceType } from 'src/app/app.device-type.service';
import { MainControllerService } from '../main-controller/main-controller.service';

@Component({
	selector: 'navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

	currentDevice: AppDeviceType;

	appVersion = environment.version;
	dateObj = new Date();

	filter = {
		tag: '',
		profitsCenter: '',
		sites: '',
		products: ''
	};

	sideNavBehavior = this.mainControllerServer.sideNavBehavior;

	constructor(
		private appDeviceTypeService: AppDeviceTypeService,
		private mainControllerServer: MainControllerService,
	) {
		this.setCurrentDevice();
	}

	ngOnInit(){
	}

	private setCurrentDevice = () =>
		this.currentDevice = this.appDeviceTypeService.device;

	hideSideNav(){
		if(this.mainControllerServer.getSidenav().mode === 'over'){
			this.mainControllerServer.getSidenav().close();
		}
	}

	minimize(){
		this.mainControllerServer.sideNavBehavior.minimized =
			!this.mainControllerServer.sideNavBehavior.minimized;
	}

}
