import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
	return (
		<div className="spinner">
			<CircularProgress color="secondary" />
			<p>go corona go</p>
		</div>
	);
}
