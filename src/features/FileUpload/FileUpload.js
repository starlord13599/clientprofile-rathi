import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone';
import { useSnackbar } from 'notistack';

import MiniDrawer from '../Drawer/Drawer';
import useStyles from './fileupload.style';
import { withRouter } from 'react-router';
import { dropAllTransactions, uplaodFile } from './FileUploadSlice';

function FileUpload() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();

	const [NFOfiles, setNFOFiles] = useState([]);
	const [NSEfiles, setNSEFiles] = useState([]);

	const handleNFOFileChange = (files) => {
		setNFOFiles(files);
	};

	const handleNSEFileChange = (files) => {
		setNSEFiles(files);
	};

	const handleNFOFilesSubmit = async (e) => {
		try {
			e.preventDefault();

			const formData = new FormData();

			for (const file of NFOfiles) {
				formData.append(`${file.name}`, file);
			}

			const { rejected_files, message } = await dispatch(
				uplaodFile({ url: '/api/transaction/upload-fo', formData: formData })
			).unwrap();

			if (rejected_files?.length !== 0) {
				const rejected_files_errors = rejected_files.join(',');
				return enqueueSnackbar(`Following files were rejected:- ${rejected_files_errors}`, {
					variant: 'error',
				});
			}

			return enqueueSnackbar(message, { variant: 'success' });
		} catch (error) {
			return enqueueSnackbar(error.message, { variant: 'error' });
		}
	};

	const handleNSEFilesSubmit = async (e) => {
		try {
			e.preventDefault();

			const formData = new FormData();

			for (const file of NSEfiles) {
				formData.append(`${file.name}`, file);
			}

			const { rejected_files, message } = await dispatch(
				uplaodFile({ url: '/api/transaction/upload-equity', formData: formData })
			).unwrap();

			if (rejected_files?.length !== 0) {
				const rejected_files_errors = rejected_files.join(',');
				return enqueueSnackbar(`Following files were rejected:- ${rejected_files_errors}`, {
					variant: 'error',
				});
			}

			return enqueueSnackbar(message, { variant: 'success' });
		} catch (error) {
			return enqueueSnackbar(error.message, { variant: 'error' });
		}
	};

	const handleDropTransaction = async () => {
		try {
			await dispatch(dropAllTransactions()).unwrap();
			return enqueueSnackbar('All transactions were deleted', { variant: 'success' });
		} catch (error) {
			return enqueueSnackbar(error.message, { variant: 'error' });
		}
	};

	return (
		<MiniDrawer>
			<Container>
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={6}>
						<form className={classes.uploadForm} onSubmit={handleNFOFilesSubmit}>
							<Paper className={classes.paper}>
								<DropzoneArea
									acceptedFiles={['text/plain']}
									clearOnUnmount
									useChipsForPreview
									dropzoneText={'Upload NFO files here'}
									onChange={handleNFOFileChange}
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
						<form className={classes.uploadForm} onSubmit={handleNSEFilesSubmit}>
							<Paper className={classes.paper}>
								<DropzoneArea
									acceptedFiles={['text/plain']}
									clearOnUnmount
									useChipsForPreview
									dropzoneText={'Upload NSE files here'}
									onChange={handleNSEFileChange}
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
					<Grid item xs={12}>
						<Button
							onClick={handleDropTransaction}
							color="secondary"
							variant="contained"
						>
							Delete all transactions
						</Button>
					</Grid>
				</Grid>
			</Container>
		</MiniDrawer>
	);
}

export default withRouter(FileUpload);
