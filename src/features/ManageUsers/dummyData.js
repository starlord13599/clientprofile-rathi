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
		name: 'first_name',
		label: 'First Name',
		options: {
			...sortFilter,
		},
	},
	{
		name: 'last_name',
		label: 'Last Name',
		options: {
			...sortFilter,
		},
	},
	{
		name: 'email',
		label: 'Email',
		options: sortOption,
	},
	{
		name: 'role',
		label: 'Role',
		options: sortOption,
	},
];

export { columns };
