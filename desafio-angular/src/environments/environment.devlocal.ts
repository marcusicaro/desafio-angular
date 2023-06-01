import { environment as envDefault } from './environment.default';

export const environment = Object.assign(
	envDefault,
	{
		env: 'devlocal',
		production: false,
	}
);
