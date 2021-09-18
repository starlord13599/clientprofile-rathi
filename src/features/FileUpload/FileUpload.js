import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Container from '@material-ui/core/Container';
import { DropzoneArea } from 'material-ui-dropzone';

import MiniDrawer from '../Drawer/Drawer';
import useStyles from './fileupload.style';

function FileUpload() {
	const classes = useStyles();

	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileOnChange = (files) => {
		setSelectedFiles(files);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(selectedFiles);
	};

	return (
		<MiniDrawer>
			<Container>
				<form onSubmit={handleOnSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<DropzoneArea
									acceptedFiles={['text/plain']}
									clearOnUnmount
									useChipsForPreview
									onChange={handleFileOnChange}
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
						</Grid>

						<Grid item xs={3}>
							<Button type="submit" fullWidth variant="contained" color="primary">
								upload
							</Button>
						</Grid>
					</Grid>
				</form>
			</Container>
		</MiniDrawer>
	);
}

export default FileUpload;
