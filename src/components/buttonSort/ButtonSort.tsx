import React from 'react';
import { ItemKeys } from '../../server/Server';
import styles from './ButtonSort.module.scss';

interface IButtonSort {
	text: string;
	onClick: (name: ItemKeys, isRevers: boolean) => void;
	baseSort: ItemKeys;
}

let isRevers = false;

export default function ButtonSort(props: IButtonSort) {

	const onButtonClick = () => {
		props.onClick (props.baseSort, isRevers);
		isRevers = !isRevers;
	};

	return (
		<button className={styles.buttonSort} children={props.text} onClick={onButtonClick} />
	)
}
