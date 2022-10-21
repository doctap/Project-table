import React, { useState } from 'react';
import { IItemRow, ItemKeys } from '../../server/Server';
import ItemList from '../itemList/ItemList';
import SortPanel from '../sortPanel/SortPanel';
import styles from './ItemTable.module.scss';

interface IItemTable {
	items: IItemRow[];
}

export default function ItemTable(props: IItemTable) {
	const [arrItems, setArrItems] = useState(props.items);

	const selectedFiltered = (filter: string, key: ItemKeys) => {
		setArrItems([...props.items.filter(it => it[key] === filter)])
	};

	/**
	 * 
	 * @param key server response request object keys
	 * @param isRevers request to a server with '-' for revers items
	 */
	const sortedItems = (key: ItemKeys, isRevers: boolean) => {
		const sortedArr: IItemRow[] = [];
		if (isRevers) {
			if (key === 'conditions') {
				sortedArr.push(...getSortedDates(arrItems).reverse())
				setArrItems(sortedArr)
			} else {
				sortedArr.push(...arrItems.sort((a, b) => a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1).reverse())
				setArrItems(sortedArr)
			}
		} else {
			if (key === 'conditions') {
				sortedArr.push(...getSortedDates(arrItems))
				setArrItems(sortedArr)
			} else {
				sortedArr.push(...arrItems.sort((a, b) => a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1))
				setArrItems(sortedArr)
			}
		}
	};

	return (
		<div className={styles.wrapper}>

			<table className={styles.ItemTable}>
				<SortPanel sortedItems={sortedItems} selectedFilter={selectedFiltered} items={props.items} />

				<ItemList items={arrItems} />
			</table>

		</div>
	)
}

const getDate = (str: string) => {
	const fractionsNum = str.match(/[+-]?\d+(\.\d+)?/g) ?? ['1', '1'];
	const floats = fractionsNum.map(s => parseFloat(s));

	const thisYear = new Date().getFullYear();
	const thisMonth = new Date().getMonth();

	if (str.includes('month')) return Number(new Date(thisYear, thisMonth + floats[0], floats[1]));
	else return Number(new Date(thisYear + floats[0], floats[1] - 1, 1));
}

const getSortedDates = (itemsArr: IItemRow[]) => {
	return itemsArr.sort((a, b) => getDate(a.conditions) - getDate(b.conditions))
}