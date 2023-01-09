import React from 'react'
import { IItemRow, Statuses, Types } from '../../server/Server'
import { useAppDispatch } from '../../store/hooks/redux';
import { projectSlice } from '../../store/reducers/ProjectSlice';
import ButtonMoreLess from '../buttonMoreLess/ButtonMoreLess';
import ButtonSort from '../buttonSort/ButtonSort'
import SelectedFilterSort from '../selectedFilterSort/SelectedFilterSort'
import styles from './SortPanel.module.scss';

interface ISortPanel {
	projects: IItemRow[];
}

export default function SortPanel(props: ISortPanel) {

	const dispatch = useAppDispatch();
	const { onFilterByStatus, onFilterByType, onSortProjects } = projectSlice.actions;

	return (
		<thead className={styles.panel}>
			<tr className={styles.Row}>
				<td>
					<SelectedFilterSort<Statuses>
						onFilterByStatus={option => dispatch(onFilterByStatus(option))}
						options={['All', 'green', 'yellow', 'red']}
						baseSelect='status'
						buttonSortText='Project'
						baseButtonSort='name'
						onClickButtonSort={action => dispatch(onSortProjects(action))}
						showButtons={true}
					/>
				</td>
				<td>
					<SelectedFilterSort<Types>
						onFilterByStatus={option => dispatch(onFilterByType(option))}
						options={['All', 'THT', 'TRST']}
						baseSelect='type'
						buttonSortText='Token type'
						baseButtonSort='type'
						onClickButtonSort={action => dispatch(onSortProjects(action))}
						showButtons={false}
					/>
				</td>
				<td>
					<ButtonSort baseSort='conditions' text='Conditions' onClick={action => dispatch(onSortProjects(action))} />
				</td>
				<td>
					<div className={styles.volume}>
						<ButtonSort baseSort='volume' text='Volume' onClick={action => dispatch(onSortProjects(action))} />
						<ButtonMoreLess />
					</div>
				</td>
				<td>
					<ButtonSort baseSort='roi' text='ROI' onClick={action => dispatch(onSortProjects(action))} />
				</td>
				<td>
					<ButtonSort baseSort='free' text='Free float' onClick={action => dispatch(onSortProjects(action))} />
				</td>
				<td>
					<ButtonSort baseSort='hedge' text='Insurance henge' onClick={action => dispatch(onSortProjects(action))} />
				</td>
			</tr>
		</thead>
	)
}
