import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CdkOverlayContainerComponent } from './cdk-overlay-container.component';

describe('CdkOverlayContainerComponent', () => {
	let component: CdkOverlayContainerComponent;
	let fixture: ComponentFixture<CdkOverlayContainerComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ CdkOverlayContainerComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CdkOverlayContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
