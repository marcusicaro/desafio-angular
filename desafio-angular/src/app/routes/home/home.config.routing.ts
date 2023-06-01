import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routeConfig = {
	home: {
		path: 'home',
		label: 'Home'
	}
};

const routes: Routes = [
	{
		path: routeConfig.home.path,
		data: {
			basePath: routeConfig.home.path
		},
		loadChildren: () => import('./home.module').then(
			(m) => m.HomeModule
		),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{}
	)]
})
export class HomeConfigRouting {}
