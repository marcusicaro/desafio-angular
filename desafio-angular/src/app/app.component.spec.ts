import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				AppModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	// it('should simple test run', () => {
	// 	const test = true;
	// 	expect(test).toBeTruthy();
	// });

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	// it(`should have as title 'webapp'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.componentInstance;
	// 	expect(app.currentDevice).toEqual(null);
	// });

	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.nativeElement;
	// 	expect(compiled.querySelector('.content span').textContent).toContain('webapp app is running!');
	// });

});
