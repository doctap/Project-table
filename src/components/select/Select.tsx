import React, { useState } from 'react';
import styles from './Select.module.scss';

interface ISelect {
	options: string[];
	onSelect: (option: string) => void
}

export default function Select(props: ISelect) {

	const [showList, setShowList] = useState(false);
	const [selectedOption, setSelectedOption] = useState('All')

	const getOption = (event: React.MouseEvent<HTMLButtonElement>) => {
		const elem = event.currentTarget;
		props.onSelect(elem.name);
		setSelectedOption(elem.name);
		setShowList(false);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.selectButton} onClick={() => setShowList(!showList)} children='expand_more' />

			<span>{selectedOption}</span>

			{
				showList
					?
					<ul className={styles.list}>
						{props.options.map(o => <li key={o}><button children={o} name={o} onClick={getOption} /></li>)}
					</ul>
					:
					null
			}

		</div>
	)
}
