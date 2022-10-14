import './App.css';
import ItemList from './components/itemList/ItemList';
import { items } from './server/Server';

function App() {
	return (
		<div className="App">

			<table>


				<ItemList items={items} />
			</table>


		</div>
	);
}

export default App;
