import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';

function TableGridRow({ row }) {
	return (
		<TableRow>
			<TableCell>{row.accountId}</TableCell>
			<TableCell>
				<Chip label={row.exchgSeg} size="small"></Chip>
			</TableCell>
			<TableCell>{row.tradingSymbol}</TableCell>
			<TableCell>{row.symbol}</TableCell>
			<TableCell>{row.expiryDate}</TableCell>
			<TableCell>{row.instName}</TableCell>
			<TableCell>{row.buyQty}</TableCell>
			<TableCell>{row.buyAvgPrice}</TableCell>
			<TableCell>{row.buyValue}</TableCell>
			<TableCell>{row.buyQtyLots}</TableCell>
			<TableCell>{row.sellQty}</TableCell>
			<TableCell>{row.sellAvgPrice}</TableCell>
			<TableCell>{row.sellValue}</TableCell>
		</TableRow>
	);
}

export default TableGridRow;
