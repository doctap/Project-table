import React from 'react';
import styles from './ButtonSort.module.scss';

interface IButtonSort {
	text: string;
	onClick: () => void;
}

export default function ButtonSort(props: IButtonSort) {
	return (
		<button className={styles.buttonSort} children={props.text} onClick={props.onClick} />
	)
}
