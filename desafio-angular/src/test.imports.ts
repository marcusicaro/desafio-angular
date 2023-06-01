import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { SharedModule } from './app/shared.module';

export const modulesToBeImported = [
	RouterTestingModule,
	HttpClientModule,
	TranslocoTestingModule,
	SharedModule
];
