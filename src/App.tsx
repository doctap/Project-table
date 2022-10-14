import './App.css';
import ButtonMoreLess from './components/buttonMoreLess/ButtonMoreLess';
import ButtonSort from './components/buttonSort/ButtonSort';
import ItemList from './components/itemList/ItemList';
import SelectSort from './components/selectSort/SelectSort';
import { items } from './server/Server';

function App() {



	return (
		<div className="App">

			<ButtonMoreLess />

			<SelectSort />

			<table>

				<ItemList items={items} />
			</table>

		</div>
	);
}

export default App;
