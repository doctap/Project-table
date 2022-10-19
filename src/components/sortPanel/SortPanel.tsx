import React from 'react'
import { IItemRow, ItemKeys } from '../../server/Server'
import ButtonSort from '../buttonSort/ButtonSort'
import SelectedFilterSort from '../selectedFilterSort/SelectedFilterSort'
import styles from './SortPanel.module.scss';

interface ISortPanel {
	items: IItemRow[];
	selectedFilter: (filter: string, key: ItemKeys) => void;
	sortedItems: (sort: ItemKeys, isRevers: boolean) => void;
}

export default function SortPanel(props: ISortPanel) {
	return (
		<thead className={styles.panel}>
			<tr className={styles.Row}>
				<td>
					<SelectedFilterSort
						getFilterParam={props.selectedFilter}
						// showButtonMoreLess={true}
						options={props.items.map(it => it.status)}
						defaultSelectState='All'
						baseSelect='status'
						buttonSortText='Project'
						baseButtonSort='name'
						onClickButtonSort={props.sortedItems}
					/>
				</td>
				<td>
					<SelectedFilterSort
						getFilterParam={props.selectedFilter}
						// showButtonMoreLess={false}
						options={props.items.map(it => it.type)}
						defaultSelectState='All'
						baseSelect='type'
						buttonSortText='Token type'
						baseButtonSort='type'
						onClickButtonSort={props.sortedItems}
					/>
				</td>
				<td>
					<ButtonSort baseSort='conditions' text='Conditions' onClick={props.sortedItems} />
				</td>
				<td>
					<ButtonSort baseSort='volume' text='Volume' onClick={props.sortedItems} />
				</td>
				<td>
					<ButtonSort baseSort='roi' text='ROI' onClick={props.sortedItems} />
				</td>
				<td>
					<ButtonSort baseSort='free' text='Free float' onClick={props.sortedItems} />
				</td>
				<td>
					<ButtonSort baseSort='hedge' text='Insurance henge' onClick={props.sortedItems} />
				</td>
			</tr>
		</thead>
	)
}
