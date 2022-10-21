import React from 'react';
import { items } from './server/Server';
import ItemTable from './components/itemTable/ItemTable';
import { Routes, Route } from 'react-router-dom';
import NoPage from './components/routePages/NoPage';
import PageProject from './components/routePages/PageProject';

function App() {
	return (
		<Routes>
			<Route>
				<Route index element={<ItemTable items={items} />} />
				{items.map(pr => <Route path={`/${pr.name}`} element={<PageProject project={pr} />} />)}
				<Route path='*' element={<NoPage />} />
			</Route>
		</Routes>
	);
}

export default App;