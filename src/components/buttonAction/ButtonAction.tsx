import React from 'react';
import styles from './ButtonAction.module.scss';

interface IButtonAction {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	buttonText: string;
}

export default function ButtonAction(props: IButtonAction) {
	return (
		<button
			className={styles.ButtonAction}
			type='button'
			onClick={props.onClick}
			children={props.buttonText}
		/>
	)
}
