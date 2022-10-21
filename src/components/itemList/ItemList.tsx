import React from 'react';
import { IItemRow } from '../../server/Server';
import ItemRow from '../itemRow/ItemRow';
import styles from './ItemList.module.scss';

interface IItemList {
	items: IItemRow[];
}

export default function ItemList(props: IItemList) {
	return (
		<tbody>
			{props.items.map(it =>
				<ItemRow
					id={it.id}
					name={it.name}
					status={it.status}
					type={it.type}
					conditions={it.conditions}
					volume={it.volume}
					roi={it.roi}
					free={it.free}
					hedge={it.hedge}
				/>
			)}
		</tbody>
	)
}
