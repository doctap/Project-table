import React from 'react';
import styles from './ButtonMoreLess.module.scss';

interface IButtonMoreLess {
	showButtonMoreLess?: boolean;
}

export default function ButtonMoreLess(props: IButtonMoreLess) {

	if (!props.showButtonMoreLess ?? false) return null;
	return (
		<div className={styles.ArrowButtons}>
			<button><span className={styles.buttonTop}>expand_less</span></button>
			<button><span className={styles.buttonBottom}>expand_more</span></button>
		</div>
	)
}