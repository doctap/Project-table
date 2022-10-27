import React from 'react';
import styles from './ButtonTick.module.scss';

export default function ButtonTick() {
	return (
		<button className={styles.buttonTick}>
			<span className={styles.tick}>expand_less</span>
		</button>
	)
}
