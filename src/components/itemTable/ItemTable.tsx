import React from 'react';
import { IItemRow } from '../../server/Server';
import ItemList from '../itemList/ItemList';
import SortPanel from '../sortPanel/SortPanel';
import styles from './ItemTable.module.scss';

interface IItemTable {
	projects: IItemRow[];
}

export default function ItemTable(props: IItemTable) {
	return (
		<div className={styles.wrapper}>

			<table className={styles.ItemTable}>
				<SortPanel projects={props.projects} />

				<ItemList items={props.projects} />
			</table>

		</div>
	)
}

