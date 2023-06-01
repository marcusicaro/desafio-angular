import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
	providedIn: 'root'
})
export class AppDeviceTypeService {

	device: AppDeviceType = {
		type: AppDeviceTypes.desktop,
		phone: false,
		tablet: false,
		desktop: true,
		orientationLandscape: true,
		orientationPortrait: false
	};

	private deviceTypeObserver: Subject<AppDeviceType>;

	private devices = {
		phone: [
			AppBreakpoints.HandsetLandscape,
			AppBreakpoints.HandsetPortrait,
			// AppBreakpoints.Tablet,
			// Breakpoints.XSmall
		],
		tablet: [
			AppBreakpoints.TabletLandscape,
			AppBreakpoints.TabletPortrait,
			// AppBreakpoints.Tablet
			// Breakpoints.Small,
			// Breakpoints.Medium
		],
		desktop: [
			AppBreakpoints.WebLandscape,
			AppBreakpoints.WebPortrait,
			// Breakpoints.Large,
			// Breakpoints.XLarge
		],
		orientationLandscape: [
			AppBreakpoints.HandsetLandscape,
			AppBreakpoints.TabletLandscape,
			AppBreakpoints.WebLandscape,
		],
		orientationPortrait: [
			AppBreakpoints.HandsetPortrait,
			AppBreakpoints.TabletPortrait,
			AppBreakpoints.WebPortrait,
		],
	};

	constructor(
		private breakpointObserver: BreakpointObserver
	){
		this.setDeviceTypeObserver();
	}

	private setDeviceTypeObserver(){

		// const deviceTypeSubscriber: Subject<any> = new Subject();
		this.deviceTypeObserver = new Subject<AppDeviceType>();

		this.deviceTypeObserver.subscribe(result => console.log('deviceTypeObserver', Breakpoints));

		this.breakpointObserver.observe([
			// Breakpoints.XSmall,
			// Breakpoints.Small,
			// Breakpoints.Medium,
			// Breakpoints.Large,
			// Breakpoints.XLarge,
			AppBreakpoints.Handset,
			AppBreakpoints.Tablet,
			AppBreakpoints.Web,
			// Breakpoints.HandsetLandscape,
			// Breakpoints.TabletLandscape,
			// Breakpoints.WebLandscape,
			// Breakpoints.HandsetPortrait,
			// Breakpoints.TabletPortrait,
			// Breakpoints.WebPortrait
		])
			.subscribe(
				(result: BreakpointState) => {

					const currentBreakpoint = Object.entries(result.breakpoints)
						.filter(
							item => item[1]
						);

					if(currentBreakpoint.length){

						Object.assign(
							this.device,
							{
								phone: false,
								tablet: false,
								desktop: false,
								orientationLandscape: false,
								orientationPortrait: false,
							}
						);

						currentBreakpoint.map(([breakpoint]) => {
							Object.entries(this.devices).map(([deviceKey, breakpoints]) => {
								if(breakpoints.filter(breakpointsItem => breakpointsItem === breakpoint).length){
									if((Object.values(AppDeviceTypes).includes(deviceKey as AppDeviceTypes))){
										this.device.type = deviceKey as AppDeviceTypes;
									}
									Object.assign(
										this.device,
										{
											[deviceKey]: true
										}
									);
								}
							});
						});

						this.deviceTypeObserver.next(this.device);

					}

				}
			);

	}

	getDeviceTypeObservable = () => this.deviceTypeObserver;

}

export enum AppDeviceTypes {
	phone = 'phone',
	tablet = 'tablet',
	desktop = 'desktop'
}

export interface AppDeviceType {
	 type: AppDeviceTypes;
	 phone: boolean;
	 tablet: boolean;
	 desktop: boolean;
	 orientationLandscape: boolean;
	 orientationPortrait: boolean;
}

export const AppBreakpoints = {
	XSmall: '(max-width: 599px)',
	Small: '(min-width: 600px) and (max-width: 959px)',
	Medium: '(min-width: 960px) and (max-width: 1279px)',
	Large: '(min-width: 1280px) and (max-width: 1919px)',
	XLarge: '(min-width: 1920px)',

	Handset: '(max-width: 599px) and (orientation: portrait), ' +
						'(max-width: 959px) and (orientation: landscape)',
	Tablet: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait), ' +
					'(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
	Web: '(min-width: 840px) and (orientation: portrait), ' +
				'(min-width: 1280px) and (orientation: landscape)',

	HandsetPortrait: '(max-width: 599px) and (orientation: portrait)',
	TabletPortrait: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait)',
	WebPortrait: '(min-width: 840px) and (orientation: portrait)',

	HandsetLandscape: '(max-width: 959px) and (orientation: landscape)',
	TabletLandscape: '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
	WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};
