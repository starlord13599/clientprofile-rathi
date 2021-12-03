import Dashboard from '@material-ui/icons/Dashboard';
import UploadFileIcon from '@material-ui/icons/CloudUpload';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

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
	{
		label: 'Manage Users',
		icon: GroupAddIcon,
		permissions: [ADMIN],
		path: '/manage-users',
	},
];

export function getMenu(role) {
	const final = userPermissions.filter((permission) => {
		return permission.permissions.includes(role);
	});
	return final;
}
