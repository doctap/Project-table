import React from 'react';
import { ItemKeys } from '../../server/Server';
import { IActionSort } from '../../store/reducers/ProjectSlice';
import ButtonMoreLess from '../buttonMoreLess/ButtonMoreLess';
import ButtonSort from '../buttonSort/ButtonSort';
import Select from '../select/Select';
import styles from './SelectedFilterSort.module.scss';

interface ISelectedFilterSort<T> {
	options: T[];
	onFilterByStatus: (option: T) => void;
	baseSelect: ItemKeys;
	buttonSortText: string;
	baseButtonSort: ItemKeys;
	onClickButtonSort: (action: IActionSort) => void;
	showButtons: boolean;
}

export default function SelectedFilterSort<T>(props: ISelectedFilterSort<T>) {

	return (
		<div className={styles.selectSort}>
			<Select options={props.options} onSelect={props.onFilterByStatus} basisSelect={props.baseSelect} />

			<ButtonSort baseSort={props.baseButtonSort} text={props.buttonSortText} onClick={props.onClickButtonSort} />

			{props.showButtons && <ButtonMoreLess />}
		</div>
	)
}