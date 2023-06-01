
export interface RouteData {
	basePath: string;
	keepAfterLoginRedir: boolean;
	preventRequestLogin?(): boolean;
	navigationBar?: boolean;
};
