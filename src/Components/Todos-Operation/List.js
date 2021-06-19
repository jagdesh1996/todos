import React from 'react';
import '../StyleSheets/List.css';

function List({ itemName, comp }) {
	return <p className={comp === true ? 'comp' : ''}>{itemName}</p>;
}

export default List;
