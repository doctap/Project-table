import React from 'react';
import { ItemKeys } from '../../server/Server';
import styles from './ButtonSort.module.scss';

interface IButtonSort {
	text: string;
	onClick: (name: string) => void;
	baseSort: ItemKeys;
}

let markRevers: '' | '-' = '';

export default function ButtonSort(props: IButtonSort) {

	const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const elem = event.currentTarget;
		props.onClick (markRevers + elem.name);
		markRevers === '' ? markRevers = '-' : markRevers = '';
	};

	return (
		<button className={styles.buttonSort} children={props.text} name={props.baseSort} onClick={onButtonClick} />
	)
}
