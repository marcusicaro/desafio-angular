import { environment as envDefault } from './environment.default';

export const environment = Object.assign(
	envDefault,
	{
		env: 'prod',
		production: true,
		proxyGet_enc_url: '/portal_get_enc_url/',
		portalWeb: 'https://portal.namoadigital.com',
		api: {
			host: '//api.namoadigital.com'
		}
	}
);
