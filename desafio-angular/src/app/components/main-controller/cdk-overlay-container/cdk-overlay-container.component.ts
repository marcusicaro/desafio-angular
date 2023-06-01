import { Component, OnInit, Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
	selector: 'cdk-overlay-container',
	templateUrl: './cdk-overlay-container.component.html',
	styleUrls: ['./cdk-overlay-container.component.scss']
})
export class CdkOverlayContainerComponent implements OnInit
{

	ngOnInit(): void {
	}

}

@Injectable()
export class CdkOverlayContainer extends OverlayContainer {

	protected _createContainer(): void {

		const containerClass = 'cdk-overlay-container';
		const appendTo = this._document.querySelector('cdk-overlay-container');

		const container = this._document.createElement('div');
		console.log('CdkOverlayContainer', container);
		container.classList.add(containerClass);

		appendTo.appendChild(container);
		this._containerElement = container;

	}

}
