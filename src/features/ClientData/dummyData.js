import Chip from '@material-ui/core/Chip';

const sortFilter = {
	sort: true,
	filter: true,
};

const sortOption = {
	sort: true,
	filter: false,
};

const columns = [
	{
		name: 'account_id',
		label: 'Account Id',
		options: {
			...sortFilter,
			setCellHeaderProps: () => ({ style: { minWidth: '150px' } }),
		},
	},
	{
		name: 'exchange_seg',
		label: 'Exchg Seg',
		options: {
			...sortFilter,
			// setCellHeaderProps: () => ({ style: { minWidth: '100px' } }),
			customBodyRender: (value, tableMeta, updateValue) => {
				return <Chip label={value} />;
			},
		},
	},
	{
		name: 'trading_symbol',
		label: 'Trading Symbol',
		options: sortOption,
	},
	{
		name: 'symbol',
		label: 'Symbol',
		options: sortOption,
	},
	{
		name: 'expiry_date',
		label: 'Expiry Date',
		options: {
			...sortOption,
			setCellHeaderProps: () => ({ style: { minWidth: '150px' } }),
		},
	},
	{
		name: 'instrument_name',
		label: 'Instrument Name',
		options: sortOption,
	},
	{
		name: 'buy_qty',
		label: 'Buy Qty',
		options: sortOption,
	},
	{
		name: 'buy_avg',
		label: 'Buy Avg Price',
		options: sortOption,
	},
	{
		name: 'buy_amount',
		label: 'Buy Value',
		options: sortOption,
	},
	// {
	// 	name: 'buy_qty_lots',
	// 	label: 'Buy Qty Lots',
	// },
	{
		name: 'sell_qty',
		label: 'Sell Qty',
		options: sortOption,
	},
	{
		name: 'sell_avg',
		label: 'Sell Avg Price',
		options: sortOption,
	},
	{
		name: 'sell_amount',
		label: 'Sell Value',
		options: sortOption,
	},
	// {
	// 	name: 'sell_qty',
	// 	label: 'Sell Qty Lots',
	// },
];

export { columns };
