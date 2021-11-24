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
		name: 'exchg_seg',
		label: 'Exchg Seg',
		options: {
			...sortOption,
			setCellHeaderProps: () => ({ style: { minWidth: '100px' } }),
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
		options: sortOption,
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
		name: 'buy_value',
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
		name: 'sell_value',
		label: 'Sell Value',
		options: sortOption,
	},
	// {
	// 	name: 'sell_qty',
	// 	label: 'Sell Qty Lots',
	// },
];

export { columns };
