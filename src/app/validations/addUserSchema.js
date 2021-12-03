import * as Yup from 'yup';

const addUserSchema = Yup.object({
	//!add full name last name and role validation
	email: Yup.string().email('Invalid email address').required('Please enter your email address'),
	password: Yup.string()
		.required('Please provide your password')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
});

export default addUserSchema;
