import React from 'react';
import styles from './ButtonMoreLess.module.scss';

export default function ButtonMoreLess() {
	return (
		<div className={styles.ArrowButtons}>
			<button><span className={styles.buttonTop}>expand_less</span></button>
			<button><span className={styles.buttonBottom}>expand_more</span></button>
		</div>
	)
}