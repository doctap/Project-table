import React from 'react';
import { IItemRow } from '../../server/Server';
import ButtonAction from '../buttonAction/ButtonAction';
import styles from './ItemRow.module.scss';

export default function ItemRow(props: IItemRow) {
	return (
		<tr
			id={props.id.toString()}
		>
			<td>{props.status}{props.name}</td>
			<td>{props.type}</td>
			<td>{props.conditions}</td>
			<td>{props.volume}</td>
			<td>{props.roi}</td>
			<td>{props.free}</td>
			<td>{props.hedge}</td>
			<td>
				<ButtonAction onClick={() => console.log('first')} buttonText='Buy' />
			</td>
		</tr>
	)
}
