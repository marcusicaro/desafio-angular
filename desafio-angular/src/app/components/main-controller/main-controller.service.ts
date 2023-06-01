import { Injectable, ViewContainerRef } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Injectable({
	providedIn: 'root'
})
export class MainControllerService {

	private _backButton: boolean | string = false;

	sideNav: MatSidenav;
	sideNavBehavior = {
		minimized: false
	};

	matSidenavContent: MatSidenavContent;

	rightIconsRef: ViewContainerRef;

	setSidenav(matSidenav: MatSidenav){
		this.sideNav = matSidenav;
	}

	getSidenav = (): MatSidenav => this.sideNav;

	closeSideNav(){
		if(this.sideNav){
			this.sideNav.close();
		}
	}

	openSideNav(){
		if(this.sideNav){
			this.sideNav.open();
		}
	}

	showBackButton(path: boolean | string = true){
		this._backButton = path;
	}

	hideBackButton(){
		this._backButton = false;
	}

	get backButton(){
		return this._backButton;
	}

}
