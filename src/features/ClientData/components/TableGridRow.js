import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';

function TableGridRow({ row }) {
	return (
		<TableRow>
			<TableCell>{row.account_id}</TableCell>
			<TableCell>
				<Chip label={row.exchg_seg} size="small"></Chip>
			</TableCell>
			<TableCell>{row.trading_symbol}</TableCell>
			<TableCell>{row.symbol}</TableCell>
			<TableCell>{row.expiry_date}</TableCell>
			<TableCell>{row.instrument_name}</TableCell>
			<TableCell>{row.buy_qty}</TableCell>
			<TableCell>{row.buy_avg}</TableCell>
			<TableCell>{row.buy_amount}</TableCell>
			<TableCell>{row.quantity_in_lots}</TableCell>
			<TableCell>{row.sell_qty}</TableCell>
			<TableCell>{row.sell_avg}</TableCell>
			<TableCell>{row.sell_amount}</TableCell>
			<TableCell>{row.quantity_in_lots}</TableCell>
		</TableRow>
	);
}

export default TableGridRow;
