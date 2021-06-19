import React from 'react';
import '../StyleSheets/CMarked.css';
import { Button } from 'react-bootstrap';
import { db } from '../../firebase';

function CMarked({ id, comp }) {
	const handleMarked = (id) => {
		db.child(id).update({
			completed: !comp,
		});
	};
	return (
		<Button onClick={() => handleMarked(id)} variant="success">
			Complete
		</Button>
	);
}

export default CMarked;
