import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';

import MiniDrawer from '../Drawer/Drawer';
import useStyles from './fileupload.style';
import { withRouter } from 'react-router';

function FileUpload() {
	const classes = useStyles();

	const [selectedFiles1, setSelectedFiles1] = useState([]);
	const [selectedFiles2, setSelectedFiles2] = useState([]);

	const handleFile1OnChange = (files) => {
		setSelectedFiles1(files);
	};

	const handleFile2OnChange = (files) => {
		setSelectedFiles2(files);
	};

	const handleOnFile1Submit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		for (const file of selectedFiles1) {
			formData.append(`${file.name}`, file);
		}

		// Details of the uploaded file
		console.log(formData.values());

		// Request made to the backend api
		// Send formData object
		const response = await axios.post(
			'http://1edd-150-129-206-169.ngrok.io/api/transaction/upload-new-transactions',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

		console.log(response);
	};

	const handleOnFile2Submit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		for (const file of selectedFiles2) {
			formData.append(`${file.name}`, file);
		}

		// Details of the uploaded file
		console.log(formData.values());

		// Request made to the backend api
		// Send formData object
		const response = await axios.post(
			'http://1edd-150-129-206-169.ngrok.io/api/transaction/upload-new-transactions',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);

		console.log(response);
	};

	return (
		<MiniDrawer>
			<Container>
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={6}>
						<form className={classes.uploadForm} onSubmit={handleOnFile1Submit}>
							<Paper className={classes.paper}>
								<DropzoneArea
									acceptedFiles={['text/plain']}
									clearOnUnmount
									useChipsForPreview
									onChange={handleFile1OnChange}
									Icon={CloudUploadOutlinedIcon}
									previewGridProps={{
										container: {
											spacing: 1,
											direction: 'row',
											justifyContent: 'center',
										},
									}}
								/>
							</Paper>

							<Button
								className={classes.uploadButton}
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
							>
								upload
							</Button>
						</form>
					</Grid>

					<Grid item xs={6}>
						<form className={classes.uploadForm} onSubmit={handleOnFile2Submit}>
							<Paper className={classes.paper}>
								<DropzoneArea
									acceptedFiles={['text/plain']}
									clearOnUnmount
									useChipsForPreview
									onChange={handleFile2OnChange}
									Icon={CloudUploadOutlinedIcon}
									previewGridProps={{
										container: {
											spacing: 1,
											direction: 'row',
											justifyContent: 'center',
										},
									}}
								/>
							</Paper>

							<Button
								className={classes.uploadButton}
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
							>
								upload
							</Button>
						</form>
					</Grid>
				</Grid>
			</Container>
		</MiniDrawer>
	);
}

export default withRouter(FileUpload);
