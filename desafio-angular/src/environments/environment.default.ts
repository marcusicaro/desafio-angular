import packageInfo from '../../package.json';

export const environment = {
	version: packageInfo.version,
	envMainBootstrap: (appBootstrap: () => void): boolean => false
};
