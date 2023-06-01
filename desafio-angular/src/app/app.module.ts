import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localePT from '@angular/common/locales/pt';
import localeDE from '@angular/common/locales/de';

import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';

import { OverlayContainer } from '@angular/cdk/overlay';
import { CdkOverlayContainer } from './components/main-controller/cdk-overlay-container/cdk-overlay-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

registerLocaleData(localePT);
registerLocaleData(localeDE);

const locales = ['pt', 'de'];
let locale = 'en-US';
locales.map((item) => {
	const regexp = new RegExp(`^${item}`);
	if (regexp.test(navigator.language)) {
		locale = item;
	}
});

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		SharedModule,
		ReactiveFormsModule,
		JsonPipe,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: locale },
		{ provide: OverlayContainer, useClass: CdkOverlayContainer },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
