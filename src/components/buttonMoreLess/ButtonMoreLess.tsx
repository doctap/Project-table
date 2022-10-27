import React from 'react';
import styles from './ButtonMoreLess.module.scss';
import ButtonTick from './buttonTick/ButtonTick';

export default function ButtonMoreLess() {
	return (
		<div className={styles.ArrowButtons}>
			<div className={styles.buttonTop}>
				<ButtonTick />
			</div>
			<div className={styles.buttonBottom}>
				<ButtonTick />
			</div>
		</div>
	)
}