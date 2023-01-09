import { IProjectState } from "./reducers/ProjectSlice";

export default async function errorHandler<TParam, TResult>(requestFunc: (params: TParam) => Promise<TResult>,
	objParams: TParam): Promise<IProjectState<TResult>> {

	try {

		return {
			projects: await requestFunc(objParams).then(res => res),
			isError: false,
			errorMessage: '',
		}

	} catch (error: any) {

		return {
			projects: await requestFunc(objParams),
			isError: true,
			errorMessage: error.message,
		}
	}
}