import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HomeConfigRouting } from './home/home.config.routing';

@NgModule({
	declarations: [],
	imports: [

		RouterModule.forRoot([
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{ path: '**', redirectTo: 'home' }
		], {}),

  	HomeConfigRouting
	],
	exports: []
})

export class AppRoutingModule { }
