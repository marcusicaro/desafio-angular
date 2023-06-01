import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

function setAppVersion(){

	document.querySelector('.app-version').innerHTML = `v${environment.version}`;

	if(!environment.envMainBootstrap(appBootstrap)){
		appBootstrap();
	}
}

setAppVersion();

function appBootstrap(){
	platformBrowserDynamic().bootstrapModule(AppModule)
		.then(() => {
			document.body.removeChild(document.querySelector('#app-loading'));
			document.querySelector('body').classList.remove('app-loading');
		})
		.catch(err => console.error(err));
}
