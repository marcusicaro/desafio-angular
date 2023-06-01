import { Component, OnInit, ViewChild } from '@angular/core';
import { MainControllerService } from './main-controller.service';
import { MatSidenav, MatDrawerMode, MatSidenavContent } from '@angular/material/sidenav';
import { ngIfFade } from 'src/app/animation/ngif-fade';
import { AppDeviceType, AppDeviceTypeService } from 'src/app/app.device-type.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'main-controller',
	templateUrl: './main-controller.component.html',
	styleUrls: ['./main-controller.component.scss'],
	animations: [ngIfFade],
})

export class MainControllerComponent implements OnInit {

	currentDevice: AppDeviceType;

	matSidenavAttrs: MatSidenavAttrs = {
		mode: 'side',
		opened: true
	};

	sideNavBehavior = this.mainControllerService.sideNavBehavior;

	@ViewChild('sidenav')
	set matSidenav(matSidenav: MatSidenav) {
		this.mainControllerService.setSidenav(matSidenav);
		this.subscribeAppDeviceType();
	}

	@ViewChild(MatSidenavContent) set matSidenavContent(sideNavContent: MatSidenavContent){
		this.mainControllerService.matSidenavContent = sideNavContent;
	};

	constructor(
		private location: Location,
		private route: Router,
		private appDeviceTypeService: AppDeviceTypeService,
		private mainControllerService: MainControllerService
	) {
		this.setCurrentDevice();
	}

	ngOnInit(): void {
	}

	private setCurrentDevice = () => {
		this.currentDevice = this.appDeviceTypeService.device;
		this.setMatSidenavAttrs();
	};

	private subscribeAppDeviceType(){

		this.appDeviceTypeService.getDeviceTypeObservable()
			.subscribe(device => this.setMatSidenavAttrs(device.type));

	}

	private setMatSidenavAttrs(deviceType = this.appDeviceTypeService.device.type){

		if(
			this.appDeviceTypeService.device.phone
			||
			this.appDeviceTypeService.device.tablet
			&&
			this.appDeviceTypeService.device.orientationPortrait
		){
			Object.assign(
				this.matSidenavAttrs,
				{
					mode: 'over',
					opened: false
				}
			);
		}else{
			Object.assign(
				this.matSidenavAttrs,
				{
					mode: 'side',
					opened: true
				}
			);
		}
	}

	sideNavToggle(){
		this.mainControllerService.getSidenav().toggle();
	}

	backButtonEnabled(): boolean {
		return !!this.mainControllerService.backButton;
	};

	backButton(){
		if(typeof this.mainControllerService.backButton === 'boolean'){
			this.location.back();
		}else{
			this.route.navigate([this.mainControllerService.backButton]);
		}
	}

	sideNavEscKey = () => console.log('sideNavEscKey()');

	closeSideNav = () => this.mainControllerService.getSidenav().close();

}

export interface MatSidenavAttrs {
	mode: MatDrawerMode;
	opened: boolean;
}
