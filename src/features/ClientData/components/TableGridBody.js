import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableGridRow from './TableGridRow';

function TableGridBody({ rows }) {
	return (
		<TableBody>
			{rows.map((row) => {
				return <TableGridRow key={row.accountId} row={row}></TableGridRow>;
			})}
		</TableBody>
	);
}

export default TableGridBody;
