import React from 'react';
import { ItemKeys } from '../../server/Server';
import { IActionSort } from '../../store/reducers/ProjectSlice';
import styles from './ButtonSort.module.scss';

interface IButtonSort {
	text: string;
	onClick: (action: IActionSort) => void;
	baseSort: ItemKeys;
}

let isRevers = false;

export default function ButtonSort(props: IButtonSort) {

	const onButtonClick = () => {
		props.onClick ({key: props.baseSort, isRevers: isRevers});
		isRevers = !isRevers;
	};

	return (
		<button className={styles.buttonSort} children={props.text} onClick={onButtonClick} />
	)
}
