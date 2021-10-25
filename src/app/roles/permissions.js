import Dashboard from '@material-ui/icons/Dashboard';
import UploadFileIcon from '@material-ui/icons/CloudUpload';

import { ADMIN, EMPLOYEE } from './roles';

const userPermissions = [
	{
		label: 'Dashboard',
		icon: Dashboard,
		permissions: [ADMIN, EMPLOYEE],
		path: '/dashboard',
	},
	{
		label: 'Upload',
		icon: UploadFileIcon,
		permissions: [ADMIN],
		path: '/file-upload',
	},
];

export function getMenu(role) {
	console.log(role);
	const final = userPermissions.filter((permission) => {
		return permission.permissions.includes(role);
	});
	return final;
}
