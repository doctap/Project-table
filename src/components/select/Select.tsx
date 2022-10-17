import React, { useState } from 'react';
import { ItemKeys } from '../../server/Server';
import styles from './Select.module.scss';

interface ISelect {
	options: string[];
	onSelect: (option: string, key: ItemKeys) => void;
	defaultState: string;
	basisSelect: ItemKeys;
}

export default function Select(props: ISelect, key: ItemKeys) {

	const [showList, setShowList] = useState(false);
	const [selectedOption, setSelectedOption] = useState(props.defaultState)

	const getOption = (event: React.MouseEvent<HTMLButtonElement>) => {
		const elem = event.currentTarget;
		props.onSelect(elem.name, props.basisSelect);
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
