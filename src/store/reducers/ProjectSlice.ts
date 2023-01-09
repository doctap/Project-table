import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import server, { IItemRow, Statuses, Types } from "../../server/Server";
import errorHandler from "../ErrorHandler";
import { IRequestSortProjects, IRequestAllProjects } from "../interfacies/Interfacies";

export interface IProjectState<T> {
	projects: T;
	isError: boolean;
	errorMessage: string;
}

const initialState: IProjectState<IItemRow[]> = {
	projects: [],
	isError: false,
	errorMessage: '',
}

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		onFilterByStatus(state, action: PayloadAction<Statuses>) {
			(action.payload !== 'All')
				?
				errorHandler<Statuses, IItemRow[]>(server.onFilterByStatus, action.payload)
					.then(res => !res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError))
				:
				errorHandler<IRequestAllProjects, IItemRow[]>(server.getProjects, { skip: 0 })
					.then(res => !res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError));
		},

		onFilterByType(state, action: PayloadAction<Types>) {
			(action.payload !== 'All')
				?
				errorHandler<Types, IItemRow[]>(server.onFilterByType, action.payload)
					.then(res => !res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError))
				:
				errorHandler<IRequestAllProjects, IItemRow[]>(server.getProjects, { skip: 0 })
					.then(res => !res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError));
		},

		onSortProjects(state, action: PayloadAction<IRequestSortProjects>) {
			errorHandler<IRequestSortProjects, IItemRow[]>(server.onSortProjects, action.payload)
				.then(res => !res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError));
		},

		getProjects(state, action: PayloadAction<IRequestAllProjects>) {
			errorHandler<IRequestAllProjects, IItemRow[]>(server.getProjects, action.payload)
				.then(res => state.projects = res.projects);
		},

		fetchingError(state, action: PayloadAction<string>) {
			state.isError = true;
			state.errorMessage = action.payload;
		}
	}
});

export default projectSlice.reducer;

//!res.isError ? state.projects = res.projects : (state.errorMessage = res.errorMessage, state.isError = res.isError)