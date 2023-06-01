import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { MainControllerComponent } from './main-controller.component';

// export function getTranslocoModule(config: Partial<TranslocoConfig> = {}) {
//   return TranslocoTestingModule.withLangs(
//     { en, es },
//     {
//       availableLangs: ['en', 'es'],
//       defaultLang: 'en',
//       ...config
//     }
//   );
// }

describe('MainControllerComponent', () => {
	let component: MainControllerComponent;
	let fixture: ComponentFixture<MainControllerComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ MainControllerComponent ],
			imports: [RouterTestingModule, HttpClientModule, TranslocoTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainControllerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
