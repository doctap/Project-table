import React from 'react';
import { ItemKeys } from '../../server/Server';
import ButtonMoreLess from '../buttonMoreLess/ButtonMoreLess';
import ButtonSort from '../buttonSort/ButtonSort';
import Select from '../select/Select';
import styles from './SelectedFilterSort.module.scss';

interface ISelectedFilterSort {
	// showButtonMoreLess: boolean;
	options: string[];
	defaultSelectState: string;
	getFilterParam: (filter: string, key: ItemKeys) => void;
	baseSelect: ItemKeys;
	buttonSortText: string;
	baseButtonSort: ItemKeys;
	onClickButtonSort: (sort: ItemKeys, isRevers: boolean) => void;
}

export default function SelectedFilterSort(props: ISelectedFilterSort) {

	const set = new Set(props.options);
	const statuses: string[] = [];
	set.forEach(s => statuses.push(s));

	return (
		<div className={styles.selectSort}>
			<Select options={statuses} basisSelect={props.baseSelect} onSelect={props.getFilterParam} defaultState={props.defaultSelectState} />

			<ButtonSort baseSort={props.baseButtonSort} text={props.buttonSortText} onClick={props.onClickButtonSort} />
		</div>
	)
}