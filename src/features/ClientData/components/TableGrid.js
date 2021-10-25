import React from 'react';
import TableGridBody from './TableGridBody';
import TableGridHead from './TableGridHead';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

function TableGrid({ columns, classes, orderBy, order, createSortHandler, rows }) {
	return (
		<TableContainer className={classes.container}>
			<Table stickyHeader aria-label="sticky table">
				<TableGridHead
					columns={columns}
					orderBy={orderBy}
					order={order}
					createSortHandler={createSortHandler}
				></TableGridHead>
				<TableGridBody rows={rows}></TableGridBody>
			</Table>
		</TableContainer>
	);
}

export default TableGrid;
