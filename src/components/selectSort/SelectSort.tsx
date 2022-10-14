import React from 'react';
import ButtonMoreLess from '../buttonMoreLess/ButtonMoreLess';
import ButtonSort from '../buttonSort/ButtonSort';
import Select from '../select/Select';
import styles from './SelectSort.module.scss';

export default function SelectSort() {

	const getSortParam = (sort: string) => {
		console.log(sort)
	};

	return (
		<div className={styles.selectSort}>
			<Select options={['12', '34', '56']} onSelect={getSortParam} />

			<ButtonSort text='Project' onClick={() => console.log('Project')} />

			<ButtonMoreLess />
		</div>
	)
}
