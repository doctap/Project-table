import React, { useState } from 'react';
import { ItemKeys } from '../../server/Server';
import Option from '../option/Option';
import styles from './Select.module.scss';

interface ISelect<T> {
	options: T[];
	onSelect: (option: T) => void;
	basisSelect: ItemKeys;
}

export default function Select<T>(props: ISelect<T>) {

	const [showList, setShowList] = useState(false);
	const [selectedOption, setSelectedOption] = useState<T>(props.options[0]);

	const getOption = (select: T) => {
		props.onSelect(select);
		setSelectedOption(select);
		setShowList(false);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.selectButton} onClick={() => setShowList(!showList)} children='expand_more' />

			<span
				className={styles.currentOption}
				onClick={() => setShowList(!showList)}
			>
				{String(selectedOption)}
			</span>
			{
				showList
					?
					<ul className={styles.list}>
						{
							props.options.map(o =>
								<li key={String(o)}>
									<Option select={o} onClick={getOption} />
								</li>)
						}
					</ul>
					:
					null
			}
		</div>
	)
}
