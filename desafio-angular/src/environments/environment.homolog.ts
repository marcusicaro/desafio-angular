import { environment as envDefault } from './environment.default';

// prod
// const apiPrefix = '';
// const portalPrefix = 'portal';

export const environment = Object.assign(
	envDefault,
	{
		env: 'homolog',
		production: true
	}
);
