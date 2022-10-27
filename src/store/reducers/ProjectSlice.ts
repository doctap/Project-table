import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import server, { IItemRow, ItemKeys, Statuses, Types } from "../../server/Server";

export interface IActionSort {
	key: ItemKeys;
	isRevers: boolean;
}

interface IRequest {
	skip?: number;
	take?: number;
}

interface IProjectState {
	projects: IItemRow[];

}

const initialState: IProjectState = {
	projects: [],
}

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		onFilterByStatus(state, action: PayloadAction<Statuses>) {
			state.projects = (action.payload !== 'All') ? server.onFilterByStatus(action.payload) : server.getProjects()
		},
		onFilterByType(state, action: PayloadAction<Types>) {
			state.projects = (action.payload !== 'All') ? server.onFilterByType(action.payload) : server.getProjects()
		},
		onSortProjects(state, action: PayloadAction<IActionSort>) {
			state.projects = server.onSortProjects(action.payload.key, action.payload.isRevers)
		},
		getProjects(state, action: PayloadAction<IRequest>) {
			state.projects = server.getProjects(action.payload.skip, action.payload.take)
		},
	}
})

export default projectSlice.reducer;

