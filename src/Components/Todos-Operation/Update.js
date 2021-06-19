import React from 'react';
import '../StyleSheets/Update.css';
import { Button } from 'react-bootstrap';
import { db } from '../../firebase';

function Update({ id, singleItem }) {
	const handleUpdate = (id, singleItem) => {
		db.child(id).update({
			itemName: singleItem,
		});
	};
	return (
		<Button onClick={() => handleUpdate(id, singleItem)} variant="secondary">
			Update
		</Button>
	);
}

export default Update;
