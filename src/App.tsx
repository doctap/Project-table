import React, { useEffect } from 'react';
import ItemTable from './components/itemTable/ItemTable';
import { Routes, Route } from 'react-router-dom';
import NoPage from './components/routePages/NoPage';
import PageProject from './components/routePages/PageProject';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { projectSlice } from './store/reducers/ProjectSlice';

function App() {

	const { projects } = useAppSelector(state => state.httpClientProjectReducer);
	const { getProjects } = projectSlice.actions;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProjects({skip: 0}));
	}, [])

	return (
		<Routes>
			<Route>
				<Route index element={<ItemTable projects={projects} />} />
				{projects.map(pr => <Route key={pr.name} path={`/${pr.name}`} element={<PageProject project={pr} />} />)}
				<Route path='*' element={<NoPage />} />
			</Route>
		</Routes>
	);
}

export default App;