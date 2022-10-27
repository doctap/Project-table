import { combineReducers, configureStore } from "@reduxjs/toolkit";
import httpClientProjectReducer from "./reducers/ProjectSlice";

const rootReducer = combineReducers({
	httpClientProjectReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
