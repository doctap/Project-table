import React from 'react';

interface IOption<T> {
	onClick: (select: T) => void;
	select: T;
}

export default function Option<T>(props: IOption<T>) {

	const onSelectedClick = (select: T) => {
		props.onClick(select);
	}

  return (
	<button children={String(props.select)} onClick={() => onSelectedClick(props.select)} />
  )
}
