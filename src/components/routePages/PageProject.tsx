import React from 'react';
import { IItemRow } from '../../server/Server';

interface IPageProject {
	project: IItemRow;
}

export default function PageProject(props: IPageProject) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<h1>{props.project.name}</h1>
			{JSON.stringify(props.project)}
		</div>
	)
}
