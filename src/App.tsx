import React, { useState } from 'react';
import './App.css';
import ButtonMoreLess from './components/buttonMoreLess/ButtonMoreLess';
import ButtonSort from './components/buttonSort/ButtonSort';
import ItemList from './components/itemList/ItemList';
import SelectedFilterSort from './components/selectedFilterSort/SelectedFilterSort';
import SortPanel from './components/sortPanel/SortPanel';
import { ItemKeys, items } from './server/Server';

function App() {

	const [arrItems, setArrItems] = useState(items);

	const selectedFiltered = (filter: string, key: ItemKeys) => {
		setArrItems([...items.filter(it => it[key] === filter)])
	};

	const sortedItems = (sort: string) => {
		let pr: ItemKeys[];

		if(sort[0] === '-') {
			sort.slice(1)
		}

		

		items.sort((a, b) => a[pr[0]] === b[pr[0]] ? 0 : a[pr[0]] < b[pr[0]] ? -1 : 1)
	};

	return (
		<div className="App">

			<ButtonMoreLess />

			<table>

				<SortPanel sortedItems={sortedItems} selectedFilter={selectedFiltered} items={items} />

				<ItemList items={arrItems} />
			</table>

		</div>
	);
}

export default App;
