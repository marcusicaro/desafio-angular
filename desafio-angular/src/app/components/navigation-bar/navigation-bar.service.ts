import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NavigationBarService {

	extrasRef: ViewContainerRef;

	constructor() { }

}
