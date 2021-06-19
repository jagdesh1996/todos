import { Button } from 'react-bootstrap';
import React from 'react';
import '../StyleSheets/Delete.css';
import { db } from '../../firebase';

function Delete({ id }) {
	const handleDel = (id) => {
		db.child(id).remove();
	};
	return (
		<Button onClick={() => handleDel(id)} variant="danger">
			Delete
		</Button>
	);
}

export default Delete;
